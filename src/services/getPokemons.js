import { BASE_URL } from '../../config'

const getTypes = ({ types }) => {
  return types?.map(el => el.type.name)
}

const getUrlImage = ({ sprites }) => {
  return sprites?.other?.dream_world?.front_default
}

const ApiResponse = ({ dataToShow } = {}) => {
  return dataToShow.map(({ id, name, types, sprites }) => {
    const PokemonTypes = getTypes({ types })
    const PokemonUrlImage = getUrlImage({ sprites })
    return { id, name, PokemonTypes, PokemonUrlImage }
  })
}

export default async function getPokemons ({ limit = 20, page = 0 } = {}) {
  const res = await window.fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${page * limit}`)

  if (res.status !== 200) {
    const { url, status } = res
    throw Error(`Error: ${status} in fetch ${url}`)
  }

  const { results } = await res.json()
  const promises = results.map(({ url }) => window.fetch(url).then(res => res.json()))
  const resPromiseAll = await Promise.allSettled(promises)
  const dataToShow = resPromiseAll.map(res => res.value)

  return ApiResponse({ dataToShow })
}

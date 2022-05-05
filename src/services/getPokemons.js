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

export default async function getPokemons ({ limit = 20, page }) {
  // obtener url de cada pokemon
  const res = await window.fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${page * limit}`)
  const { results } = await res.json()

  // crear array de promesas con las urls obtenidas
  const promises = results.map(({ url }) => window.fetch(url).then(res => res.json()))
  // Promise.allSettled resuelve el array de promesas
  const resPromiseAll = await Promise.allSettled(promises)

  // extraer datos necesarios para mostrar
  const dataToShow = resPromiseAll.map(res => res.value)

  return ApiResponse({ dataToShow })
}

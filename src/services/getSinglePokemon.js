import { BASE_URL } from '../../config'
import getSinglePokemonSpecies from './getSinglePokemonSpecies'

const getTypes = ({ types }) => {
  return types?.map((el) => el.type.name)
}

const getUrlImage = ({ sprites }) => {
  return sprites?.other?.dream_world?.front_default
}

const getStats = ({ stats }) => {
  return stats.map(({ base_stat: baseStat, stat }) => {
    const { name } = stat
    return { name, baseStat }
  })
}

const ApiResponse = async (results) => {
  const { id, name, types, species, sprites, height, weight, stats } = results
  const { url } = species
  const PokemonTypes = getTypes({ types })
  const PokemonUrlImage = getUrlImage({ sprites })
  const PokemonStats = getStats({ stats })
  const PokemonSpecies = await getSinglePokemonSpecies({ url })
  return { id, name, height, weight, PokemonTypes, PokemonUrlImage, PokemonSpecies, PokemonStats }
}

export default async function getSinglePokemon({ id }) {
  const res = await window.fetch(`${BASE_URL}/pokemon/${id}`)
  if (res.status !== 200) {
    const { url, status } = res
    throw Error(`Error: ${status} in fetch ${url}`)
  }
  const results = await res.json()

  return ApiResponse(results)
}

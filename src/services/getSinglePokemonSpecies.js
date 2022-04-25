
const getSpecies = ({ resultSpecies }) => {
  const { genera } = resultSpecies
  const pokeSpecie = genera[7].genus
  return pokeSpecie
}

export default async function getSinglePokemonSpecies ({ url }) {
  const res = await window.fetch(`${url}`)
  const resultSpecies = await res.json()

  return getSpecies({ resultSpecies })
}

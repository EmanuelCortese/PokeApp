import { usePokemons } from '../../hooks/usePokemons'

import { Spinner } from '../../components/Spinner/Spinner'
import PokeList from '../../components/PokeList/PokeList'
import ErrorPage from '../Error404'
import { PokeHeader } from '../../components/PokeHeader/PokeHeader'

export default function Home () {
  const { loading, error } = usePokemons({ once: false })
  if (error) return <ErrorPage message='Sorry! But an error occurred on the server when loading the Pokemon list.' />
  if (loading) return <Spinner />
  return (
    <>
      <PokeHeader show title='Pokedex' margin />
      <PokeList />
    </>
  )
}

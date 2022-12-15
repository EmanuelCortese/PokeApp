import { usePokemons } from '../../hooks/usePokemons'

import { useContext } from 'react'
import PokeHeader from '../../components/PokeHeader/PokeHeader'
import PokeList from '../../components/PokeList/PokeList'
import PokeSearch from '../../components/PokeSearch/PokeSearch'
import { Spinner } from '../../components/Spinner/Spinner'
import { PokeContext } from '../../context/PokeContext'
import ErrorPage from '../Error404'

import { PokeFooter } from '../../components/PokeFooter/PokeFooter'

export default function Home() {
  const { loading, error } = usePokemons({ once: false })
  const {
    state: { keyword },
  } = useContext(PokeContext)
  if (error) return <ErrorPage message='Sorry! But an error occurred on the server when loading the Pokemon list.' />
  if (loading) return <Spinner />
  return (
    <>
      <PokeHeader show title='Pokedex' margin />

      {keyword && keyword.length > 0 ? <PokeSearch /> : <PokeList />}

      <PokeFooter />
    </>
  )
}

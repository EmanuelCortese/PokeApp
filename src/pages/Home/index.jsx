import { usePokemons } from '../../hooks/usePokemons'

import { Spinner } from '../../components/Spinner/Spinner'
import PokeList from '../../components/PokeList/PokeList'

export default function Home () {
  const { loading } = usePokemons({ once: false })
  return (
    <>
      {
        loading
          ? <Spinner />
          : <PokeList />
      }

    </>
  )
}

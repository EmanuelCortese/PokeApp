import { useEffect, useRef, useCallback } from 'react'
import { PokeCard } from '../PokeCard/PokeCard'
import { usePokemons } from '../../hooks/usePokemons'
import { useObserver } from '../../hooks/useObserver'
import { PokemonList } from './style'
import debounce from 'just-debounce-it'

export default function PokeList () {
  const { data, loading, setPage } = usePokemons()
  const externalRef = useRef()
  const { isNearScreen } = useObserver({ once: false, externalRef: loading ? null : externalRef })

  const debounceHandleNextPage = useCallback(debounce(() => setPage(page => page + 1), 400), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      <PokemonList>
        {
                data?.map(({ id, name, PokemonTypes, PokemonUrlImage }) => {
                  return (
                    <div key={id}>
                      <PokeCard
                        name={name}
                        id={id}
                        type={PokemonTypes}
                        image={PokemonUrlImage}
                      />
                    </div>
                  )
                })
              }
      </PokemonList>

      <div id='visor' ref={externalRef} />
    </>
  )
}

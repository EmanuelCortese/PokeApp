import { debounce } from 'lodash'
import { useCallback, useContext, useEffect, useRef } from 'react'
import { Spinner } from '../../components/Spinner/Spinner'
import { PokeContext } from '../../context/PokeContext'
import { useObserver } from '../../hooks/useObserver'
import { usePokemons } from '../../hooks/usePokemons'
import PokeCard from '../PokeCard/PokeCard'
import { PokemonList } from './style'

export default function PokeList() {
  window.localStorage.removeItem('keyword')
  const {
    state: { data },
  } = useContext(PokeContext)
  const { nextPage, loading, error } = usePokemons()
  const externalRef = useRef()
  const { isNearScreen } = useObserver({ once: false, externalRef: loading ? null : externalRef })

  const debounceHandleNextPage = useCallback(
    debounce(() => nextPage(), 400),
    []
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])
  return (
    <>
      <PokemonList>
        {!data || error || (data.length <= 0 && !loading) ? (
          <span>There're no Pokemons</span>
        ) : (
          <>
            {data?.map(({ id, name, PokemonTypes, PokemonUrlImage }, index) => {
              return (
                <div key={index}>
                  <PokeCard name={name} id={id} type={PokemonTypes} image={PokemonUrlImage} />
                </div>
              )
            })}

            <div className='loader'>{loading && <Spinner />}</div>
          </>
        )}
      </PokemonList>
      <div id='visor' ref={externalRef} />
    </>
  )
}

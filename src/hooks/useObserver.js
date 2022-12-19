import { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../context/PokeContext'

export const useObserver = ({ distance = '250px', once = true, externalRef }) => {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const {
    state: { data },
  } = useContext(PokeContext)
  useEffect(() => {
    let observer

    const observerChanges = ([element], observer) => {
      if (element.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(observerChanges, {
        rootMargin: distance,
      })
      if (externalRef.current !== null && externalRef && data) observer.observe(externalRef.current)
    })

    return () => observer && observer.disconnect()
  }, [])

  return { isNearScreen }
}

import Context from '../context/PokeContext'
import { useState, useEffect, useContext } from 'react'

export const useObserver = ({ distance = '100px', once = true, externalRef }) => {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const { data } = useContext(Context)

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
        rootMargin: distance
      })
      if (externalRef.current !== null && externalRef && data) observer.observe(externalRef.current)
    })

    return () => observer && observer.disconnect()
  }, [])

  return { isNearScreen }
}

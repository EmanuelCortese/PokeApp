import { useState, useEffect } from 'react'

export const useObserver = ({ distance = '100px', once = true, externalRef }) => {
  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(() => {
    let observer

    const observerChanges = (entries, observer) => {
      const element = entries[0]
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
      if (externalRef.current !== null && externalRef) observer.observe(externalRef.current)
    })

    return () => observer && observer.disconnect()
  }, [])

  return { isNearScreen }
}

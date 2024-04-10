import { useCallback, useEffect, useRef } from 'react'

export type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void

export interface UseIntersectionObserverParams {
  onIntersect: IntersectHandler
  options?: IntersectionObserverInit
}

export const useIntersectionObserver = <E extends HTMLElement = HTMLDivElement>({
  onIntersect,
  options,
}: UseIntersectionObserverParams) => {
  const ref = useRef<E>(null)
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          onIntersect(entry, observer)
        }
      })
    },
    [onIntersect],
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, callback, options])

  return ref
}

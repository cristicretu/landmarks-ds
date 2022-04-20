import { useEffect } from 'react'
import { useLayoutEffect, useState } from 'react'
import { overwrites } from 'site/styles/theme.css'
import { useScrollDirection, ScrollDirectionType } from 'use-scroll-direction'

export function useWindowSize(withListener = false, withMenu = true) {
  // [width, height]
  const [windowSize, setWindowSize] = useState([0, 0])

  useLayoutEffect(() => {
    const handleResize = () => {
      const height = withMenu ? window.innerHeight - overwrites.MENU_HEIGHT : window.innerHeight
      setWindowSize([window.innerWidth, height])
    }

    handleResize()

    if (withListener) {
      window.addEventListener('resize', handleResize, { passive: true })
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [withListener, withMenu])

  return windowSize
}

/**
 * Just a wrapper hook over https://github.com/AndrzejSala/use-scroll-direction
 * Just ignores 'NONE' state
 */
export function useScrollDirectionStable(
  options:
    | Readonly<{
        wait?: number | undefined
        timeToReset?: number | undefined
        ref?: import('react').RefObject<HTMLElement | null> | null | undefined
        skip?: boolean
      }>
    | undefined = {}
): { scrollDirectionStable: ScrollDirectionType } {
  const { scrollDirection } = useScrollDirection(options)
  const [scrollDirectionStable, setScrollDirectionStable] = useState<ScrollDirectionType>('NONE')

  useEffect(() => {
    if (scrollDirection === 'NONE' || options.skip) return
    setScrollDirectionStable(scrollDirection)
  }, [scrollDirection, options.skip])

  return {
    scrollDirectionStable
  }
}

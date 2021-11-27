import { useLayoutEffect, useState } from 'react'
import { overwrites } from 'site/styles/theme.css'

export function useWindowSize(withListener = false, withMenu = true) {
  // [width, height]
  const [windowSize, setWindowSize] = useState([0,0])

  useLayoutEffect(() => {
    const handleResize = () => {
      const height = withMenu
        ? window.innerHeight - overwrites.MENU_HEIGHT
        : window.innerHeight
      setWindowSize([window.innerWidth, height])
    }

    handleResize()

    if (withListener) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }

  }, [])

  return windowSize
}
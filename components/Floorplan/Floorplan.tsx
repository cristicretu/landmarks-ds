import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useSpring } from 'react-spring'
import { Box } from '../Box'

import * as styles from './styles.css'
import { Spinner } from '../Spinner'
import { vars } from 'site/styles/theme.css'
import { ImageWithSpinner } from '../ImageWithSpinner'

interface IProps {
  children: any
  background: string
  viewBox: string
  backgroundSizes?: string
  blurDataURL?: any
  expandOnMobile?: boolean
  globalTransform?: string
  className?: string
  loadingColor?: keyof typeof vars.color
  overlays?: Array<React.ReactElement>
}

export const Floorplan = ({ background, backgroundSizes, children, className, viewBox, globalTransform, blurDataURL, overlays = [], expandOnMobile, loadingColor }: IProps) => {
  const [loaded, setLoaded] = useState(false)
  const mobileViewportRef = useRef<HTMLDivElement>(null)
  const [_, animation] = useSpring(() => ({ scrollX: 300 }))

  // scroll viewport sideways on mobile
  useEffect(() => {
    if (!expandOnMobile || !loaded) { return }
    animation({
      from: { scrollX: 300 },
      to: { scrollX: 1200 - window.innerWidth },
      config: {
        damping: 0.3,
        frequency: 12,
      },
      onChange: ({ value }) => {
        if (mobileViewportRef) {
          mobileViewportRef.current?.scroll(value.scrollX, 0)
        }
      }
    })
  }, [expandOnMobile, loaded])

  return (
    <div
      className={cn({
        [styles.floorplanContainer]: expandOnMobile
      }, className)}
      onTouchStart={() => animation.stop()}
      ref={mobileViewportRef}>
      <Box
        position="relative"
        className={cn({ [styles.floorplanExpanded]: expandOnMobile })}>
        <ImageWithSpinner
          priority
          sizes={backgroundSizes}
          src={background as any}
          {...blurDataURL && {
            placeholder: 'blur',
            blurDataURL
          }}
          layout="fill"
          objectFit="contain"
          onLoadingComplete={() => setLoaded(true)}>
          <Spinner background={loadingColor} />
        </ImageWithSpinner>
        <>
          <svg
            style={{ visibility: loaded ? 'visible' : 'hidden' }}
            className={styles.containerSVG}
            viewBox={viewBox}
          >
            {globalTransform ? (
              <g transform={globalTransform}>
                {children}
              </g>
            ) : children}
          </svg>
        </>
      </Box>
    </div>
  )
}

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, noop } from 'landmarks-ds'
import { IUIComponent } from 'landmarks-ds/utils/types'
import { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react'
import { NextButton, PrevButton } from './CarouselButtons'
import cn from 'classnames'
import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
  navigation?: boolean
  autoplay?: boolean
  onChange?: (selectedIndex: number) => void
}

export function Carousel({
  children,
  className,
  navigation = true,
  autoplay = true,
  onChange = noop,
  ...rest
}: IProps) {
  const autoplayRef = useRef(
    Autoplay(
      { delay: autoplay ? 5000 : 1000000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  )
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [autoplayRef.current])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    onChange(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex, onChange])

  useEffect(() => {
    if (!embla) return
    onSelect()
    // @ts-ignore
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
    return () => {
      embla.off('select', onSelect)
    }
  }, [embla, setScrollSnaps, onSelect])

  return (
    <Box
      className={cn(styles.carousell, className)}
      position="relative"
      style={{ height: '100%' }}
      {...rest}
    >
      <Box
        overflow="hidden"
        innerRef={viewportRef}
        style={{ height: '100%' }}
        background="black_alpha_08"
      >
        <Box display="flex" style={{ height: '100%' }}>
          {Children.map(children, (child, index) => (
            <Box className={styles.slide}>
              {cloneElement(child, {
                active: index === selectedIndex
              })}
            </Box>
          ))}
        </Box>
      </Box>
      {navigation && (
        <>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </>
      )}
    </Box>
  )
}

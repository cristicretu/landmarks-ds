import * as styles from './styles.css'
import { useState } from 'react'
import cn from 'classnames'
import { useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { IUIComponent } from 'landmarks-ds/utils/types'
import { Box, Container, ImageWithSpinner, Section, Spinner } from 'landmarks-ds'
import { Carousel } from '../Carousel'
import { vars } from 'site/styles/theme.css'

interface IProps extends IUIComponent {
  id?: any
  images: Array<{
    src: string
    content?: any
    description?: string
  }>
  inverted?: boolean
  children?: any
  autoplay?: boolean
  backgroundNavButtons?: keyof typeof vars.color
  colorNavButtons?: keyof typeof vars.color
  whenInView?: (activeSection: string) => void
}

export function SlideDeck({
  id,
  images,
  autoplay,
  color,
  children,
  inverted = false,
  backgroundNavButtons,
  colorNavButtons,
  ...rest
}: IProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const hasCarousel = images && images.length > 1
  const transitions = useTransition(selectedIndex, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    // position:absolute prevents leaving text from pushing incoming text below
    leave: { opacity: 0, position: 'absolute' }
  })
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <Section
      variant="slideUp"
      className={cn(styles.goldenGallery, {
        [styles.invertedGallery]: inverted
      })}
      id={id}
      {...rest}
    >
      {/* Background items */}
      <Box
        innerRef={ref}
        className={cn(styles.vw40, {
          [inverted ? styles.slideFromRight : styles.slideFromLeft]: true,
          [styles.transitionEnd]: inView
        })}
        display={{ mobile: 'none', laptop: 'block' }}
        transition="all 1s"
      />
      <Box
        className={cn(styles.vw60, {
          [inverted ? styles.slideFromLeft : styles.slideFromRight]: true,
          [styles.transitionEnd]: inView
        })}
        position="relative"
        transition="all 1s"
      >
        {hasCarousel ? (
          <Carousel
            color={colorNavButtons || color}
            background={backgroundNavButtons || rest.background}
            className={styles.sixtyToFullHeight}
            onChange={setSelectedIndex}
            autoplay={autoplay}
          >
            {images?.map((image) => (
              <Box className={styles.sixtyToFullHeight} key={image.src}>
                <ImageWithSpinner src={image.src} layout="fill" objectFit="cover">
                  <Spinner background="secondary" />
                </ImageWithSpinner>
              </Box>
            ))}
          </Carousel>
        ) : (
          <Box className={styles.sixtyToFullHeight}>
            <ImageWithSpinner src={images[0].src} layout="fill" objectFit="cover">
              <Spinner background="secondary" />
            </ImageWithSpinner>
          </Box>
        )}
      </Box>

      {/* Foreground items */}
      <Box className={styles.contentAbove}>
        <Container className={styles.fullContainer}>
          <Box
            color={color}
            className={cn(styles.contentLeft, {
              [inverted ? styles.slideFromRight : styles.slideFromLeft]: true,
              [styles.transitionEnd]: inView
            })}
            transition="all 1.5s"
          >
            <Box className={styles.textContent}>
              {children && <Box className={styles.bottomContent}>{children}</Box>}
              {transitions((anim, item) => {
                return (
                  images[item] && (
                    <animated.div style={anim} className={styles.bottomContent}>
                      {images[item].content}
                    </animated.div>
                  )
                )
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </Section>
  )
}

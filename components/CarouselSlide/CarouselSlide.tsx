import { Box, Container, ImageWithSpinner, Spinner } from 'landmarks-ds'
import { IUIComponent } from 'landmarks-ds/utils/types'
import cn from 'classnames'

import * as styles from './styles.css'
import * as transitions from '../../styles/transitions.css'

interface IProps extends IUIComponent {
  backgroundImageUrl: string
  active?: boolean
  children?: any
  overlay?: boolean
  transitionType?: keyof typeof transitions.from
}

export function CarouselSlide({
  className,
  backgroundImageUrl,
  children,
  alignHorizontal = 'center',
  alignVertical = 'center',
  overlay = true,
  transitionType = 'slideUp',
  active = false,
  ...rest
}: IProps & styles.TAlignHorizontalRecipe & styles.TAlignVerticalRecipe) {
  return (
    <Box className={className} {...rest}>
      <Box className={styles.tagLineWrapper}>
        <Container
          style={{ height: '100%' }}
          className={cn(
            styles.tagLineContainer,
            styles.alignHorizontalRecipe({ alignHorizontal }),
            styles.alignVerticalRecipe({ alignVertical }),
            transitions.enabled,
            transitions.duration['1'],
            transitions.from[transitionType],
            {
              [transitions.to[transitionType]]: active
            }
          )}>
          {children}
        </Container>
      </Box>
      {overlay && <div className={styles.overlay} />}

      {/* TODO: try to pan the image on mobile */}
      <ImageWithSpinner
        priority
        alt="something"
        src={backgroundImageUrl}
        layout="fill"
        objectFit="cover"
        sizes="(min-width: 1000px) 100vw, (min-width: 700px) 1500px, 1200px">
        <Spinner background="secondary" />
      </ImageWithSpinner>
    </Box>
  )
}

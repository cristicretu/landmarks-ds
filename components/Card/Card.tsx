import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { TCardRecipe } from './styles.css'
import { Typography } from '../Typography'
import cn from 'classnames'
import { SmartLink } from '../SmartLink'

interface IProps extends IUIComponent {
  children: any
  href?: string
  title?: string
  [key: string]: any
}

interface ICardMediaProps extends IUIComponent {
  children: any
  height: string
  title?: any
}

export function Card({
  children,
  className,
  elevation,
  radius,
  href,
  title,
  ...rest
}: IProps & TCardRecipe) {
  return (
    <Box
      {...href && {
        component: SmartLink,
        href,
        title,
      }}
      className={cn(
        className,
        styles.cardRecipe({ elevation, radius }),
        {
          [styles.onHoverScale]: href
        }
      )}
      {...rest}
    >
      {children}
    </Box>
  )
}

export function CardMedia({
  children,
  height,
  title,
  ...rest
}: ICardMediaProps) {
  return (
    <Box
      position="relative"
      style={{ height }}
      {...rest}
      className={styles.vignette}
    >
      {children}
      {title && (
        <Box className={styles.mediaTitle}>
          {title}
        </Box>
      )}
    </Box>
  )
}

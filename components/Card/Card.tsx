import * as styles from './styles.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { TCardRecipe } from './styles.css'
import cn from 'classnames'

interface IProps extends IUIComponent {
  children: any
  [key: string]: any
}

interface ICardMediaProps extends IUIComponent {
  children: any
  height: string
}

export function Card({
  children,
  className,
  elevation,
  radius,
  ...rest
}: IProps & TCardRecipe) {
  return (
    <Box
      className={cn(styles.cardRecipe({ elevation, radius }), className)}
      {...rest}
    >
      {children}
    </Box>
  )
}

export function CardMedia({ children, height, ...rest }: ICardMediaProps) {
  return (
    <Box position="relative" style={{ height }} {...rest}>
      {children}
    </Box>
  )
}

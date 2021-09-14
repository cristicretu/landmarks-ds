import { ReactElement, cloneElement } from 'react'
import cn from 'classnames'
import * as styles from './styles.css'
import { Box, BoxProps } from '../Box'

interface IProps extends BoxProps {
  children?: any
  className?: string
  variant?: keyof typeof styles.variants
  size?: keyof typeof styles.sizes
  endIcon?: ReactElement
  startIcon?: ReactElement
  [key: string]: any
}

export function Button({
  children,
  className,
  component = 'button',
  variant = 'text',
  size = 'large',
  startIcon,
  endIcon,
  ...rest
}: IProps) {
  const endIconStyled = endIcon && cloneElement(endIcon, { className: styles.endIcon })
  const cls = cn(styles.button, styles.variants[variant], styles.sizes[size], className)

  return (
    <Box
      component={component}
      className={cls}
      {...rest}>
      {startIcon}{children}{endIconStyled}
    </Box>
  )
}
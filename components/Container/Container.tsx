import cn from 'classnames'
import { Box } from '../Box'
import { Atoms } from 'site/styles/sprinkles.css'
import * as styles from './styles.css'

interface IProps extends Atoms {
  children: any
  gutter?: boolean

  style?: any
  className?: string
}

export function Container({ children, className, gutter = true, ...rest }: IProps) {
  return (
    <Box {...rest} className={cn(className, styles.container, {
      [styles.noGutter]: !gutter
    })}>{children}</Box>
  )
}
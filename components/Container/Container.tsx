import cn from 'classnames'
import { Box } from '../Box'
import { Atoms } from '../../../system/styles/sprinkles.css'
import * as styles from './styles.css'

interface IProps extends Atoms {
  children: any
  className?: string
  gutter?: boolean
  style?: any
}

export function Container({ children, className, gutter = true, ...rest }:IProps) {
  return (
    <Box {...rest} className={cn(className, styles.container, {
      [styles.noGutter]: !gutter
    })}>{children}</Box>
  )
}
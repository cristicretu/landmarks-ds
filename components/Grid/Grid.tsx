import cn from 'classnames'
import { Box } from '../Box'
import { Atoms } from '../../../styles/sprinkles.css'
import * as styles from './styles.css'

interface IProps extends Atoms {
  children: any
  className?: string
}

export function Grid({ children, className, ...rest }: IProps) {
  return (
    <Box {...rest} className={cn(styles.grid, className)}>
      {children}
    </Box>
  )
}
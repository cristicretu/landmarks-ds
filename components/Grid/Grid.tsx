import { Children, cloneElement } from 'react'
import cn from 'classnames'
import { Box } from '../Box'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: any
  // TODO: gutter greater than large causes overflow issues
  gutter?: keyof typeof styles.gridGutter
  className?: string
}

export function Grid({ children, className, gutter = 'none', ...rest }: IProps) {
  // TODO: filter our 'false' children that cause errors
  const decoratedChildren = Children.map(children, (child) => (
    cloneElement(child, {
      gutter: child.props.gutter || gutter
    })
  ))

  return (
    <Box className={cn(styles.grid, styles.gridGutter[gutter], className)} {...rest}>
      {decoratedChildren}
    </Box>
  )
}
import cn from 'classnames'
import { Box } from '../Box'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children: any
  gutter?: boolean
}

export function Container({ children, className, gutter = true, ...rest }: IProps) {
  return (
    <Box
      padding="large"
      // breaks position: sticky for child elements https://www.designcise.com/web/tutorial/how-to-fix-issues-with-css-position-sticky-not-working#checking-if-an-ancestor-element-has-overflow-property-set
      // overflow="hidden"
      position="relative" {...rest} className={cn(className, styles.container, {
      [styles.noGutter]: !gutter
    })}>{children}</Box>
  )
}
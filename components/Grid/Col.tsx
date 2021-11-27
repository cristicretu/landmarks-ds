import cn from 'classnames'
import { Box } from '../Box'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  children?: any
  mobile?: keyof typeof styles.mobileSizeVariants
  tablet?: keyof typeof styles.tabletSizeVariants
  laptop?: keyof typeof styles.laptopSizeVariants
  desktop?: keyof typeof styles.desktopSizeVariants
  gutter?: keyof typeof styles.gridGutter
}

export function Col({
  children,
  className,
  mobile = '12',
  tablet,
  laptop,
  desktop,
  gutter = 'none',
  ...rest
}: IProps) {
  const finalClassName = cn(
    className,
    styles.colGutter[gutter],
    mobile && styles.mobileSizeVariants[mobile],
    tablet && styles.tabletSizeVariants[tablet],
    laptop && styles.laptopSizeVariants[laptop],
    desktop && styles.desktopSizeVariants[desktop],
  )
  return (
    <Box className={finalClassName} {...rest}>
      {children}
    </Box>
  )
}
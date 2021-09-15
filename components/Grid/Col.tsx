import cn from 'classnames'
import { Box } from '../Box'
import { Atoms } from 'site/styles/sprinkles.css'
import * as styles from './styles.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends Atoms, IUIComponent {
  children?: any
  mobile?: keyof typeof styles.mobileSizeVariants
  tablet?: keyof typeof styles.tabletSizeVariants
  laptop?: keyof typeof styles.laptopSizeVariants
  desktop?: keyof typeof styles.desktopSizeVariants
}

export function Col({
  children,
  className,
  mobile = '12',
  tablet,
  laptop,
  desktop,
  ...rest
}: IProps) {
  const finalClassName = cn(
    className,
    styles.col,
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
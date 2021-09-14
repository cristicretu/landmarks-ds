import cn from 'classnames'
import { Box } from '../Box'
import { Atoms } from '../../../styles/sprinkles.css'
import * as styles from './styles.css'

interface IProps extends Atoms {
  children?: any
  className?: string
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
    <Box {...rest} className={finalClassName}>
      {children}
    </Box>
  )
}
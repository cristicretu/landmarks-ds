import Link from 'next/link'
import cn from 'classnames'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { IUIComponent } from "../../utils/types"
import { Box } from '../Box'

import * as styles from './styles.css'

interface IDropdownMenuItemProps extends IUIComponent {
  children: any
  href?: string
}

export function DropdownMenuItem({ children, href, className, ...rest }: IDropdownMenuItemProps) {
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <Menu.Item asChild>
          {/* Not sure this works properly, might need to forwardRef to innerRef */}
          <Box
            component="a"
            className={cn(styles.menuItem, className)}
            {...rest}>
            {children}
          </Box>
        </Menu.Item>
      </Link>
    );
  }

  return (
    <Box
      component={Menu.Item}
      className={cn(styles.menuItem, className)}
      {...rest}>
      {children}
    </Box>
  )
}
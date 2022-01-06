import * as Menu from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'

import * as styles from './styles.css'

interface IProps extends IUIComponent {
  children: any
  content: any
}

export function DropdownMenu({ children, content, className, ...rest }: IProps) {
  return (
    <Menu.Root>
      {/* Make sure the child trigger component uses React.forwardRef, otherwise it won't work */}
      <Menu.Trigger asChild>{children}</Menu.Trigger>
      <Box component={Menu.Content} className={cn(className, styles.menuContent)} {...rest}>
        {content}
        {/* <Menu.Arrow
          height={6}
          width={10}
          className={styles.arrow}
        /> */}
      </Box>
    </Menu.Root>
  )
}
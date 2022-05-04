import * as RadixPopover from '@radix-ui/react-popover'
import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'
import cn from 'classnames'

import * as styles from './styles.css'

interface IProps extends IUIComponent {
  trigger: any
  children: any
}

export function Popover({ trigger, children, className, ...rest }: IProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger>{trigger}</RadixPopover.Trigger>
      <Box
        side="top"
        component={RadixPopover.Content}
        className={cn(styles.poiContent, className)}
        {...rest}>
        {children}
      </Box>
    </RadixPopover.Root>
  )
}

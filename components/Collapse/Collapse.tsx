import cn from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import * as RadixCollapsible from '@radix-ui/react-collapsible'
import { CollapsibleProps } from '@radix-ui/react-collapsible'

import { Box } from '../Box'
import * as styles from './styles.css'
import { Typography } from '../Typography'
import { IUIComponent } from '../../utils/types'
import { useState } from 'react'

interface IProps extends IUIComponent {
  title: any
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  iconOpened?: any
  iconClosed?: any
}

export function Collapse({
  title,
  children,
  defaultOpen = false,
  iconClosed = <MdKeyboardArrowDown size={24} />,
  iconOpened = <MdKeyboardArrowUp size={24} />,
  variant = 'clean',
  ...rest
}: IProps & styles.TCollapseRecipe) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <RadixCollapsible.Root
      defaultOpen={defaultOpen}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      asChild>
      <Box
        {...rest}
        className={styles.collapseRecipe({
          open: isOpen,
          variant
        })}>
        <RadixCollapsible.Trigger className={styles.trigger}>
          {title}
          <div className={styles.icon}>{isOpen ? iconOpened : iconClosed}</div>
        </RadixCollapsible.Trigger>
        <RadixCollapsible.Content>{children}</RadixCollapsible.Content>
      </Box>
    </RadixCollapsible.Root>
  )
}

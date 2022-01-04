import * as TooltipPrimitives from '@radix-ui/react-tooltip'
import * as styles from './styles.css'

import { IUIComponent } from '../../utils/types'
import cn from 'classnames'
import { Box } from '../Box'

interface IProps extends IUIComponent {
  children: any
  content: any
  [key: string]: any
}

export function Tooltip({ children, content, className, ...rest }: IProps) {
  return (
    <TooltipPrimitives.Root>
      <TooltipPrimitives.Trigger asChild>{children}</TooltipPrimitives.Trigger>
      {/* forwarding all sprinkles props to Content */}
      <Box component={TooltipPrimitives.Content} className={cn(styles.content, className)} {...rest}>
        {content}
        <TooltipPrimitives.Arrow
          height={6}
          width={10}
          className={styles.arrow}
        />
      </Box>
    </TooltipPrimitives.Root>
  )
}

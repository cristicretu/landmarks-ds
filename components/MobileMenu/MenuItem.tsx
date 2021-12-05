import Link from 'next/link'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import { noop } from '../../utils'
import * as styles from './styles.css'
import { Box } from '../Box'

interface IProps extends IUIComponent {
  title: string
  href: string
  toggleMenu?: () => void
}

export function MenuItem({ title, href, toggleMenu = noop, className, ...rest }: IProps) {
  return (
    <Link href={href}>
      <Box
        component="a"
        title={title}
        className={cn(styles.item, className)}
        onClick={toggleMenu}
        {...rest}>
        {title}
      </Box>
    </Link>
  )
}
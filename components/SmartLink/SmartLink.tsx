import Link from 'next/link'
import { isInternalLink } from '../../utils'
import { IUIComponent } from "../../utils/types"
import { Box } from '../Box'

interface IProps extends IUIComponent {
  href: string
  title: string
  children: any
}

export const SmartLink = ({ href, title, children, ...rest }: IProps) => {
  if (isInternalLink(href)) {
    return (
      <Link href={href} passHref>
        <Box component="a" title={title} {...rest}>{children}</Box>
      </Link>
    )
  }

  return (
    <Box href={href} title={title} component="a" target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </Box>
  )
}
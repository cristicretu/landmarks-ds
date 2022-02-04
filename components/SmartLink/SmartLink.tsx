import Link from 'next/link'
import { isActionLink, isInternalLink } from '../../utils'
import { IUIComponent } from '../../utils/types'
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
        <Box component="a" title={title} {...rest}>
          {children}
        </Box>
      </Link>
    )
  }

  // mailto: and tel: links
  if (isActionLink(href)) {
    return (
      <Box
        href={href}
        title={title}
        component="a"
        {...rest}>
        {children}
      </Box>
    )
  }

  return (
    <Box
      href={href}
      title={title}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}>
      {children}
    </Box>
  )
}

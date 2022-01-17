import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import React from 'react'

import { IUIComponent } from '../../utils/types'
import * as styles from './styles.css'
import { Box } from '../Box'
import { ReactElement } from 'react'
import { SplitText } from '../SplitText'

interface IProps extends IUIComponent {
  title: any
  href?: string
  prefix?: ReactElement
  suffix?: ReactElement
  activeIndicator?: 'partialUnderline' | 'fullUnderline'
  [key: string]: any
}

import * as styleUtils from '../../../site/styles/utils.css'

export type TDesktopMenuItemProps = IProps & styles.TLightDarkRecipe & styles.TVariantRecipe

const variantHandler = {
  split: SplitText,
  regular: RegularTitle,
}

export const DesktopMenuItem = React.forwardRef(({
  title,
  href,
  className,
  hue = 'onLight',
  activeIndicator = 'partialUnderline',
  // variant are handled using both custom components and variantRecipe
  variant = 'regular',
  prefix,
  suffix,
  active,
  ...rest
}: TDesktopMenuItemProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  const { asPath } = useRouter()
  // can be manually activated by passing the active prop, or automatically based on url/href
  const isLinkActive = typeof active !== 'undefined'
    ? active
    : asPath === href
  // here we are calling the component function without JSX and it expects props to be passed as an object
  const processedTitle = variantHandler[variant]({ children: title })
  const content = (
    <Box
      component="a"
      innerRef={ref}
      title={title}
      className={cn(
        className,
        styles.lightDarkRecipe({
          hue,
          active: isLinkActive
        }),
        styles.variantRecipe({
          variant
        }),
        // optional indicators applied on for active element
        {
          [styleUtils.activeIndicatorPartialUnderlineRecipe({ active: isLinkActive })]: activeIndicator === 'partialUnderline',
          [styleUtils.activeIndicatorFullUnderlineRecipe({ active: isLinkActive })]: activeIndicator === 'fullUnderline'
        }
      )}
      {...rest}>
      {prefix}
      {processedTitle}
      {suffix}
    </Box>
  )

  if (href) {
    return (
      <Link href={href} passHref>
        {content}
      </Link>
    )
  }

  return content
})

function RegularTitle({ children }: { children: string }) {
  return children
}
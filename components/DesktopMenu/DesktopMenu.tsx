import { ReactElement, Children, cloneElement } from 'react'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

import { IUIComponent } from '../../utils/types'
import { Box } from "../Box"
import { Container } from '../Container'
import { LanguageSwitcher } from '../LanguageSwitcher'
import * as styles from './styles.css'

interface CommonProps extends IUIComponent {
  logo: ReactElement
  children: any
  cta?: ReactElement
  sticky?: boolean
  contained?: boolean
  extra?: ReactElement
}

type ConditionalProps =
  | { logoPlacement?: 'left', menuPlacement?: 'left' | 'center' | 'right' }
  | { logoPlacement?: 'center', menuPlacement?: 'close' | 'far' }

export type TDesktopMenuProps = CommonProps & ConditionalProps

/**
 * RESPONSIBILITIES:
 *
 * - handle multiple layouts using logoPlacement and menuPlacement combinations
 * - keep logo visible on mobile, but hide the rest of the menus
 * - knows about hue and passes it to it's child DesktopMenuItems and LanguageSwitcher
 * - sticky functionality
 * - provide extra locations where we can insert items:
 *    - extra: next to the logo
 *    - cta: the main Call to Action area
 *
 * NOT IN SCOPE
 * - menu item styles
 */
export function DesktopMenu({
  logo,
  children,
  cta,
  extra,
  hue = 'onLight',
  logoPlacement = 'left',
  menuPlacement,
  sticky = false,
  contained = true,
  className,
  ...rest
}: TDesktopMenuProps & styles.TLightDarkRecipe) {
  const { t } = useTranslation()
  const cls = cn(className, {
    [styles.stickyMenu]: sticky
  })

  if (logoPlacement === 'left') {
    return (
      <Box
        component={contained ? Container : 'section'}
        className={cls}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        userSelect='none'
        {...rest}>
        <Box
          display="flex"
          marginRight={{ laptop: menuPlacement === 'left' ? 'large' : 'none' }}>
          {logo}
          {extra}
        </Box>
        <Box
          className={styles.hideOnMobile}
          style={{
            ...(menuPlacement === 'left') && { marginRight: 'auto' },
            ...(menuPlacement === 'right') && { marginLeft: 'auto' },
          }}>
          {Children.map(children, (child) => (
            cloneElement(child, {
              hue,
            })
          ))}
        </Box>
        <Box
          className={styles.hideOnMobile}
          display="flex"
          marginLeft={{ laptop: menuPlacement === 'right' ? 'large' : 'none' }}>
          <LanguageSwitcher
            variant="sidebyside"
            hue={hue} />
          {cta}
        </Box>
      </Box>
    )
  } else {
    const childCount = Children.count(children)
    const logoOrder = Math.ceil(childCount / 2)
    const buttonOrder = childCount + 1

    return (
      <Box
        component={contained ? Container : 'section'}
        className={cls}
        display="flex"
        justifyContent={{ mobile: 'flex-start', laptop: 'center' }}
        alignItems="center"
        userSelect='none'
        {...rest}>
        <Box
          display="flex"
          marginX={{ laptop: 'xxlarge' }}
          style={{
            ...(menuPlacement === 'far') && { margin: 'auto' },
            order: logoOrder,
          }}>
          {logo}
          {extra}
        </Box>
        {Children.map(children, (child, i) => cloneElement(child, {
          className: cn(styles.hideOnMobile, child.props.className),
          hue,
          style: {
            order: i < logoOrder ? i : logoOrder + 1
          }
        }))}
        <LanguageSwitcher
          className={styles.hideOnMobile}
          style={{ order: childCount }} />
        <div style={{ order: buttonOrder }}>
          {cta}
        </div>
      </Box>
    )
  }
}
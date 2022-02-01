import { useRouter } from 'next/router'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import * as styles from './styles.css'
import { TLightDarkRecipe } from '../DesktopMenu/styles.css'
import { Box } from '../Box'
import { DesktopMenuItem } from '../DesktopMenu'

interface IProps extends IUIComponent {
  toggleMenu?: () => void
  variant?: 'dropdown' | 'sidebyside'
}

const languageNames: {
  [key: string]: string
} = {
  ro: 'Română',
  en: 'English',
  hu: 'Magyar',
  it: 'Italiano',
}

export function LanguageSwitcher({
  variant = 'dropdown',
  hue,
  className,
  style,
  toggleMenu,
  ...rest
}: IProps & TLightDarkRecipe) {
  const router = useRouter()
  const { locales, locale } = router

  // Single language, switcher is not needed
  if (!locales || locales && locales.length === 1) {
    return null
  }

  if (variant === 'sidebyside') {
    return (
      <Box display="flex" marginRight="large" {...rest}>
        {locales?.map((l: string) => (
          <DesktopMenuItem
            hue={hue}
            active={l === locale}
            title={l.toUpperCase()}
            marginRight="medium"
            onClick={() => changeLang(l)} />
        ))}
      </Box>
    )
  }

  return (
    <select className={cn(styles.select, className)} value={locale} onChange={(e) => changeLang(e.target.value)} style={style}>
      {locales?.map((l: string) => (
        <option key={l} value={l}>{languageNames[l]}</option>
      ))}
    </select>
  )

  function changeLang(lang: string) {
    if (toggleMenu) {
      toggleMenu()
    }
    router.push(`${router.asPath}`, `${router.asPath}`, {
      locale: lang
    })
  }
}
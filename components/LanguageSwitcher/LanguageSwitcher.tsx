import { useRouter } from 'next/router'
import cn from 'classnames'

import { IUIComponent } from '../../utils/types'
import * as styles from './styles.css'

interface IProps extends IUIComponent {
  toggleMenu?: () => void
}

const languageNames: {
  [key: string]: string
} = {
  ro: 'Română',
  en: 'English',
  hu: 'Magyar',
  it: 'Italiano',
}

export function LanguageSwitcher({ className, style, toggleMenu }: IProps) {
  const router = useRouter()
  const { locales, locale } = router

  // Single language, switcher is not needed
  if (!locales || locales && locales.length === 1) {
    return null
  }

  return (
    <select className={cn(styles.select, className)} value={locale} onChange={changeLang} style={style}>
      {locales?.map((l: string) => (
        <option key={l} value={l}>{languageNames[l]}</option>
      ))}
    </select>
  )

  function changeLang(e: any) {
    if (toggleMenu) {
      toggleMenu()
    }
    router.push(`${router.asPath}`, `${router.asPath}`, {
      locale: e.target.value
    })
  }
}
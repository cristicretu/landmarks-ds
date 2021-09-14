import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Button } from '../Button'

import * as styles from './styles.css'
import { Box } from '../Box'
import { CUSTOM_EVENTS, logEvent } from '../../utils/gtm'

interface IProps {
  title: string
  phone: string
  children: any
}

export function SimpleMobileMenu({ title, phone, children }: IProps) {
  const { t } = useTranslation()

  return (
    <section className={styles.menuContainer}>
      <Box
        position="fixed"
        background="brand"
        color="white"
        padding="medium"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        className={styles.menu}>
        {children}
        <Box display="flex">
          <Button
            component="a"
            size="large"
            background="brandLight"
            borderRadius="small"
            href={`tel:${phone}`}
            marginRight="small"
            onClick={() => logEvent(CUSTOM_EVENTS.SHOW_PHONE)}>
            {t('callNow')}
          </Button>
          <Button
            component="a"
            size="large"
            background="brandLight"
            borderRadius="small"
            title={t('messageUsWhatsapp')}
            href={`https://wa.me/${phone}`}
            onClick={() => logEvent(CUSTOM_EVENTS.CHAT_WHATSAPP)}
            style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Image
              src='/whatsapp.png'
              width="32"
              height="32"
              alt={t('messageUsWhatsapp')} />
          </Button>
        </Box>
      </Box>
    </section>
  )
}
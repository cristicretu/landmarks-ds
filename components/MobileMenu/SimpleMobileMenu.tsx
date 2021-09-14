import Image from 'next/image'

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
            Sună acum
          </Button>
          <Button
            component="a"
            size="large"
            background="brandLight"
            borderRadius="small"
            title="Scrie-ne pe WhatsApp"
            href={`https://wa.me/${phone}`}
            onClick={() => logEvent(CUSTOM_EVENTS.CHAT_WHATSAPP)}
            style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Image
              src='/whatsapp.png'
              width="32"
              height="32"
              alt="Scrie-ne pe WhatsApp" />
          </Button>
        </Box>
      </Box>
    </section>
  )
}
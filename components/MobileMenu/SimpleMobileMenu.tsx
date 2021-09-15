import Image from 'next/image'
import cn from 'classnames'

import { Atoms } from 'site/styles/sprinkles.css'
import { IUIComponent } from '../../utils/types'
import { Button } from '../Button'
import { Box } from '../Box'
import { CUSTOM_EVENTS, logEvent } from '../../utils/gtm'

import * as styles from './styles.css'

interface IProps extends Atoms, IUIComponent {
  phone: string
  children: any
  callText?: string

  buttonProps?: Atoms
}

export function SimpleMobileMenu({ phone, callText = 'Sună', children, className, buttonProps = {}, ...rest }: IProps) {
  return (
    <Box component="section" className={cn(styles.menuContainer, className)} {...rest}>
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
            {...buttonProps}
            onClick={() => logEvent(CUSTOM_EVENTS.SHOW_PHONE)}>
            {callText}
          </Button>
          <Button
            component="a"
            size="large"
            background="brandLight"
            borderRadius="small"
            title="Scrie-ne pe WhatsApp"
            href={`https://wa.me/${phone}`}
            onClick={() => logEvent(CUSTOM_EVENTS.CHAT_WHATSAPP)}
            style={{ paddingTop: 0, paddingBottom: 0 }}
            {...buttonProps}>
            <Image
              src='/whatsapp.png'
              width="32"
              height="32"
              alt="Scrie-ne pe WhatsApp" />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
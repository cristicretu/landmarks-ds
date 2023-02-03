import Image from "next/legacy/image";
import cn from 'classnames'
import { FaPhoneAlt } from 'react-icons/fa'

import { IUIComponent } from '../../utils/types'
import { Button } from '../Button'
import { Box } from '../Box'
import { CUSTOM_EVENTS, logEvent } from '../../utils/gtm'

import * as styles from './styles.css'
import { useScrollDirectionStable } from '../../main'

const defaultLabels = {
  callNow: 'Sună acum',
  messageUsWhatsapp: 'Scrie-ne pe WhatsApp'
}

const defaultClasses = {
  menu: styles.defaultMenu,
  otherButtons: styles.defaultOtherButtons
}

interface IProps extends IUIComponent {
  phone: string
  children: any
  autohide?: boolean

  classes?: Partial<typeof defaultClasses>
  labels?: Partial<typeof defaultLabels>
}

export function SimpleMobileMenu({
  phone,
  children,
  className,
  autohide,
  labels = defaultLabels,
  classes = defaultClasses,
  ...rest
}: IProps) {
  const { scrollDirectionStable } = useScrollDirectionStable({
    skip: !autohide
  })

  return (
    <Box component="section" className={cn(styles.menuContainer, className)} {...rest}>
      <Box
        position="fixed"
        padding="medium"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        className={cn(styles.menu, classes.menu, scrollDirectionStable === 'DOWN' && styles.hidden)}>
        {children}
        <Box display="flex">
          <Button
            size="small"
            href={`tel:${phone}`}
            marginRight="small"
            className={classes.otherButtons}
            onClick={() => logEvent(CUSTOM_EVENTS.SHOW_PHONE)}>
            <Box component={FaPhoneAlt} marginX="small" />
            {labels.callNow}
          </Button>
          <Button
            size="small"
            title={labels.messageUsWhatsapp}
            href={`https://wa.me/${phone}`}
            onClick={() => logEvent(CUSTOM_EVENTS.CHAT_WHATSAPP)}
            className={classes.otherButtons}
            style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Image src="/whatsapp.png" width="32" height="32" alt={labels.messageUsWhatsapp} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

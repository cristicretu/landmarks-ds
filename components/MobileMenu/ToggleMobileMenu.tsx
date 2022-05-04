import Image from 'next/image'
import cn from 'classnames'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { MdMenu, MdClose } from 'react-icons/md'

import { Button } from '../Button'
import * as styles from './styles.css'
import { Box } from '../Box'
import { SimpleMobileMenu } from '.'
import { IUIComponent } from '../../utils/types'

const defaultLabels = {
  close: 'inchide',
  menu: 'meniu',
  callNow: 'Sună acum',
  messageUsWhatsapp: 'Scrie-ne pe WhatsApp'
}

const defaultClasses = {
  menu: styles.defaultMenu,
  mainButton: styles.defaultMainButton,
  mainButtonActive: styles.defaultMainButtonActive,
  otherButtons: styles.defaultOtherButtons,
  content: styles.defaultContent
}

interface IProps extends IUIComponent {
  phone: string
  children: ({ toggleMenu }: { toggleMenu: any }) => void
  title?: string
  subtitle?: string
  autohide?: boolean

  decoration?: string
  classes?: Partial<typeof defaultClasses>
  labels?: Partial<typeof defaultLabels>
}

export function ToggleMobileMenu({
  title,
  subtitle,
  autohide = true,
  decoration,
  phone,
  children,
  classes: receivedClasses,
  labels: receivedLabels,
  ...rest
}: IProps) {
  const classes = {
    ...defaultClasses,
    ...receivedClasses
  }
  const labels = {
    ...defaultLabels,
    ...receivedLabels
  }
  const [isOpen, setOpen] = useState(false)
  const animation = useSpring({
    to: {
      opacity: isOpen ? 1 : 0,
      top: isOpen ? 0 : 1200
    }
  })

  return (
    <>
      <SimpleMobileMenu
        autohide={isOpen ? false : autohide}
        phone={phone}
        labels={labels}
        classes={classes}
        {...rest}>
        <Button
          size="small"
          onClick={toggleMenu}
          className={cn(classes.mainButton, {
            [classes.mainButtonActive]: isOpen
          })}
          prefix={<Box component={isOpen ? MdClose : MdMenu} fontSize="2x" marginRight="small" />}>
          {isOpen ? labels.close : labels.menu}
        </Button>
      </SimpleMobileMenu>

      <animated.nav className={cn(styles.content, classes.content)} style={animation}>
        {children({ toggleMenu })}
        {decoration && (
          <Box position="absolute" zIndex={-1} className={styles.bgImage}>
            <Image src={decoration} alt="decoration" />
          </Box>
        )}
      </animated.nav>
      <Box className={styles.bottomChrome} />
    </>
  )

  function toggleMenu() {
    setOpen(!isOpen)
  }
}

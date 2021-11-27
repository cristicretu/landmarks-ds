import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { useState, ReactElement, Children, cloneElement } from 'react'
import { useSpring, animated } from 'react-spring'
import { MdMenu, MdClose } from 'react-icons/md'

import { Button } from '../Button'
import { Grid, Col } from '../Grid'
import * as styles from './styles.css'
import { H2 } from '../Headings'
import { Box } from '../Box'
import { SimpleMobileMenu } from '.'
import { IUIComponent } from '../../utils/types'

const defaultLabels = {
  close: 'inchide',
  menu: 'meniu',
  logoTitle: 'Inapoi la pagina principala',
  callNow: 'Sună acum',
  messageUsWhatsapp: 'Scrie-ne pe WhatsApp',
}

const defaultClasses = {
  menu: styles.defaultMenu,
  mainButton: styles.defaultMainButton,
  mainButtonActive: styles.defaultMainButtonActive,
  otherButtons: styles.defaultOtherButtons,
  content: styles.defaultContent,
}

interface IProps extends IUIComponent {
  title?: string
  subtitle?: string
  logo: ReactElement
  phone: string
  children: any

  decoration?: string
  classes?: Partial<typeof defaultClasses>
  labels?: Partial<typeof defaultLabels>
}

export function ToggleMobileMenu({
  title,
  subtitle,
  logo,
  decoration,
  phone,
  children,
  classes: receivedClasses,
  labels: receivedLabels,
  ...rest
}: IProps) {
  const classes = {
    ...defaultClasses,
    ...receivedClasses,
  }
  const labels = {
    ...defaultLabels,
    ...receivedLabels,
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
      <Box
        position="fixed"
        background="chrome"
        className={styles.bottomChrome} />

      <SimpleMobileMenu
        phone={phone}
        labels={labels}
        classes={classes}
        {...rest}>
        <Button
          size="large"
          onClick={toggleMenu}
          className={cn(classes.mainButton, {
            [classes.mainButtonActive]: isOpen,
          })}
          startIcon={isOpen
            ? <MdClose className={styles.icon} />
            : <MdMenu className={styles.icon} />}>
          {isOpen ? labels.close : labels.menu}
        </Button>
      </SimpleMobileMenu>

      <animated.nav className={cn(styles.content, classes.content)} style={animation}>
        <Box
          marginBottom="xxlarge">
          <Link href="/" passHref>
            <Box
              component="a"
              title={labels.logoTitle}
              color="white"
              display="block"
              style={{ textDecoration: 'none' }}>
              <Grid>
                <Col mobile="fit">
                  {logo}
                </Col>
                {title ? (
                  <Col mobile="fit">
                    <H2>{title}</H2>
                    <small>{subtitle}</small>
                  </Col>
                ) : <></>}
              </Grid>
            </Box>
          </Link>
        </Box>
        {Children.map(children, (child) => {
          return cloneElement(child, {
            key: child.props.title,
            toggleMenu
          })
        })}
        {decoration && (
          <Box
            position="absolute"
            zIndex={-1}
            className={styles.bgImage}>
            <Image src={decoration} alt="decoration" />
          </Box>
        )}
      </animated.nav>
    </>
  )

  function toggleMenu() {
    setOpen(!isOpen)
  }
}
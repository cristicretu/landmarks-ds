import * as styles from './styles.css'

import cn from 'classnames'
import { Box } from '../Box'
import { Container } from '../Container'
import { IUIComponent } from '../../utils/types'
import React from 'react'
import { Reveal } from '../Reveal'
import { SmartLink } from '../SmartLink'
import { Typography } from '../Typography'
import { Col, Grid } from '../Grid'
import { useTranslation } from 'next-i18next'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

interface ExternalLink {
  href: string
  title: string
}

interface IProps extends IUIComponent {
  logo: any
  description: any
  copyright: string
  address: string
  phone: string
  email: string
  projects: ExternalLink[]
  links: ExternalLink[]
  socialUrls?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export function Footer({
  className,
  logo,
  description,
  copyright,
  address,
  phone,
  email,
  projects,
  links,
  socialUrls,
  ...rest
}: IProps) {
  const { t } = useTranslation()

  return (
    <Box className={cn(styles.wrapper, className)} {...rest}>
      <Container>
        <div>
          {!!logo && <div className={styles.logo}>{logo}</div>}

          <Grid gutter="large">
            <Col laptop="5">
              {description}
              {socialUrls && (
                <Box display="flex" paddingY="medium" className={styles.socialContainer}>
                  {socialUrls.facebook && (
                    <a
                      className={styles.socialLink}
                      href={socialUrls.facebook}
                      rel="noreferrer"
                      target="_blank">
                      <Box component={FaFacebookSquare} fontSize="3x" />
                    </a>
                  )}
                  {socialUrls.instagram && (
                    <a
                      className={styles.socialLink}
                      href={socialUrls.instagram}
                      rel="noreferrer"
                      target="_blank">
                      <Box component={FaInstagramSquare} fontSize="3x" />
                    </a>
                  )}
                  {socialUrls.twitter && (
                    <a
                      className={styles.socialLink}
                      href={socialUrls.twitter}
                      rel="noreferrer"
                      target="_blank">
                      <Box component={FaTwitterSquare} fontSize="3x" />
                    </a>
                  )}
                  {socialUrls.linkedin && (
                    <a
                      className={styles.socialLink}
                      href={socialUrls.linkedin}
                      rel="noreferrer"
                      target="_blank">
                      <Box component={FaLinkedin} fontSize="3x" />
                    </a>
                  )}
                </Box>
              )}
            </Col>
            <Col laptop="2">
              <Typography variant="h5">{t('contact')}</Typography>
              <p>{address}</p>
              <Box component="hr" marginY="small" className={styles.line} />
              <a className={styles.text} href={`mailto:${email}`}>
                {email}
              </a>
              <div>
                <Reveal
                  onReveal={() => console.log('calling')}
                  before={
                    <a href="#" className={styles.text}>
                      {t('callNow')}
                    </a>
                  }
                  after={
                    <a href={`tel:${phone}`} className={styles.text}>
                      {phone}
                    </a>
                  }
                  paddingRight="medium"
                />
              </div>
            </Col>
            <Col laptop="2">
              <Typography variant="h5">{t('projects')}</Typography>
              {projects.map((project, index) => (
                <SmartLink
                  href={project.href}
                  key={index}
                  title={project.title}
                  display="block"
                  className={styles.text}>
                  {project.title}
                </SmartLink>
              ))}
            </Col>
            <Col laptop="2">
              <Typography variant="h5">{t('otherLinks')}</Typography>
              {links.map((link, index) => (
                <SmartLink
                  href={link.href}
                  key={index}
                  title={link.title}
                  display="block"
                  className={styles.text}>
                  {link.title}
                </SmartLink>
              ))}
            </Col>
          </Grid>

          <Typography variant="small">{copyright}</Typography>
        </div>
      </Container>
    </Box>
  )
}

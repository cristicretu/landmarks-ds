import * as styles from './styles.css'

import { Box } from '../Box'
import { Button } from '../Button'
import { Container } from '../Container'
import { IUIComponent } from '../../utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Reveal } from '../Reveal'
import { isInternalLink } from '../../utils/index'

const CustomLink = (props: any) => {
  const href = props.href

  if (isInternalLink(href)) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  )
}

interface ExternalLink {
  href: string
  title: string
}

interface IProps extends IUIComponent {
  logo: string
  description: string
  copyright: string
  address: string
  phone: string
  email: string
  projects: ExternalLink[]
  links: ExternalLink[]
  height: string
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
  height,
  ...rest
}: IProps) {
  return (
    <Box className={styles.wrapper} {...rest}>
      <Container>
        <Box>
          {!!logo && (
            <Box position="relative" style={{ height }}>
              {/* image? */}
              <Image src={logo} layout="fill" objectFit="cover" />
            </Box>
          )}

          <Box className={styles.fluidGrid}>
            <Box>
              <Box>
                {/* fix here this is just a replacement */}.
                <hr className={styles.line}></hr>
              </Box>
              <p>{description}</p>
            </Box>
            <Box>
              <Box as="h1" className={styles.heading}>
                Contact
              </Box>
              <p>{address}</p>
              <hr className={styles.line}></hr>
              <a className={styles.text} href={`mailto:${email}`}>
                {email}
              </a>
              <div>
                <Reveal
                  onReveal={() => console.log('calling')}
                  before={<a className={styles.text}>Call now</a>}
                  after={
                    <a href={`tel:${phone}`} className={styles.text}>
                      {phone}
                    </a>
                  }
                  paddingRight="medium"
                />
              </div>
            </Box>
            <Box>
              <Box as="h1" className={styles.heading}>
                Projects
              </Box>
              <Box className={styles.links}>
                {projects.map((project, index) => (
                  <CustomLink
                    href={project.href}
                    key={index}
                    className={styles.text}
                  >
                    {project.title}
                  </CustomLink>
                ))}
              </Box>
            </Box>
            <Box>
              <Box as="h1" className={styles.heading}>
                Other links
              </Box>
              <Box className={styles.links}>
                {links.map((link, index) => (
                  <CustomLink
                    href={link.href}
                    key={index}
                    className={styles.text}
                  >
                    {link.title}
                  </CustomLink>
                ))}
              </Box>
            </Box>
          </Box>

          <Box as="p">
            {copyright}
            {address}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

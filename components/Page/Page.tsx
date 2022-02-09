import * as styles from './styles.css'

import { Box } from 'landmarks-ds'
import CookieConsent from 'react-cookie-consent'
import Head from 'next/head'
import { IUIComponent } from '../../utils/types'
import Script from 'next/script'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface IProps extends IUIComponent {
  title: string
  description: string
  children: any
  shareImage?: string
  siteTitle?: string
  consentText?: string
  type?: string
  favicon?: string
}

export function Page({
  children,
  title,
  description,
  className,
  type = 'website',
  shareImage = 'share-preview.jpg',
  siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE,
  consentText,
  favicon = '/favicon.ico',
  ...rest
}: IProps) {
  const router = useRouter()
  const { t } = useTranslation()
  const consentMessage = consentText || t('consentMessage')
  // should remove query params and leave a clean canonical url
  const pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
    router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
  ])
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath.substring(
    0,
    pathSliceLength
  )}`

  return (
    <>
      <Head>
        <title>
          {title} | {siteTitle}
        </title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}${shareImage}`} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="shortcut icon" href={favicon} />
      </Head>

      {/* Because we set the body background color for safari, we set it back to white here */}
      <Box {...rest} className={cn(styles.page, className)}>
        {children}
      </Box>

      <CookieConsent
        disableStyles
        enableDeclineButton
        declineButtonText={t('consentDecline')}
        buttonText={t('consentAccept')}>
        <Box fontSize="-1x" marginBottom="large">
          {consentMessage}
        </Box>
      </CookieConsent>

      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_TAG_MANAGER_ID}');`
        }}
      />
    </>
  )
}

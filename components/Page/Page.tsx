import * as styles from './styles.css'

import { Box } from 'landmarks-ds'
import Head from 'next/head'
import { IUIComponent } from '../../utils/types'
import Script from 'next/script'
import cn from 'classnames'
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
  const { t } = useTranslation()
  const consentMessage = consentText || t('consentMessage')

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
        <meta property="og:type" content={type} />
        {/* <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}${shareImage}`} /> */}
        <link rel="shortcut icon" href={favicon} />
      </Head>

      {/* Because we set the body background color for safari, we set it back to white here */}
      <Box {...rest} className={cn(styles.page, className)}>
        {children}
      </Box>

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

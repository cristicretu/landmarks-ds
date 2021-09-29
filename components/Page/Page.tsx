import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'

import { Box } from 'landmarks-ds'
import { Atoms } from 'site/styles/sprinkles.css'

interface IProps extends Atoms {
  title: string
  description: string
  children: any
  shareImage?: string
  siteTitle?: string
  consentText?: string
}

export function Page({
  children,
  title,
  description,
  shareImage = 'share-preview.jpg',
  siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE,
  consentText = `Acest site web folosește cookie-uri care ajută la funcționarea site-ului și urmărește modul în care interacționați cu acesta, astfel încât să vă putem oferi o experiență de utilizare îmbunătățită și personalizată. Vom folosi cookie-urile numai dacă sunteți de acord cu acestea făcând clic pe Accept.`,
  ...rest
}: IProps) {
  const router = useRouter()
  // should remove query params and leave a clean canonical url
  const pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
    router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
  ]);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath.substring(0, pathSliceLength)}`

  return (
    <>
      <Head>
        <title>{title} | {siteTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}${shareImage}`} />
        <meta property="og:site_name" content={siteTitle} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Because we set the body background color for safari, we set it back to white here */}
      <Box background="white" {...rest}>
        {children}
      </Box>

      <CookieConsent
        disableStyles
        enableDeclineButton
        declineButtonText="Refuz"
        buttonText="Accept">
        <Box fontSize="-1x" marginBottom="large">
          {consentText}
        </Box>
      </CookieConsent>

      <Script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_TAG_MANAGER_ID}');`
      }} />
    </>
  )
}
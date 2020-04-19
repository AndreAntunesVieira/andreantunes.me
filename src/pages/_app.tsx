import React, { useEffect } from 'react'
import Head from 'next/head'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
    }
    const loadFonts = async (timeout, ...families) => {
      // @ts-ignore
      if (typeof WebFont === 'undefined') return delay(timeout).then(() => loadFonts(timeout, ...families))
      // @ts-ignore
      return new Promise(active => WebFont.load({ google: { families }, active }))
    }
    loadFonts(100, 'Gotham:300,400,700,900', 'Montserrat:300,400,700,900')
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beleza em casa</title>
        <meta name="author" content="André Antunes Vieira" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async defer />
        <meta property="og:url" content="https://andreantunes.me/" />
        <meta property="og:site_name" content="André Antunes Vieira" />
        <meta property="og:title" content="André Antunes Vieira" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="André Antunes Vieira" />
        <meta name="twitter:description" content="André Antunes Vieira" />
        <meta name="twitter:image:alt" content="André Antunes Vieira" />
        <meta name="theme-color" content="#7E54C6" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

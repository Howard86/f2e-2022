import { Noto_Sans_TC } from 'next/font/google'
import localFont from 'next/font/local'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const noto = Noto_Sans_TC({
  display: 'fallback',
  preload: true,
  subsets: ['latin'],
  variable: '--noto-font',
  weight: ['400', '700'],
})

const local = localFont({
  display: 'fallback',
  src: '../../public/fonts/PPMonumentExtended-Regular.woff2',
  variable: '--monument-font',
  weight: '400 700',
})

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || ''

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>F2E 2022</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="4th the F2E 互動式網頁設計，立即報名！" name="description" />

        <meta content="website" property="og:type" />
        <meta content={BASE_URL} property="og:url" />
        <meta content="F2E 2022" property="og:title" />
        <meta content="4th the F2E 互動式網頁設計，立即報名！" property="og:description" />
        <meta content={`${BASE_URL}/android-chrome-192x192.png`} property="og:image" />
      </Head>
      <div className={`relative ${local.variable} ${noto.variable} ${noto.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

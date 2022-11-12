import localFont from '@next/font/local'
import { Noto_Sans_TC } from '@next/font/google'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const noto = Noto_Sans_TC({
  variable: '--noto-font',
  weight: ['400', '700'],
  subsets: ['chinese-traditional'],
  display: 'fallback',
  preload: true,
})

const local = localFont({
  src: './fonts/PPMonumentExtended-Regular.woff2',
  variable: '--monument-font',
  display: 'fallback',
  weight: '400 700',
})

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || ''

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>F2E 2022</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="4th the F2E 互動式網頁設計，立即報名！" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:title" content="F2E 2022" />
        <meta property="og:description" content="4th the F2E 互動式網頁設計，立即報名！" />
        <meta property="og:image" content={`${BASE_URL}/android-chrome-192x192.png`} />
      </Head>
      <div className={`relative ${local.variable} ${noto.variable} ${noto.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

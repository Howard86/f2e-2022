import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || ''

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>快點簽 Fast-Sign</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="用簡約、不用過多的裝飾設計，目標是讓使用者可以專注在完成簽署的任務。搭配適當的插畫來表達情境，增加「快點簽」這個產品的情緒與情感的傳達，增進使用者與產品的連結。"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:title" content="快點簽 Fast-Sign" />
        <meta
          property="og:description"
          content="用簡約、不用過多的裝飾設計，目標是讓使用者可以專注在完成簽署的任務。搭配適當的插畫來表達情境，增加「快點簽」這個產品的情緒與情感的傳達，增進使用者與產品的連結。"
        />
        <meta property="og:image" content={`${BASE_URL}/android-chrome-192x192.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

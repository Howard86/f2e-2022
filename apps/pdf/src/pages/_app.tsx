import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || ''

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>快點簽 Fast-Sign</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="用簡約、不用過多的裝飾設計，目標是讓使用者可以專注在完成簽署的任務。搭配適當的插畫來表達情境，增加「快點簽」這個產品的情緒與情感的傳達，增進使用者與產品的連結。"
          name="description"
        />

        <meta content="website" property="og:type" />
        <meta content={BASE_URL} property="og:url" />
        <meta content="快點簽 Fast-Sign" property="og:title" />
        <meta
          content="用簡約、不用過多的裝飾設計，目標是讓使用者可以專注在完成簽署的任務。搭配適當的插畫來表達情境，增加「快點簽」這個產品的情緒與情感的傳達，增進使用者與產品的連結。"
          property="og:description"
        />
        <meta content={`${BASE_URL}/android-chrome-192x192.png`} property="og:image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

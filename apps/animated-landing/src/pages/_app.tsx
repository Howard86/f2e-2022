import localFont from '@next/font/local'
import { Noto_Sans_TC } from '@next/font/google'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

const noto = Noto_Sans_TC({
  variable: '--noto-font',
  weight: ['400', '700'],
  subsets: ['chinese-traditional'],
})

const local = localFont({
  src: './fonts/PPMonumentExtended-Regular.woff2',
  variable: '--monument-font',
  weight: '400 700',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${local.variable} ${noto.variable} ${noto.className}`}>
      <Component {...pageProps} />
    </div>
  )
}

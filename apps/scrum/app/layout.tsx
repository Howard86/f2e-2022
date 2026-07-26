import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import type { PropsWithChildren } from 'react'

import '../styles/globals.css'

const local = localFont({
  display: 'fallback',
  preload: true,
  src: [
    {
      path: './GenJyuuGothic-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: './GenJyuuGothic-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
})

export const metadata: Metadata = {
  description: 'Scrum 新手村，立即體驗！',
  icons: {
    apple: [{ sizes: '180x180', url: '/apple-touch-icon.png' }],
    icon: [
      { sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png' },
      { sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png' },
    ],
    other: [{ color: '#70d6df', rel: 'mask-icon', url: '/safari-pinned-tab.svg' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#524d5b',
  },
  title: 'Scrum 新手村',
}

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: '#524d5b',
  width: 'device-width',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={`h-full bg-primary-main text-[12px] lg:text-[14px] 2xl:text-[16px] ${local.className}`}
      lang="zh-Hant-TW"
    >
      <body className="h-full bg-primary-main text-neutral-white-light text-p">{children}</body>
    </html>
  )
}

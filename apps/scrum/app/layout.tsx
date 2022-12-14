import type { ChildrenProps } from 'react'
import localFont from '@next/font/local'

import '../styles/globals.css'

const local = localFont({
  src: [
    {
      path: './GenJyuuGothic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GenJyuuGothic-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'fallback',
  preload: true,
})

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`bg-primary-main h-full text-[12px] lg:text-[14px] 2xl:text-[16px] ${local.className}`}
    >
      <body className="text-p text-neutral-white-light bg-primary-main h-full">{children}</body>
    </html>
  )
}

import type { ChildrenProps } from 'react'

import '../styles/globals.css'

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="zh-Hant-TW" className="h-full">
      <body className="bg-white/90">{children}</body>
    </html>
  )
}

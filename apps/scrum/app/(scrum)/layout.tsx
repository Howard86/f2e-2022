import type { PropsWithChildren } from 'react'

export default function ScrumLayout({ children }: PropsWithChildren) {
  return <div className="flex h-full flex-col bg-primary-main">{children}</div>
}

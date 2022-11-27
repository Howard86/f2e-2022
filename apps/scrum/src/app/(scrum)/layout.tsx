import type { ChildrenProps } from 'react'

export default function ScrumLayout({ children }: ChildrenProps) {
  return <div className="bg-primary-main flex h-full flex-col">{children}</div>
}

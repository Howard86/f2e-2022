import type { ChildrenProps } from 'react'
import ProgressDots from './ProgressDots'
import ProgressStep from './ProgressStep'

export default function ScrumLayout({ children }: ChildrenProps) {
  return (
    <div className="flex h-full flex-col">
      <header className="px-15 flex items-center justify-between">
        <ProgressStep selected />
        <ProgressDots />
        <ProgressStep />
        <ProgressDots />
        <ProgressStep />
        <ProgressDots />
        <ProgressStep />
        <ProgressDots />
        <ProgressStep />
        <ProgressDots />
        <ProgressStep />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

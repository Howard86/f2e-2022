import clsx from 'clsx'
import type { SpanProps } from 'react-html-props'

export default function DotIcon({ className }: SpanProps) {
  return <span className={clsx('rounded-full bg-n1', className || 'h-1.5 w-1.5')} />
}

import clsx from 'clsx'
import { SpanProps } from 'react-html-props'

export default function DotIcon({ className }: SpanProps) {
  return <span className={clsx('bg-n1 rounded-full', className || 'h-1.5 w-1.5')} />
}

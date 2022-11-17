import clsx from 'clsx'
import { SpanProps } from 'react-html-props'

interface StepProps extends SpanProps {
  variant?: 'outlined' | 'filled'
}

export default function Step({ variant = 'filled', className, children, ...props }: StepProps) {
  return (
    <span
      className={clsx('border-primary-light rounded-full p-0.5 aria-selected:border-2')}
      {...props}
    >
      <span
        className={clsx(
          className,
          variant === 'filled'
            ? 'text-greyscale-white bg-primary-main'
            : 'text-greyscale-dark-grey border-greyscale-grey border-2',
          'text-h4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-2 font-bold'
        )}
      >
        {children}
      </span>
    </span>
  )
}

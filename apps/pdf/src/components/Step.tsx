import clsx from 'clsx'
import type { DivProps } from 'react-html-props'

interface StepProps extends DivProps {
  name: string
  variant?: 'outlined' | 'filled'
}

export default function Step({
  variant = 'filled',
  className,
  children,
  name,
  ...props
}: StepProps) {
  return (
    <div
      className="group flex items-center gap-2 aria-selected:flex-1 aria-selected:md:flex-none"
      {...props}
    >
      <span className="block shrink-0 rounded-full border-2 border-transparent p-0.5 group-aria-selected:border-primary-light">
        <span
          aria-hidden="true"
          className={clsx(
            className,
            variant === 'filled'
              ? 'border-transparent bg-primary-main text-greyscale-white'
              : 'border-greyscale-grey text-greyscale-dark-grey',
            'inline-flex h-8 w-8 items-center justify-center rounded-full border-2 p-2 font-bold text-h4'
          )}
        >
          {children}
        </span>
      </span>
      <span className="hidden group-aria-selected:block md:block">{name}</span>
    </div>
  )
}

import clsx from 'clsx'
import { DivProps } from 'react-html-props'

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
      <span className="group-aria-selected:border-primary-light block shrink-0 rounded-full border-2 border-transparent p-0.5">
        <span
          aria-hidden="true"
          className={clsx(
            className,
            variant === 'filled'
              ? 'text-greyscale-white bg-primary-main border-transparent'
              : 'text-greyscale-dark-grey border-greyscale-grey',
            'text-h4 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 p-2 font-bold'
          )}
        >
          {children}
        </span>
      </span>
      <span className="hidden group-aria-selected:block md:block">{name}</span>
    </div>
  )
}

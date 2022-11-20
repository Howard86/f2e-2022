import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef, ReactNode } from 'react'
import { ButtonPropsWithoutRef } from 'react-html-props'

interface ButtonProps<T extends ElementType> {
  as?: T
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
  type?: ButtonPropsWithoutRef['type']
}

function Button<T extends ElementType = 'button'>(
  {
    as,
    variant = 'filled',
    size = 'lg',
    type = 'button',
    className,
    ...props
  }: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ForwardedRef<T>
) {
  // TODO: fix typescript definition when as !== 'button'
  const Component = (as || 'button') as any

  return (
    <Component
      ref={ref}
      type={Component === 'button' ? type : undefined}
      className={clsx(
        className,
        // TODO: find other easier ways to read but not hurting performance
        variant === 'filled' &&
          'bg-primary-main hover:bg-primary-dark text-greyscale-white border-primary-main focus:ring-primary-main/80 disabled:border-greyscale-ui-grey',
        variant === 'outlined' &&
          'bg-greyscale-white hover:bg-greyscale-light-grey text-greyscale-dark border-greyscale-grey disabled:border-greyscale-grey focus:ring-greyscale-grey/80',
        variant === 'text' &&
          'hover:bg-greyscale-light-grey text-primary-main focus:ring-primary-main/80 border-transparent bg-transparent',
        size === 'lg' && 'text-h4 py-3 px-6 font-bold',
        size === 'md' && 'text-p md:text-h4 py-2 px-4 md:py-3 md:px-6 md:font-bold',
        size === 'sm' && 'text-p py-1.5 px-2 md:py-2 md:px-4',
        'disabled:text-greyscale-dark-grey/40 disabled:bg-greyscale-ui-grey inline-flex items-center justify-center rounded-sm border -tracking-tighter transition-colors focus:ring-2 focus:ring-offset-2 disabled:focus:outline-none'
      )}
      {...props}
    />
  )
}

export default forwardRef(Button)

import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import type { ButtonPropsWithoutRef } from 'react-html-props'

interface ButtonProps<T extends ElementType> {
  as?: T
  children?: ReactNode
  className?: string
  ref?: ComponentPropsWithRef<T>['ref']
  size?: 'sm' | 'md' | 'lg'
  type?: ButtonPropsWithoutRef['type']
  variant?: 'filled' | 'outlined' | 'text'
}

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'filled',
  size = 'lg',
  type = 'button',
  className,
  ref,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component: ElementType = as ?? 'button'

  return (
    <Component
      className={clsx(
        className,
        // TODO: find other easier ways to read but not hurting performance
        variant === 'filled' &&
          'border-primary-main bg-primary-main text-greyscale-white hover:bg-primary-dark focus:ring-primary-main/80 disabled:border-greyscale-ui-grey',
        variant === 'outlined' &&
          'border-greyscale-grey bg-greyscale-white text-greyscale-dark hover:bg-greyscale-light-grey focus:ring-greyscale-grey/80 disabled:border-greyscale-grey',
        variant === 'text' &&
          'border-transparent bg-transparent text-primary-main hover:bg-greyscale-light-grey focus:ring-primary-main/80',
        size === 'lg' && 'px-6 py-3 font-bold text-h4',
        size === 'md' && 'px-4 py-2 text-p md:px-6 md:py-3 md:font-bold md:text-h4',
        size === 'sm' && 'px-2 py-1.5 text-p md:px-4 md:py-2',
        'inline-flex items-center justify-center rounded-sm border -tracking-tighter transition-colors focus:ring-2 focus:ring-offset-2 disabled:bg-greyscale-ui-grey disabled:text-greyscale-dark-grey/40 disabled:focus:outline-none'
      )}
      ref={ref}
      type={Component === 'button' ? type : undefined}
      {...props}
    />
  )
}

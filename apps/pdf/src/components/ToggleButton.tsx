import clsx from 'clsx'
import type { ButtonProps } from 'react-html-props'

export default function ToggleButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'inline-flex items-center justify-center rounded-sm border border-greyscale-grey bg-greyscale-white p-1 text-greyscale-dark-grey shadow-sm transition-all hover:bg-greyscale-ui-grey aria-pressed:border-primary-main aria-pressed:text-primary-main'
      )}
      type="button"
      {...props}
    />
  )
}

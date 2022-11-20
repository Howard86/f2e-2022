import clsx from 'clsx'
import { ButtonProps } from 'react-html-props'

export default function ToggleButton({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        className,
        'bg-greyscale-white hover:bg-greyscale-ui-grey border-greyscale-grey aria-pressed:border-primary-main text-greyscale-dark-grey aria-pressed:text-primary-main inline-flex items-center justify-center rounded-sm border p-1 shadow-sm transition-all'
      )}
      {...props}
    />
  )
}

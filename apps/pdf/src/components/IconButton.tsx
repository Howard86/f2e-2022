import clsx from 'clsx'
import type { ButtonProps } from 'react-html-props'

export default function IconButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(className, 'inline-flex items-center justify-center p-1')}
      type="button"
      {...props}
    />
  )
}

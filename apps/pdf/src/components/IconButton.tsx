import clsx from 'clsx'
import { ButtonProps } from 'react-html-props'

export default function IconButton({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(className, 'inline-flex items-center justify-center p-1')}
      {...props}
    />
  )
}

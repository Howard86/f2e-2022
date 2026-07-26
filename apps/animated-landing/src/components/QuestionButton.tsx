import clsx from 'clsx'
import type { ButtonProps } from 'react-html-props'
import CaretRightIcon from './icons/CaretRightIcon'

interface QuestionButtonProps extends ButtonProps {
  endIcon?: boolean
  startIcon?: boolean
}

export default function QuestionButton({
  children,
  startIcon,
  endIcon,
  ...props
}: QuestionButtonProps) {
  return (
    <button
      className={clsx(
        startIcon && 'transition-all hover:-translate-x-0.5',
        endIcon && 'justify-end transition-all hover:translate-x-0.5',
        'inline-flex w-32 shrink-0 grow-0 items-center py-2 font-bold text-ch-h5 text-p3 md:w-60'
      )}
      type="button"
      {...props}
    >
      {startIcon ? <CaretRightIcon className="h-auto w-6 flex-none rotate-180" /> : null}
      {children}
      {endIcon ? <CaretRightIcon className="h-auto w-6 flex-none" /> : null}
    </button>
  )
}

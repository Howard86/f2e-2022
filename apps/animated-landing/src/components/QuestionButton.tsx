import clsx from 'clsx'
import { ButtonProps } from 'react-html-props'
import CaretRightIcon from './icons/CaretRightIcon'

interface QuestionButtonProps extends ButtonProps {
  startIcon?: boolean
  endIcon?: boolean
}

export default function QuestionButton({
  children,
  startIcon,
  endIcon,
  ...props
}: QuestionButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        startIcon && 'transition-all hover:-translate-x-0.5',
        endIcon && 'justify-end transition-all hover:translate-x-0.5',
        'text-p3 text-ch-h5 inline-flex w-32 shrink-0 grow-0 items-center py-2 font-bold md:w-60'
      )}
      {...props}
    >
      {startIcon && <CaretRightIcon className="h-auto w-6 flex-none rotate-180" />}
      {children}
      {endIcon && <CaretRightIcon className="h-auto w-6 flex-none" />}
    </button>
  )
}

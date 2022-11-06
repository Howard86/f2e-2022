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
      className="text-p3 text-ch-h5 inline-flex w-32 items-center justify-center py-2 font-bold"
      {...props}
    >
      {startIcon && <CaretRightIcon className="h-auto w-6 shrink-0 rotate-180" />}
      {children}
      {endIcon && <CaretRightIcon className="h-auto w-6 shrink-0" />}
    </button>
  )
}

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
      className="text-p3 inline-flex w-[100px] items-center justify-center py-2 font-bold [line-clamp:2]"
      {...props}
    >
      {startIcon && <CaretRightIcon className="rotate-180" />}
      {children}
      {endIcon && <CaretRightIcon />}
    </button>
  )
}

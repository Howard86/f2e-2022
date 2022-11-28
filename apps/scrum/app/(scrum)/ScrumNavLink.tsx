import Link, { LinkProps } from 'next/link'
import ArrowForwardIcon from './ArrowForwardIcon'

interface ScrumNavLinkProps extends LinkProps {
  text: string
  startIcon?: boolean
  endIcon?: boolean
}

export default function ScrumNavLink({ text, startIcon, endIcon, ...props }: ScrumNavLinkProps) {
  return (
    <Link
      className="text-h4 inline-flex items-center px-9 py-7 transition-transform hover:scale-110"
      {...props}
    >
      {startIcon && <ArrowForwardIcon className="mr-5" />}
      {text}
      {endIcon && <ArrowForwardIcon className="ml-5 rotate-180" />}
    </Link>
  )
}

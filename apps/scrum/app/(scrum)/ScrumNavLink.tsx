import Link, { type LinkProps } from 'next/link'
import ArrowForwardIcon from './ArrowForwardIcon'

interface ScrumNavLinkProps extends LinkProps {
  endIcon?: boolean
  startIcon?: boolean
  text: string
}

export default function ScrumNavLink({ text, startIcon, endIcon, ...props }: ScrumNavLinkProps) {
  return (
    <Link
      className="inline-flex items-center px-9 py-7 text-h4 transition-transform hover:scale-110"
      {...props}
    >
      {startIcon ? <ArrowForwardIcon className="mr-5" /> : null}
      {text}
      {endIcon ? <ArrowForwardIcon className="ml-5 rotate-180" /> : null}
    </Link>
  )
}

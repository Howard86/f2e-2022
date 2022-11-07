import { APropsWithoutRef } from 'react-html-props'
import ExternalLink from './ExternalLink'

const HTTPS_PROTOCOL = 'https://'

interface UnifiedLinkProps extends APropsWithoutRef {
  href: string
}

export default function UnifiedLink({ href, children, ...props }: UnifiedLinkProps) {
  if (href.startsWith(HTTPS_PROTOCOL))
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    )

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

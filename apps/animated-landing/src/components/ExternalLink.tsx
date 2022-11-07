import { forwardRef } from 'react'
import { AProps } from 'react-html-props'

const ExternalLink = forwardRef<HTMLAnchorElement, AProps>(({ children, ...props }, ref) => {
  return (
    <a ref={ref} target="_blank" rel="noopener" tabIndex={0} role="link" {...props}>
      {children}
    </a>
  )
})

export default ExternalLink

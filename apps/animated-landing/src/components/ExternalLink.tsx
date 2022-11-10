import { AProps } from 'react-html-props'

export default function ExternalLink({ children, ...props }: AProps) {
  return (
    <a target="_blank" rel="noopener" tabIndex={0} role="link" {...props}>
      {children}
    </a>
  )
}

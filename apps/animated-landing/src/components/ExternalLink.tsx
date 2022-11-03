import { AProps } from 'react-html-props'

export default function ExternalLink({ children, ...props }: AProps) {
  return (
    <a target="_blank" rel="noopener" {...props}>
      {children}
    </a>
  )
}

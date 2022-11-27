import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { AProps } from 'react-html-props'

const ExternalLink = forwardRef<HTMLAnchorElement, AProps>(({ children, ...props }, ref) => (
  <a ref={ref} target="_blank" rel="noopener" tabIndex={0} role="link" {...props}>
    {children}
  </a>
))

export const MotionExternalLink = motion(ExternalLink)

export default ExternalLink

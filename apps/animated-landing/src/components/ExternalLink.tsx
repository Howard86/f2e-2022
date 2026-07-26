import { motion } from 'framer-motion'
import type { AProps } from 'react-html-props'

const ExternalLink = ({ children, ref, ...props }: AProps) => (
  <a ref={ref} rel="noopener" role="link" tabIndex={0} target="_blank" {...props}>
    {children}
  </a>
)

export const MotionExternalLink = motion.create(ExternalLink)

export default ExternalLink

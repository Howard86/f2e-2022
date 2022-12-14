import { motion, SVGMotionProps } from 'framer-motion'
import { AnimationVariant, SHINE_VARIANTS } from '@/constants/animations'

export default function ThunderIcon({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="48"
      height="62"
      viewBox="0 0 48 62"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-y2 drop-shadow-yellow stroke-y2`}
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Activate}
      variants={SHINE_VARIANTS}
      {...props}
    >
      <g>
        <path d="M11.2163 30.7239L33.5506 8.1213L23.6526 26.9946L40.0486 29.4483L8.19136 53.7779L26.0341 31.8641L11.2163 30.7239Z" />
        <path
          d="M11.2163 30.7239L33.5506 8.1213L23.6526 26.9946L40.0486 29.4483L8.19136 53.7779L26.0341 31.8641L11.2163 30.7239Z"
          strokeWidth="1.36714"
          strokeLinejoin="round"
        />
      </g>
    </motion.svg>
  )
}

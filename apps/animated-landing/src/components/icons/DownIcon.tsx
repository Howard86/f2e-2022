import { motion, SVGMotionProps } from 'framer-motion'
import { FADE_VARIANTS } from '@/constants/animations'

export default function DownIcon({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      variants={FADE_VARIANTS}
      width="61"
      height="61"
      viewBox="0 0 61 61"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-p1 drop-shadow-purple stroke-p1`}
      {...props}
    >
      <g>
        <path d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z" />
        <path
          d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </motion.svg>
  )
}

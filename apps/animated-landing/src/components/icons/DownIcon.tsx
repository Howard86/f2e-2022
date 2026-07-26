import { motion, type SVGMotionProps } from 'framer-motion'
import { FADE_VARIANTS } from '@/constants/animations'

export default function DownIcon({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      className={`${className} fill-p1 stroke-p1 drop-shadow-purple`}
      height="61"
      variants={FADE_VARIANTS}
      viewBox="0 0 61 61"
      width="61"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z" />
        <path
          d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
    </motion.svg>
  )
}

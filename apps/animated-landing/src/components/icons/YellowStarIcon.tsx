import { motion, SVGMotionProps } from 'framer-motion'

export default function YellowStarIcon({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="49"
      height="50"
      viewBox="0 0 49 50"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-y2 drop-shadow-yellow`}
      {...props}
    >
      <g>
        <path d="M24.5 10.5225L28.4163 21.1061L39 25.0225L28.4163 28.9388L24.5 39.5225L20.5837 28.9388L10 25.0225L20.5837 21.1061L24.5 10.5225Z" />
      </g>
    </motion.svg>
  )
}

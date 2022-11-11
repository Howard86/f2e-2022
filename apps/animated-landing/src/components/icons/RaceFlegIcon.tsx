import { motion, SVGMotionProps } from 'framer-motion'
import { RACE_CAR_FLAG_VARIANTS } from '@/constants/animations'

export default function RaceFlagIcon(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="38"
      height="41"
      viewBox="0 0 38 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      variants={RACE_CAR_FLAG_VARIANTS}
      {...props}
    >
      <path
        d="M1.39961 0.522461C0.91836 0.522461 0.599609 0.841211 0.599609 1.32246V39.7225C0.599609 40.2037 0.91836 40.5225 1.39961 40.5225H4.59961C5.08086 40.5225 5.39961 40.2037 5.39961 39.7225V26.1225H36.5996C37.0402 26.1225 37.3996 25.7631 37.3996 25.3225V1.32246C37.3996 0.881836 37.0402 0.522461 36.5996 0.522461H1.39961ZM5.39961 2.12246H12.5996V9.32246H20.5996V2.12246H28.5996V9.32246H35.7996V17.3225H28.5996V24.5225H20.5996V17.3225H12.5996V24.5225H5.39961V17.3225H12.5996V9.32246H5.39961V2.12246ZM20.5996 17.3225H28.5996V9.32246H20.5996V17.3225Z"
        fill="white"
      />
    </motion.svg>
  )
}

import { motion, SVGMotionProps } from 'framer-motion'

export default function RectangleIcon(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="105"
      height="44"
      viewBox="0 0 105 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.474806 30.9339C-0.0235497 24.3578 4.41477 18.4254 10.8641 17.0472L82.4889 1.74117C93.1099 -0.528505 103.303 7.06487 104.168 17.8911C104.959 27.789 97.5758 36.4539 87.6779 37.2446L14.6686 43.0777C7.3907 43.6591 1.02652 38.2142 0.474806 30.9339Z"
        fill="#151F3F"
        stroke="url(#paint)"
        strokeWidth="0.752193"
        preserveAspectRatio="none"
      />
      <defs>
        <linearGradient
          id="paint"
          x1="1.85122"
          y1="7.63272"
          x2="101.691"
          y2="47.0762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#313A65" />
          <stop offset="1" stopColor="#313A65" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

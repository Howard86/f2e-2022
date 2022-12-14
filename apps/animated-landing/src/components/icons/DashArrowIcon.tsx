import { motion, SVGMotionProps } from 'framer-motion'
import { DOT_VARIANTS } from '@/constants/animations'

export default function DashArrowIcon({ className, ...props }: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="131"
      height="107"
      viewBox="0 0 131 107"
      variants={DOT_VARIANTS}
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-n1 ${className}`}
      {...props}
    >
      <motion.circle variants={DOT_VARIANTS} cx="2.27953" cy="2.05907" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="11.5559" cy="2.05907" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="20.8332" cy="2.05907" r="1.54613" />

      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="2.05907" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="11.3359" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="20.6128" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="29.8894" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="39.1662" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="48.4429" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="57.7197" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="66.9966" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="76.2732" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="85.55" r="1.54613" />

      <motion.circle variants={DOT_VARIANTS} cx="30.1086" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="39.386" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="48.6614" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="57.9387" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="67.216" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="76.4934" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="85.7688" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="95.0461" cy="94.8269" r="1.54613" />
      <motion.circle variants={DOT_VARIANTS} cx="104.323" cy="94.8269" r="1.54613" />

      <g className="fill-n1" filter="url(#filter0_d_185_13288)">
        <motion.path
          variants={DOT_VARIANTS}
          d="M114.223 87.3855C112.996 86.7583 111.702 88.1067 112.379 89.3072L114.041 92.2537C114.735 93.4841 114.751 94.9841 114.083 96.2288L112.425 99.3195C111.762 100.554 113.135 101.883 114.347 101.181L124.734 95.1654C125.687 94.6133 125.651 93.2247 124.67 92.7235L114.223 87.3855Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_185_13288"
          x="107.04"
          y="82.0726"
          width="23.5419"
          height="24.4567"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.57688" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_185_13288" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_185_13288"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  )
}

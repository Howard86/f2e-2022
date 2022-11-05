import { SVGProps } from 'react-html-props'

export default function YellowStarIcon(props: SVGProps) {
  return (
    <svg
      width="49"
      height="50"
      viewBox="0 0 49 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_191_17216)">
        <path
          d="M24.5 10.5225L28.4163 21.1061L39 25.0225L28.4163 28.9388L24.5 39.5225L20.5837 28.9388L10 25.0225L20.5837 21.1061L24.5 10.5225Z"
          fill="#FFF385"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_191_17216"
          x="0"
          y="0.522461"
          width="49"
          height="49"
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
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.952941 0 0 0 0 0.521569 0 0 0 0.6 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_17216" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_17216"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

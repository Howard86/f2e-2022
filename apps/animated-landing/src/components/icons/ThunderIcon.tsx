import { SVGProps } from 'react-html-props'

export default function ThunderIcon(props: SVGProps) {
  return (
    <svg
      width="48"
      height="62"
      viewBox="0 0 48 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_191_17144)">
        <path
          d="M11.2163 30.7239L33.5506 8.1213L23.6526 26.9946L40.0486 29.4483L8.19136 53.7779L26.0341 31.8641L11.2163 30.7239Z"
          fill="#FFF385"
        />
        <path
          d="M11.2163 30.7239L33.5506 8.1213L23.6526 26.9946L40.0486 29.4483L8.19136 53.7779L26.0341 31.8641L11.2163 30.7239Z"
          stroke="#FFF385"
          strokeWidth="1.36714"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_191_17144"
          x="0.674072"
          y="0.60083"
          width="46.8921"
          height="60.6975"
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
          <feGaussianBlur stdDeviation="3.41785" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.952941 0 0 0 0 0.521569 0 0 0 0.6 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_17144" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_17144"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

import { SVGProps } from 'react-html-props'

export default function DownIcon(props: SVGProps) {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_191_17170)">
        <g filter="url(#filter0_d_191_17170)">
          <path d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z" fill="#9DA4FF" />
          <path
            d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z"
            stroke="#9DA4FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_191_17170"
          x="3.5"
          y="11.0227"
          width="54"
          height="39"
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
            values="0 0 0 0 0.615686 0 0 0 0 0.643137 0 0 0 0 1 0 0 0 0.6 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_17170" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_17170"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_191_17170">
          <rect width="60" height="60" fill="white" transform="translate(0.5 0.522705)" />
        </clipPath>
      </defs>
    </svg>
  )
}

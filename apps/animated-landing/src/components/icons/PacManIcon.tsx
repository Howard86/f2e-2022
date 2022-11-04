import { SVGProps } from 'react-html-props'

export default function PacManIcon(props: SVGProps) {
  return (
    <svg
      width="41"
      height="45"
      viewBox="0 0 41 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_191_17154)">
        <path
          d="M28.8825 30.221C29.5874 31.0714 29.4758 32.3492 28.5202 32.9033C27.0597 33.7503 25.4301 34.2835 23.7358 34.4589C21.3751 34.7033 18.9948 34.2422 16.8962 33.1339C14.7975 32.0255 13.0746 30.3198 11.9453 28.2322C10.8161 26.1447 10.3312 23.7692 10.5521 21.4061C10.7729 19.0431 11.6895 16.7985 13.186 14.9564C14.6825 13.1143 16.6916 11.7572 18.9593 11.057C21.227 10.3567 23.6514 10.3446 25.926 11.0222C27.5585 11.5085 29.0611 12.3344 30.3394 13.4373C31.1757 14.1589 31.0487 15.4353 30.1983 16.1403L24.0397 21.2462C23.1893 21.9512 23.0715 23.212 23.7765 24.0624L28.8825 30.221Z"
          fill="#9DA4FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_191_17154"
          x="0.5"
          y="0.522705"
          width="40.4062"
          height="44"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_17154" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_17154"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

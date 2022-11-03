import { SVGProps } from 'react-html-props'

export default function StarIcon(props: SVGProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.2504 1.10917C12.5247 0.367887 13.5731 0.367887 13.8474 1.10917L16.7075 8.83842C16.7938 9.07148 16.9775 9.25523 17.2106 9.34147L24.9398 12.2016C25.6811 12.4759 25.6811 13.5243 24.9398 13.7986L17.2106 16.6587C16.9775 16.7449 16.7938 16.9287 16.7075 17.1617L13.8474 24.891C13.5731 25.6323 12.5247 25.6323 12.2504 24.891L9.3903 17.1617C9.30406 16.9287 9.12031 16.7449 8.88725 16.6587L1.158 13.7986C0.416715 13.5243 0.416715 12.4759 1.158 12.2016L8.88725 9.34147C9.12031 9.25523 9.30406 9.07148 9.3903 8.83842L12.2504 1.10917Z"
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="13.0489"
          y1="-1.04883"
          x2="13.0489"
          y2="27.049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9FA6FF" />
          <stop offset="1" stopColor="#55FFAD" />
        </linearGradient>
      </defs>
    </svg>
  )
}

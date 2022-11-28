import { SVGProps } from 'react-html-props'

export default function ProgressDots(props: SVGProps) {
  return (
    <svg
      width="177"
      height="8"
      viewBox="0 0 177 8"
      fill="#2C8492"
      fillOpacity="0.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4.3999" cy="4" r="4" />
      <circle cx="32.3999" cy="4" r="4" />
      <circle cx="60.3999" cy="4" r="4" />
      <circle cx="88.3999" cy="4" r="4" />
      <circle cx="116.4" cy="4" r="4" />
      <circle cx="144.4" cy="4" r="4" />
      <circle cx="172.4" cy="4" r="4" />
    </svg>
  )
}

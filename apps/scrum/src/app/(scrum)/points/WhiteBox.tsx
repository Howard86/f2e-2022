import { SVGProps } from 'react-html-props'

export default function WhiteBox(props: SVGProps) {
  return (
    <svg
      width="33"
      height="36"
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32.0617 9.09889V27.0331L16.6331 36V18.0659L32.0617 9.09889Z" fill="#DCE9EA" />
      <path
        d="M16.6314 18.0659V36L0.938965 27.0331L1.0708 9.09889L16.6314 18.0659Z"
        fill="#A0A9AA"
      />
      <path
        d="M32.0601 9.09888L16.6314 18.0659L1.0708 9.09889L16.4997 0L32.0601 9.09888Z"
        fill="white"
      />
    </svg>
  )
}

import { SVGProps } from 'react-html-props'

export default function DownIcon({ className, ...props }: SVGProps) {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-p1 drop-shadow-purple stroke-p1`}
      {...props}
    >
      <g>
        <path d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z" />
        <path
          d="M15.5 23.0227L30.5 38.0227L45.5 23.0227L15.5 23.0227Z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

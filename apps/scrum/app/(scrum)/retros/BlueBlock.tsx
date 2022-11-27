import { SVGProps } from 'react-html-props'

export default function BlueBlock(props: SVGProps) {
  return (
    <svg
      width="36"
      height="42"
      viewBox="0 0 36 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M36 10.6154V31.5386L18.1535 42V21.0769L36 10.6154Z" />
      <path d="M18.1517 21.0767V41.9998L0 31.5384L0.152497 10.6152L18.1517 21.0767Z" />
      <path d="M35.9978 10.6153L18.1517 21.0767L0.152497 10.6152L17.9988 0L35.9978 10.6153Z" />
    </svg>
  )
}

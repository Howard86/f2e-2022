import { SVGProps } from 'react-html-props'

interface WhiteBoxProps extends SVGProps {
  red?: boolean
}

export default function WhiteBox({ red, ...props }: WhiteBoxProps) {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24.0001 7.01664V20.8466L12.1024 27.7614V13.9316L24.0001 7.01664Z" fill="#DCE9EA" />
      <path
        d="M12.1012 13.9314V27.7613L0 20.8464L0.101665 7.01652L12.1012 13.9314Z"
        fill="#A0A9AA"
      />
      <path
        d="M23.9986 7.01659L12.1012 13.9314L0.101665 7.01652L11.9993 0L23.9986 7.01659Z"
        fill="white"
      />
      {red && (
        <>
          <path
            d="M24.0001 7.01664V20.8466L12.1024 27.7614V13.9316L24.0001 7.01664Z"
            fill="#E8433F"
            fillOpacity="0.5"
          />
          <path
            d="M12.1012 13.9314V27.7613L0 20.8464L0.101665 7.01652L12.1012 13.9314Z"
            fill="#E8433F"
            fillOpacity="0.5"
          />
          <path
            d="M23.9986 7.01659L12.1012 13.9314L0.101665 7.01652L11.9993 0L23.9986 7.01659Z"
            fill="#E8433F"
            fillOpacity="0.5"
          />
        </>
      )}
    </svg>
  )
}

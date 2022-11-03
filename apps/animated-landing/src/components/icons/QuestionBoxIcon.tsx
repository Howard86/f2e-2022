import { SVGProps } from 'react-html-props'

interface QuestionBoxIconProps extends SVGProps {
  reversed?: boolean
}

export default function QuestionBoxIcon({ children, reversed, ...props }: QuestionBoxIconProps) {
  return (
    <svg
      width="279"
      height="112"
      viewBox="0 0 279 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={
            reversed
              ? 'M190.616 5.18918C210.145 2.40169 227.948 16.746 229.378 36.4218C230.617 53.4732 219.073 68.5023 202.87 72.1118C204.184 76.0094 206.341 80.5132 208.202 84.3969C209.321 86.7318 210.332 88.8426 210.988 90.4628C212.294 93.69 206.815 90.2001 199.077 85.2715C193.37 81.6363 186.433 77.2184 180.085 74.1358L35.4077 84.6504C19.5884 85.8001 5.89328 73.7701 4.99407 57.9345C4.15784 43.2082 14.734 30.2928 29.3361 28.2087L190.616 5.18918Z'
              : 'M43.2575 7.65511C21.3565 7.85615 4.18163 26.5201 5.79805 48.3622C7.19828 67.283 22.2571 81.929 40.6073 83.3617C39.8015 87.8648 38.1636 93.1777 36.7516 97.7578C35.9045 100.505 35.1388 102.989 34.6828 104.876C33.7745 108.635 39.2089 103.912 46.8836 97.2429C52.5441 92.324 59.4232 86.3461 65.8751 81.9307L244.446 68.7156C261.995 67.4168 275.074 51.986 273.478 34.461C271.991 18.1352 258.226 5.68184 241.833 5.83231L43.2575 7.65511Z'
          }
          // className={reversed ? '-scale-100' : ''}
          // className="[trans"
          // transform="scale(-1,1)"
        />
        {children}
      </g>
    </svg>
  )
}

// ;<svg width="234" height="97" viewBox="0 0 234 97" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <g filter="url(#filter0_d_191_16942)">
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M190.616 5.18918C210.145 2.40169 227.948 16.746 229.378 36.4218C230.617 53.4732 219.073 68.5023 202.87 72.1118C204.184 76.0094 206.341 80.5132 208.202 84.3969C209.321 86.7318 210.332 88.8426 210.988 90.4628C212.294 93.69 206.815 90.2001 199.077 85.2715C193.37 81.6363 186.433 77.2184 180.085 74.1358L35.4077 84.6504C19.5884 85.8001 5.89328 73.7701 4.99407 57.9345C4.15784 43.2082 14.734 30.2928 29.3361 28.2087L190.616 5.18918Z"
//       fill="#55FFAD"
//     />
//   </g>
//   <defs>
//     <filter
//       id="filter0_d_191_16942"
//       x="0.463181"
//       y="0.3582"
//       width="233.49"
//       height="95.8376"
//       filterUnits="userSpaceOnUse"
//       color-interpolation-filters="sRGB"
//     >
//       <feFlood flood-opacity="0" result="BackgroundImageFix" />
//       <feColorMatrix
//         in="SourceAlpha"
//         type="matrix"
//         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//         result="hardAlpha"
//       />
//       <feOffset />
//       <feGaussianBlur stdDeviation="2.24204" />
//       <feComposite in2="hardAlpha" operator="out" />
//       <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 1 0 0 0 0 0.68 0 0 0 0.6 0" />
//       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_191_16942" />
//       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_191_16942" result="shape" />
//     </filter>
//   </defs>
// </svg>

import clsx from 'clsx'
import Link from 'next/link'
import { DivProps } from 'react-html-props'
import ArrowForwardIcon from './ArrowForwardIcon'
import { ScrumRoute, SCRUM_ROUTES } from './constants'

interface ScrumNavProps extends DivProps {
  route: ScrumRoute
}

export default function ScrumNav({ route, className, ...props }: ScrumNavProps) {
  return (
    <nav className={clsx('z-10 w-full pt-px pb-2', className)} {...props}>
      <ul className="flex items-center">
        {route >= 1 && (
          <li>
            <Link
              href={ScrumRoute[route - 1]}
              className="text-h4 inline-flex items-center px-9 py-7"
            >
              <ArrowForwardIcon className="mr-5" />
              回上一座島
            </Link>
          </li>
        )}
        <div className="flex-1" />
        {route + 1 < SCRUM_ROUTES.length && (
          <li>
            <Link
              href={ScrumRoute[route + 1]}
              className="text-h4 inline-flex items-center px-9 py-7"
            >
              前往下一座島
              <ArrowForwardIcon className="ml-5 rotate-180" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

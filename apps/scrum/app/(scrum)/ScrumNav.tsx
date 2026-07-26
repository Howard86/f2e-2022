import clsx from 'clsx'
import type { DivProps } from 'react-html-props'
import { SCRUM_ROUTES, ScrumRoute } from './constants'
import ScrumNavLink from './ScrumNavLink'

interface ScrumNavProps extends DivProps {
  route: ScrumRoute
}

export default function ScrumNav({ route, className, ...props }: ScrumNavProps) {
  return (
    <nav className={clsx('z-10 w-full pt-px pb-2', className)} {...props}>
      <ul className="flex items-center overflow-hidden">
        {route >= 1 && (
          <li>
            <ScrumNavLink href={ScrumRoute[route - 1]} startIcon text="回上一座島" />
          </li>
        )}
        <span className="flex-1" />
        {route + 1 < SCRUM_ROUTES.length && (
          <li>
            <ScrumNavLink endIcon href={ScrumRoute[route + 1]} text="前往下一座島" />
          </li>
        )}
      </ul>
    </nav>
  )
}

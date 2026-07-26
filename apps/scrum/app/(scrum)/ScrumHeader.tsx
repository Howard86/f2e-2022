import clsx from 'clsx'
import Link from 'next/link'
import { Fragment } from 'react'
import type { DivProps } from 'react-html-props'
import { SCRUM_ROUTES, ScrumRoute } from './constants'
import ProgressDots from './ProgressDots'
import ProgressStep from './ProgressStep'

interface ScrumHeaderProps extends DivProps {
  route: ScrumRoute
}

export default function ScrumHeader({ route, className, ...props }: ScrumHeaderProps) {
  return (
    <header className={clsx('flex items-center justify-between px-15', className)} {...props}>
      {SCRUM_ROUTES.map(
        (href, index) =>
          ScrumRoute[href] !== ScrumRoute['/complete'] && (
            <Fragment key={href}>
              <Link href={href}>
                <ProgressStep
                  completed={route > ScrumRoute[href]}
                  selected={route === ScrumRoute[href]}
                />
              </Link>
              {SCRUM_ROUTES.length - 2 !== index && <ProgressDots />}
            </Fragment>
          )
      )}
    </header>
  )
}

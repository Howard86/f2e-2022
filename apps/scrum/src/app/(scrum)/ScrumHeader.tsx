import clsx from 'clsx'
import Link from 'next/link'
import { Fragment } from 'react'
import { DivProps } from 'react-html-props'
import ProgressDots from './ProgressDots'
import ProgressStep from './ProgressStep'
import { ScrumRoute, SCRUM_ROUTES } from './constants'

interface ScrumHeaderProps extends DivProps {
  route: ScrumRoute
}

export default function ScrumHeader({ route, className, ...props }: ScrumHeaderProps) {
  return (
    <header className={clsx('px-15 flex items-center justify-between', className)} {...props}>
      {SCRUM_ROUTES.map((href) => (
        <Fragment key={href}>
          <Link href={href}>
            <ProgressStep
              selected={route === ScrumRoute[href]}
              completed={route > ScrumRoute[href]}
            />
          </Link>
          <ProgressDots />
        </Fragment>
      ))}
      <ProgressStep />
    </header>
  )
}
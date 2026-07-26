import clsx from 'clsx'
import type { FC } from 'react'
import type { DivProps, SVGProps } from 'react-html-props'

export interface CardProps extends DivProps {
  description: string
  href: string
  Icon: FC<SVGProps>
  name: string
}

export function Card({ Icon, name, description, href, className }: CardProps) {
  return (
    <div
      className={clsx(
        'group flex justify-center gap-4 rounded-lg bg-gray-50 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:flex-col md:justify-start',
        className
      )}
    >
      <div className="flex items-center justify-center md:-translate-y-6">
        <span className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-600 p-3 shadow-lg">
          <Icon aria-hidden="true" className="h-6 w-6 text-white" />
        </span>
      </div>
      <div>
        <a href={href} rel="noreferrer" target="_blank">
          <h2 className="font-medium text-lg text-zinc-800 tracking-tight group-hover:text-indigo-600 group-hover:underline md:-mt-2">
            {name}
          </h2>
        </a>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  )
}

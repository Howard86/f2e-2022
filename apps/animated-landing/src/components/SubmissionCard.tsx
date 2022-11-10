import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { DivProps } from 'react-html-props'

interface SubmissionCardProps extends DivProps {
  src: StaticImageData
  title: string
  reversed?: boolean
  children: ReactNode
}

export default function SubmissionCard({
  src,
  title,
  reversed,
  children,
  className,
}: SubmissionCardProps) {
  return (
    <article
      className={clsx(
        className,
        reversed ? 'md:flex-row-reverse' : 'md:flex-row',
        'border-n1 text-ch-h5 rounded-card section w-full gap-4 border-[3px] px-6 py-8 sm:max-w-[520px] md:justify-between md:gap-6 md:py-9 md:px-12 lg:h-full lg:max-h-[300px]'
      )}
    >
      <div className="section flex-1">
        <Image alt={title} src={src} placeholder="blur" />
      </div>
      <div className="section flex-[2] gap-4 md:items-start md:text-start">
        <h3 className="text-ch-h4 font-bold">{title}</h3>
        {children}
      </div>
    </article>
  )
}

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import type { DivProps } from 'react-html-props'
import { EASE_TRANSITIONS, SubmissionSectionAnimation } from '@/constants/animations'

interface SubmissionCardProps extends DivProps {
  children: ReactNode
  reversed?: boolean
  src: StaticImageData
  title: string
}

export default function SubmissionCard({
  src,
  title,
  reversed,
  children,
  className,
}: SubmissionCardProps) {
  return (
    <motion.article
      className={clsx(
        className,
        reversed ? 'md:flex-row-reverse' : 'md:flex-row',
        'section group w-full gap-4 rounded-card border-[3px] border-n1 px-6 py-8 text-ch-h5 transition-all hover:border-p1 hover:bg-p1/10 hover:shadow-purple sm:max-w-[520px] md:justify-between md:gap-6 md:px-12 md:py-9 lg:h-full lg:max-h-[300px]'
      )}
      transition={EASE_TRANSITIONS}
      variants={SubmissionSectionAnimation.card}
    >
      <div className="section flex-1">
        <Image alt={title} placeholder="blur" src={src} />
      </div>
      <div className="section flex-[2] gap-4 md:items-start md:text-start">
        <h3 className="font-bold text-ch-h4 transition-colors group-hover:text-p1">{title}</h3>
        {children}
      </div>
    </motion.article>
  )
}

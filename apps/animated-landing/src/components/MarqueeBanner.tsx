import clsx from 'clsx'
import { motion } from 'framer-motion'
import { DivProps } from 'react-html-props'
import { SLIDE_HORIZONTAL_VARIANTS } from '@/constants/animations'
import DotIcon from './icons/DotIcon'

interface MarqueeBannerProps extends DivProps {
  reversed?: boolean
}

// TODO: add framer motion
export default function MarqueeBanner({ className, reversed }: MarqueeBannerProps) {
  return (
    <motion.aside
      variants={SLIDE_HORIZONTAL_VARIANTS}
      className={clsx('bg-decoration z-10 whitespace-nowrap', reversed && 'rotate-180', className)}
      custom={reversed}
    >
      <p
        className={clsx(
          'text-en-p1 font-en text-n1 inline-flex items-center gap-7 py-1.5 uppercase',
          reversed && 'rotate-180'
        )}
      >
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
      </p>
    </motion.aside>
  )
}

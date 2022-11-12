import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'
import DotIcon from './icons/DotIcon'

interface MarqueeBannerProps extends HTMLMotionProps<'aside'> {
  reversed?: boolean
}

export default function MarqueeBanner({ className, reversed, ...props }: MarqueeBannerProps) {
  return (
    <motion.aside
      className={clsx('bg-decoration z-10 whitespace-nowrap', reversed && 'rotate-180', className)}
      custom={reversed}
      {...props}
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

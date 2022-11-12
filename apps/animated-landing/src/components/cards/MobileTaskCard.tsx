import Image, { StaticImageData } from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { HTMLMotionProps, motion } from 'framer-motion'
import { FADE_IN_ROTATE_VARIANTS } from '@/constants/animations'
import ExternalLink from '../ExternalLink'

export interface TaskCardProps extends HTMLMotionProps<'article'> {
  href: string
  tag: string
  title: string
  description: string
  src: StaticImageData
  footer: string
  size: number
}

export default function MobileTaskCard({
  href,
  tag,
  title,
  description,
  src,
  footer,
  size,
  onClick,
  ...props
}: TaskCardProps) {
  return (
    <motion.article
      key={href}
      className="text-p3 bg-n1 section lg:rounded-card h-[360px] w-[300px] rounded-2xl py-4 px-6 sm:py-5"
      variants={FADE_IN_ROTATE_VARIANTS}
      {...props}
    >
      <span className="text-n5 text-ch-title bg-g1 mb-4 rounded-lg py-1 px-2 font-bold sm:mb-5">
        # {tag}
      </span>
      <h3 className="text-ch-h4 whitespace-nowrap font-bold uppercase">{title}</h3>
      <p className="text-ch-h5 mt-2 flex-1">{description}</p>
      <Image
        src={src}
        alt={title}
        width={size}
        height={size}
        className="my-4 flex-1"
        placeholder="blur"
      />
      <div className="flex w-full flex-1 items-end justify-between">
        {onClick ? (
          <button
            type="button"
            className="font-en text-en-subtitle text-p2 uppercase tracking-widest"
            onClick={onClick}
          >
            {footer}
          </button>
        ) : (
          <p className="font-en text-en-subtitle text-p2 uppercase tracking-widest">{footer}</p>
        )}
        <ExternalLink
          className="text-ch-subtitle before:bg-p3/20 hover:before:bg-p3/20 relative inline-flex items-center gap-2 font-bold transition-all before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:transition-all hover:before:w-full"
          href={href}
        >
          查看關卡細節
          <ArrowUpRightIcon className="w-3.5 stroke-[2.5]" />
        </ExternalLink>
      </div>
    </motion.article>
  )
}

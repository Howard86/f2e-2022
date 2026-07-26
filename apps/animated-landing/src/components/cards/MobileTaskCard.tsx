import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { type HTMLMotionProps, motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import ExternalLink from '../ExternalLink'

export interface TaskCardProps extends HTMLMotionProps<'article'> {
  description: string
  footer: string
  href: string
  size: number
  src: StaticImageData
  tag: string
  title: string
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
      className="section h-[360px] w-[300px] rounded-2xl bg-n1 px-6 py-4 text-p3 sm:py-5 lg:rounded-card"
      key={href}
      {...props}
    >
      <span className="mb-4 rounded-lg bg-g1 px-2 py-1 font-bold text-ch-title text-n5 sm:mb-5">
        # {tag}
      </span>
      <h3 className="whitespace-nowrap font-bold text-ch-h4 uppercase">{title}</h3>
      <p className="mt-2 flex-1 text-ch-h5">{description}</p>
      <Image
        alt={title}
        className="my-4 flex-1"
        height={size}
        placeholder="blur"
        src={src}
        width={size}
      />
      <div className="flex w-full flex-1 items-end justify-between">
        {onClick ? (
          <button
            className="font-en text-en-subtitle text-p2 uppercase tracking-widest"
            onClick={onClick}
            type="button"
          >
            {footer}
          </button>
        ) : (
          <p className="font-en text-en-subtitle text-p2 uppercase tracking-widest">{footer}</p>
        )}
        <ExternalLink
          className="relative inline-flex items-center gap-2 font-bold text-ch-subtitle transition-all before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-p3/20 before:transition-all hover:before:w-full hover:before:bg-p3/20"
          href={href}
        >
          查看關卡細節
          <ArrowUpRightIcon className="w-3.5 stroke-[2.5]" />
        </ExternalLink>
      </div>
    </motion.article>
  )
}

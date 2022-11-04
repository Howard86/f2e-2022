import Image, { StaticImageData } from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import ExternalLink from './ExternalLink'

export interface TaskCardProps {
  href: string
  tag: string
  title: string
  description: string
  src: StaticImageData
  footer: string
  size: number
}

export default function TaskCard({
  href,
  tag,
  title,
  description,
  src,
  footer,
  size,
}: TaskCardProps) {
  return (
    <article className="text-p3 bg-n1 flex flex-col items-center gap-2 rounded-2xl py-4 px-6">
      <span className="text-n5 text-ch-title bg-g1 rounded-lg py-1 px-2 font-bold"># {tag}</span>
      <h3 className="text-ch-h4 font-bold uppercase">{title}</h3>
      <p className="text-ch-h5">{description}</p>
      <Image src={src} alt={title} width={size} height={size} />
      <div className="mt-2 flex w-full justify-between">
        <p className="font-en text-en-subtitle text-p2 uppercase tracking-widest">{footer}</p>
        <ExternalLink
          className="text-ch-subtitle inline-flex items-center gap-2 font-bold"
          href={href}
        >
          查看關卡細節
          <ArrowUpRightIcon className="w-3.5 stroke-[2.5]" />
        </ExternalLink>
      </div>
    </article>
  )
}

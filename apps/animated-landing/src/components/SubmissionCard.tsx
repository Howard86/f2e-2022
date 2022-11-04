import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface SubmissionCardProps {
  src: StaticImageData
  title: string
  children: ReactNode
}

export default function SubmissionCard({ src, title, children }: SubmissionCardProps) {
  return (
    <article className="border-n1 text-ch-h5 rounded-card flex w-full flex-col items-center gap-4 border-[3px] px-6 py-8">
      <Image alt={title} src={src} />
      <h3 className="text-ch-h4 font-bold">{title}</h3>
      {children}
    </article>
  )
}

import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

interface CompetitionCardProps {
  children: ReactNode
  src: StaticImageData
  title: string
}

export default function CompetitionCard({ src, title, children }: CompetitionCardProps) {
  return (
    <article className="max-w-[485px] rounded-card bg-card-background p-0.5 transition-all hover:bg-decoration md:w-full md:hover:-translate-y-2">
      <div className="section h-full rounded-card bg-n3 px-6 py-8 md:p-10">
        <Image alt={title} placeholder="blur" src={src} />
        <h3 className="py-2 font-bold text-ch-h3 text-p1 [text-shadow:theme(boxShadow.purple)] md:text-ch-h2">
          {title}
        </h3>
        {children}
      </div>
    </article>
  )
}

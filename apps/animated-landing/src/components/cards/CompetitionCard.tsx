import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface CompetitionCardProps {
  src: StaticImageData
  title: string
  children: ReactNode
}

export default function CompetitionCard({ src, title, children }: CompetitionCardProps) {
  return (
    <article className="bg-card-background rounded-card hover:bg-decoration max-w-[485px] p-0.5 transition-all md:w-full md:hover:-translate-y-5">
      <div className="bg-n3 rounded-card section h-full px-6 py-8 md:p-10">
        <Image alt={title} src={src} placeholder="blur" />
        <h3 className="text-p1 text-ch-h3 md:text-ch-h2 py-2 font-bold [text-shadow:theme(boxShadow.purple)]">
          {title}
        </h3>
        {children}
      </div>
    </article>
  )
}

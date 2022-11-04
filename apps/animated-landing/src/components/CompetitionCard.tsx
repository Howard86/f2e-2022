import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface CompetitionCardProps {
  src: StaticImageData
  title: string
  children: ReactNode
}

export default function CompetitionCard({ src, title, children }: CompetitionCardProps) {
  return (
    <article className="bg-card-background rounded-card w-full p-0.5">
      <div className="bg-n3 rounded-card flex flex-col items-center px-6 py-8">
        <Image alt={title} src={src} />
        <h3 className="text-p1 text-ch-h3 py-2 font-bold [text-shadow:theme(boxShadow.purple)]">
          {title}
        </h3>
        {children}
      </div>
    </article>
  )
}

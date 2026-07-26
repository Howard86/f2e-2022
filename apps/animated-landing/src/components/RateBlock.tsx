export interface RateBlockProps {
  description: string
  title: string
}

export default function RateBlock({ title, description }: RateBlockProps) {
  return (
    <div>
      <h4 className="mb-2 font-bold text-ch-h4">{title}</h4>
      <p className="text-ch-h5">{description}</p>
    </div>
  )
}

export interface RateBlockProps {
  title: string
  description: string
}

export default function RateBlock({ title, description }: RateBlockProps) {
  return (
    <div>
      <h4 className="text-ch-h4 mb-2 font-bold">{title}</h4>
      <p className="text-ch-h5">{description}</p>
    </div>
  )
}

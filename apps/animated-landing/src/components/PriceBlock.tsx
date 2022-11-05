export interface PriceBlockProps {
  title: string
  price: string
  priceTotal: string
  description: string
}

export default function PriceBlock({ title, price, priceTotal, description }: PriceBlockProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-ch-h4 mb-2 font-bold">{title}</h4>
      <h5 className="text-ch-h5">
        {priceTotal} <span className="text-g1">{price}</span>
      </h5>
      <p className="text-n2">{description}</p>
    </div>
  )
}

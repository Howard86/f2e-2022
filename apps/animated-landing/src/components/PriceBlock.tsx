export interface PriceBlockProps {
  description: string
  price: string
  priceTotal: string
  title: string
}

export default function PriceBlock({ title, price, priceTotal, description }: PriceBlockProps) {
  return (
    <div className="space-y-2">
      <h4 className="font-bold text-ch-h5 md:inline">{title}</h4>
      <h5 className="text-ch-h5 md:inline">
        {priceTotal} <span className="text-g1">{price}</span>
      </h5>
      <p className="text-n2">{description}</p>
    </div>
  )
}

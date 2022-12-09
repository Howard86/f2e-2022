import { ImageProps } from 'next/image'

export default function Image({ alt }: ImageProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} />
}

import { DivProps } from 'react-html-props'
import DotIcon from './icons/DotIcon'

// TODO: add framer motion
export default function MarqueeBanner({ className }: DivProps) {
  return (
    <aside className={`bg-decoration w-full whitespace-nowrap ${className}`}>
      <p className="text-en-p1 font-en text-n1 inline-flex items-center gap-7 py-1.5 uppercase">
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
        <DotIcon className="h-[11px] w-[11px]" />
        Interactive web design
      </p>
    </aside>
  )
}

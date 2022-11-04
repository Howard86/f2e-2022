import { DivProps } from 'react-html-props'

// TODO: add framer motion
export default function MarqueeBanner({ className }: DivProps) {
  return (
    <aside className={`bg-decoration w-full whitespace-nowrap ${className}`}>
      <p className="text-en-p1 font-en text-n1 inline-flex items-center gap-7 py-1.5 uppercase">
        Interactive web design
        <span className="bg-n1 h-[11px] w-[11px] rounded-full " />
        Interactive web design
      </p>
    </aside>
  )
}

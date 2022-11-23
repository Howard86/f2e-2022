import Link from 'next/link'
import { FC } from 'react'
import { SVGProps } from 'react-html-props'
import ArrowForwardIcon from '@/app/(scrum)/ArrowForwardIcon'
import ProductOwnerIcon from './ProductOwnerIcon'
import ScrumMasterIcon from './ScrumMasterIcon'
import DevelopmentTeamIcon from './DevelopmentTeamIcon'
import BubbleBackground from './BubbleBackground'
import DiverIcon from './DiverIcon'

type CharacterItem = {
  icon: FC<SVGProps>
  title: string
  subheader: string
  description: string
}

const items: CharacterItem[] = [
  {
    icon: ProductOwnerIcon,
    title: '產品負責人',
    subheader: 'Product Owner',
    description: '產品方向及願景，定義產品細節、優先級別、交付時間，清楚的表達及排序產品待辦事項。',
  },
  {
    icon: ScrumMasterIcon,
    title: '敏捷教練',
    subheader: 'Scrum Master',
    description:
      '確保開發團隊遵循 Scrum 的價值觀，使團隊能正確且合理地運作。教育組織內部，幫助團隊理解 Scrum。',
  },
  {
    icon: DevelopmentTeamIcon,
    title: '開發團隊',
    subheader: 'Development Team',
    description: '負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。',
  },
]

export default function CharacterPage() {
  return (
    <div className="from-primary-dark to-primary-main relative flex h-full flex-1 flex-col items-center overflow-hidden bg-gradient-to-t">
      <BubbleBackground className="absolute top-[104px] right-0" />
      <DiverIcon className="absolute bottom-0 right-80" />
      <section className="px-15 relative mt-9 flex-1 text-center">
        <h1 className="text-h1 mb-6">角色介紹</h1>
        <div className="gap-15 flex">
          {items.map((item) => (
            <article
              key={item.title}
              className="bg-primary-dark/50 flex flex-1 flex-col items-center rounded-[20px] px-12 py-9"
            >
              <item.icon className="h-[315px] w-auto" />
              <h2 className="text-h2 mt-9">{item.title}</h2>
              <h3 className="text-h3 whitespace-nowrap">{item.subheader}</h3>
              <p className="mt-9 text-start [text-align-last:center]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <nav className="z-10 w-full pt-px pb-2">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/" className="text-h4 inline-flex items-center px-9 py-7">
              <ArrowForwardIcon className="mr-5" />
              回上一座島
            </Link>
          </li>
          <li>
            <Link href="/" className="text-h4 inline-flex items-center px-9 py-7">
              前往下一座島
              <ArrowForwardIcon className="ml-5 rotate-180" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

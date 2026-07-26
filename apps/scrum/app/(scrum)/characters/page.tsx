import type { FC } from 'react'
import type { SVGProps } from 'react-html-props'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import BubbleBackground from './BubbleBackground'
import DevelopmentTeamIcon from './DevelopmentTeamIcon'
import DiverIcon from './DiverIcon'
import ProductOwnerIcon from './ProductOwnerIcon'
import ScrumMasterIcon from './ScrumMasterIcon'

type CharacterItem = {
  icon: FC<SVGProps>
  title: string
  subheader: string
  description: string
}

const items: CharacterItem[] = [
  {
    description: '產品方向及願景，定義產品細節、優先級別、交付時間，清楚的表達及排序產品待辦事項。',
    icon: ProductOwnerIcon,
    subheader: 'Product Owner',
    title: '產品負責人',
  },
  {
    description:
      '確保開發團隊遵循 Scrum 的價值觀，使團隊能正確且合理地運作。教育組織內部，幫助團隊理解 Scrum。',
    icon: ScrumMasterIcon,
    subheader: 'Scrum Master',
    title: '敏捷教練',
  },
  {
    description: '負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。',
    icon: DevelopmentTeamIcon,
    subheader: 'Development Team',
    title: '開發團隊',
  },
]

export default function CharacterPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ScrumHeader route={ScrumRoute['/characters']} />
      <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-gradient-to-t from-primary-dark to-primary-main">
        <BubbleBackground className="absolute top-[104px] right-0" />
        <DiverIcon className="absolute right-80 bottom-0" />
        <section className="relative mt-9 flex-1 px-15 text-center">
          <h1 className="mb-6 text-h1">角色介紹</h1>
          <div className="flex gap-15">
            {items.map((item) => (
              <article
                className="flex flex-1 flex-col items-center gap-4 rounded-20 bg-primary-dark/50 px-8 py-6 2xl:gap-9 2xl:px-12 2xl:py-9"
                key={item.title}
              >
                <item.icon className="h-64 w-auto" />
                <hgroup>
                  <h2 className="text-h2">{item.title}</h2>
                  <h3 className="whitespace-nowrap text-h3">{item.subheader}</h3>
                </hgroup>
                <p className="text-start [text-align-last:center]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <ScrumNav route={ScrumRoute['/characters']} />
      </main>
    </div>
  )
}

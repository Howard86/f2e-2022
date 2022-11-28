import { FC } from 'react'
import { SVGProps } from 'react-html-props'
import ProductOwnerIcon from './ProductOwnerIcon'
import ScrumMasterIcon from './ScrumMasterIcon'
import DevelopmentTeamIcon from './DevelopmentTeamIcon'
import BubbleBackground from './BubbleBackground'
import DiverIcon from './DiverIcon'
import ScrumNav from '../ScrumNav'
import ScrumHeader from '../ScrumHeader'
import { ScrumRoute } from '../constants'

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
    <div className="flex flex-1 flex-col">
      <ScrumHeader route={ScrumRoute['/characters']} />
      <main className="from-primary-dark to-primary-main relative flex flex-1 flex-col items-center overflow-hidden bg-gradient-to-t">
        <BubbleBackground className="absolute top-[104px] right-0" />
        <DiverIcon className="absolute bottom-0 right-80" />
        <section className="px-15 relative mt-9 flex-1 text-center">
          <h1 className="text-h1 mb-6">角色介紹</h1>
          <div className="gap-15 flex">
            {items.map((item) => (
              <article
                key={item.title}
                className="bg-primary-dark/50 rounded-20 flex flex-1 flex-col items-center gap-4 px-8 py-6 2xl:gap-9 2xl:px-12 2xl:py-9"
              >
                <item.icon className="h-64 w-auto" />
                <hgroup>
                  <h2 className="text-h2">{item.title}</h2>
                  <h3 className="text-h3 whitespace-nowrap">{item.subheader}</h3>
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

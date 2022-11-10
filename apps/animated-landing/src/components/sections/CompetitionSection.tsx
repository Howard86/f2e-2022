import clipboard from '@/../public/assets/icons/clipboard.png'
import coin from '@/../public/assets/icons/coin.png'

import CompetitionCard from '../CompetitionCard'
import RaceCarIcon from '../icons/RaceCarIcon'
import RaceFlagIcon from '../icons/RaceFlegIcon'
import PriceBlock, { PriceBlockProps } from '../PriceBlock'
import RateBlock, { RateBlockProps } from '../RateBlock'

const RATES: RateBlockProps[] = [
  {
    title: '初選：',
    description: '將由六角學院前端、UI 評審進行第一波篩選。',
  },
  {
    title: '決選：',
    description: '由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！',
  },
]

const PRICES: PriceBlockProps[] = [
  {
    title: '初選佳作：',
    priceTotal: '共六十位',
    price: '數位獎狀',
    description: '每週主題個人組十位、團體組十組',
  },
  {
    title: '個人企業獎：',
    priceTotal: '共六位',
    price: 'NTD 3,000/位',
    description: '每週主題個人組十位、團體組十組',
  },
  {
    title: '團體企業獎：',
    priceTotal: '共三組 ',
    price: 'NTD 10,000/組',
    description: '每週主題各 1 組',
  },
]

export default function CompetitionSection() {
  return (
    <section className="section mx-auto py-12 md:py-14">
      <h2 className="text-ch-h4 lg:text-ch-h2 md:text-ch-h3 py-8 text-center font-bold [text-shadow:theme(boxShadow.white)] md:py-10">
        區區修煉已經無法滿足了嗎？
        <span className="block lg:inline">還有比賽等著你！</span>
      </h2>
      <div className="w-full px-4 py-5">
        <div className="flex items-baseline justify-between">
          <RaceFlagIcon className="mb-1" />
          <RaceCarIcon className="translate-x-2 translate-y-2" />
        </div>
        <span className="bg-n1 block h-[3px] w-full shadow-white" />
      </div>
      <div className="flex flex-col gap-6 py-10 px-4 md:gap-[60px] lg:flex-row">
        <CompetitionCard src={clipboard} title="評審機制">
          <div className="w-full space-y-8 pt-8 md:pt-12">
            {RATES.map((item) => (
              <RateBlock key={item.title} {...item} />
            ))}
          </div>
        </CompetitionCard>
        <CompetitionCard src={coin} title="獎金">
          <div className="w-full space-y-6 pt-8 md:pt-12">
            {PRICES.map((item) => (
              <PriceBlock key={item.title} {...item} />
            ))}
            <p className="text-ch-h5">以上皆提供完賽數位獎狀</p>
          </div>
        </CompetitionCard>
      </div>
    </section>
  )
}

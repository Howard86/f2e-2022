import { motion } from 'framer-motion'
import clipboard from '@/../public/assets/icons/clipboard.png'
import coin from '@/../public/assets/icons/coin.png'

import CompetitionCard from '../cards/CompetitionCard'
import RaceCarIcon from '../icons/RaceCarIcon'
import RaceFlagIcon from '../icons/RaceFlegIcon'
import PriceBlock, { PriceBlockProps } from '../PriceBlock'
import RateBlock, { RateBlockProps } from '../RateBlock'
import {
  AnimationVariant,
  COMPETITION_VARIANTS,
  DELAYED_FADE_VARIANTS,
  DELAYED_SHRINK_VARIANTS,
  SLIDE_UP_VARIANTS_TWO,
} from '@/constants/animations'

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
    description: '每週主題各 2 名，設計 1 位、前端 1 位 ',
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
    <motion.section
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Activate}
      variants={COMPETITION_VARIANTS}
      className="section mx-auto min-h-[min(960px,_100vh)] snap-start py-12 md:pb-24 lg:snap-start lg:pb-32"
    >
      <motion.h2
        variants={SLIDE_UP_VARIANTS_TWO}
        className="text-ch-h4 lg:text-ch-h2 md:text-ch-h3 py-8 text-center font-bold [text-shadow:theme(boxShadow.white)] md:py-10"
      >
        區區修煉已經無法滿足了嗎？
        <motion.span variants={DELAYED_FADE_VARIANTS} className="block lg:inline">
          還有比賽等著你！
        </motion.span>
      </motion.h2>
      <div className="w-full px-8 py-5 md:px-4">
        <div className="mb-1 flex items-baseline">
          <RaceFlagIcon />
          <motion.div className="w-full" variants={DELAYED_SHRINK_VARIANTS} />
          <RaceCarIcon className="shrink-0 translate-x-2 translate-y-2" />
        </div>
        <span className="bg-n1 block h-[3px] w-full shadow-white" />
      </div>
      <motion.div
        variants={SLIDE_UP_VARIANTS_TWO}
        className="flex flex-col gap-6 py-10 px-4 md:gap-[60px] lg:flex-row"
      >
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
      </motion.div>
    </motion.section>
  )
}

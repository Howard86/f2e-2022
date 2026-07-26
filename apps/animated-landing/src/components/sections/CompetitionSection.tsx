import { motion } from 'framer-motion'
import clipboard from '@/../public/assets/icons/clipboard.png'
import coin from '@/../public/assets/icons/coin.png'
import { AnimationVariant, CompetitionSectionAnimation } from '@/constants/animations'
import CompetitionCard from '../cards/CompetitionCard'
import RaceCarIcon from '../icons/RaceCarIcon'
import RaceFlagIcon from '../icons/RaceFlegIcon'
import PriceBlock, { type PriceBlockProps } from '../PriceBlock'
import RateBlock, { type RateBlockProps } from '../RateBlock'

const RATES: RateBlockProps[] = [
  {
    description: '將由六角學院前端、UI 評審進行第一波篩選。',
    title: '初選：',
  },
  {
    description: '由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！',
    title: '決選：',
  },
]

const PRICES: PriceBlockProps[] = [
  {
    description: '每週主題個人組十位、團體組十組',
    price: '數位獎狀',
    priceTotal: '共六十位',
    title: '初選佳作：',
  },
  {
    description: '每週主題各 2 名，設計 1 位、前端 1 位 ',
    price: 'NTD 3,000/位',
    priceTotal: '共六位',
    title: '個人企業獎：',
  },
  {
    description: '每週主題各 1 組',
    price: 'NTD 10,000/組',
    priceTotal: '共三組 ',
    title: '團體企業獎：',
  },
]

export default function CompetitionSection() {
  return (
    <motion.section
      className="section mx-auto min-h-[min(960px,_100vh)] snap-start py-12 md:pb-24 lg:snap-start lg:pb-32"
      initial={AnimationVariant.Initial}
      variants={CompetitionSectionAnimation.section}
      whileInView={AnimationVariant.Activate}
    >
      <motion.h2
        className="py-8 text-center font-bold text-ch-h4 [text-shadow:theme(boxShadow.white)] md:py-10 md:text-ch-h3 lg:text-ch-h2"
        variants={CompetitionSectionAnimation.title}
      >
        區區修煉已經無法滿足了嗎？
        <motion.span
          className="block lg:inline"
          variants={CompetitionSectionAnimation.delayedTitle}
        >
          還有比賽等著你！
        </motion.span>
      </motion.h2>
      <div className="w-full px-8 py-5 md:px-4">
        <div className="mb-1 flex items-baseline">
          <RaceFlagIcon variants={CompetitionSectionAnimation.flag} />
          <motion.div className="w-full" variants={CompetitionSectionAnimation.car} />
          <RaceCarIcon className="shrink-0 translate-x-2 translate-y-2" />
        </div>
        <span className="block h-[3px] w-full bg-n1 shadow-white" />
      </div>
      <motion.div
        className="flex flex-col gap-6 px-4 py-10 md:gap-[60px] lg:flex-row"
        variants={CompetitionSectionAnimation.container}
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

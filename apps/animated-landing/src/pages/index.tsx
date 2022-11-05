import Image, { StaticImageData } from 'next/image'
import Head from 'next/head'
import ExternalLink from '@/components/ExternalLink'

import clipboard from '@/../public/assets/icons/clipboard.png'
import coin from '@/../public/assets/icons/coin.png'

import blockStudio from '@/../public/assets/company/block-studio.png'
import kdanMobile from '@/../public/assets/company/kdan-mobile.png'
import titanSoft from '@/../public/assets/company/titan-soft.png'

import Header from '@/components/Header'
import RaceFlagIcon from '@/components/icons/RaceFlegIcon'
import RaceCarIcon from '@/components/icons/RaceCarIcon'
import CompetitionCard from '@/components/CompetitionCard'
import RateBlock, { RateBlockProps } from '@/components/RateBlock'
import PriceBlock, { PriceBlockProps } from '@/components/PriceBlock'
import QuestionTab from '@/components/QuestionTabs'
import YellowStarIcon from '@/components/icons/YellowStarIcon'
import HomeSection from '@/components/sections/HomeSection'
import QuestionSection from '@/components/sections/QuestionSection'
import SolutionSection from '@/components/sections/SolutionSection'
import TaskSection from '@/components/sections/TaskSection'
import SubmissionSection from '@/components/sections/SubmissionSection'

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

type Company = {
  name: string
  logo: StaticImageData
  href: string
}

const COMPANIES: Company[] = [
  {
    name: '板塊設計',
    logo: blockStudio,
    href: 'https://blockstudio.tw/',
  },
  {
    name: '凱鈿行動科技',
    logo: kdanMobile,
    href: 'https://www.kdanmobile.com/',
  },
  {
    name: '新加坡商 泰坦科技',
    logo: titanSoft,
    href: 'https://titansoft.com',
  },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>F2E 2022</title>
        <meta name="description" content="4th the F2E 互動式網頁設計，立即報名！" />
      </Head>
      <div className="relative">
        <Header />
        <main className="flex flex-col gap-6 pt-20">
          <HomeSection />
          <QuestionSection />
          <SolutionSection />
          <TaskSection />
          <SubmissionSection />

          <section className="flex flex-col items-center">
            <h2 className="text-ch-h4 mt-12 py-8 text-center font-bold [text-shadow:theme(boxShadow.white)]">
              區區修煉已經無法滿足了嗎？
              <br />
              還有比賽等著你！
            </h2>
            <div className="w-full px-4 pb-5">
              <div className="flex items-baseline justify-between">
                <RaceFlagIcon className="mb-1" />
                <RaceCarIcon className="translate-x-2 translate-y-2" />
              </div>
              <span className="bg-n1 block h-[3px] w-full shadow-white" />
            </div>
            <div className="flex flex-col gap-6 py-10 px-4">
              <CompetitionCard src={clipboard} title="評審機制">
                <div className="w-full space-y-8 pt-6">
                  {RATES.map((item) => (
                    <RateBlock key={item.title} {...item} />
                  ))}
                </div>
              </CompetitionCard>
              <CompetitionCard src={coin} title="獎金">
                <div className="w-full space-y-6 pt-8">
                  {PRICES.map((item) => (
                    <PriceBlock key={item.title} {...item} />
                  ))}
                  <p className="text-ch-h5">以上皆提供完賽數位獎狀</p>
                </div>
              </CompetitionCard>
            </div>
          </section>

          <section className="flex flex-col items-center pb-6">
            <h2 className="text-en-h3 font-en tracking-widest [text-shadow:theme(boxShadow.white)]">
              Q&A
            </h2>
            <QuestionTab />
            {/* TODO: refactor button */}
            <ExternalLink
              href="#"
              className="text-n6 bg-y1 text-ch-h4 rounded-card mt-12 mb-6 inline-flex grow-0 py-3 px-10 font-bold tracking-wider"
            >
              立即報名
            </ExternalLink>
          </section>

          <section className="bg-n3 flex flex-col items-center gap-6 py-10">
            <div className="relative mb-4 w-full px-6">
              <YellowStarIcon className="absolute top-0 right-8 w-8" />
              <h2 className="py-5 text-center">
                <span className="font-en text-en-h3 block uppercase">Sponsors</span>
                <span className="text-ch-h4 block font-bold">鑽石級贊助商</span>
              </h2>
              <YellowStarIcon className="absolute bottom-8 left-4" />
            </div>
            <div className="mb-5 flex flex-col items-center gap-6">
              {COMPANIES.map((company) => (
                <ExternalLink
                  key={company.href}
                  href={company.href}
                  className="bg-n1 rounded-card p-3"
                >
                  <Image alt={company.name} src={company.logo} />
                </ExternalLink>
              ))}
            </div>
          </section>
        </main>
        <footer className="text-en-p4 px-5 py-8 text-center font-medium">
          Copyright © 2022 HexSchool. All rights reserved.
        </footer>
      </div>
    </>
  )
}

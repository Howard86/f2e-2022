import Image, { StaticImageData } from 'next/image'
import Head from 'next/head'
import ExternalLink from '@/components/ExternalLink'

import blockStudio from '@/../public/assets/company/block-studio.png'
import kdanMobile from '@/../public/assets/company/kdan-mobile.png'
import titanSoft from '@/../public/assets/company/titan-soft.png'

import Header from '@/components/Header'
import YellowStarIcon from '@/components/icons/YellowStarIcon'
import HomeSection from '@/components/sections/HomeSection'
import StatementSection from '@/components/sections/StatementSection'
import SolutionSection from '@/components/sections/SolutionSection'
import TaskSection from '@/components/sections/TaskSection'
import SubmissionSection from '@/components/sections/SubmissionSection'
import CompetitionSection from '@/components/sections/CompetitionSection'
import CommonQuestionSection from '@/components/sections/CommonQuestionSection'

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
          <StatementSection />
          <SolutionSection />
          <TaskSection />
          <SubmissionSection />
          <CompetitionSection />
          <CommonQuestionSection />

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

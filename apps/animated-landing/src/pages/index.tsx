import Image, { StaticImageData } from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import ExternalLink from '@/components/ExternalLink'

import code from '@/../public/assets/icons/code.png'
import dashboard from '@/../public/assets/icons/dashboard.png'
import refresh from '@/../public/assets/icons/refresh.png'
import clock from '@/../public/assets/icons/clock.png'
import folder from '@/../public/assets/icons/folder.png'
import clipboard from '@/../public/assets/icons/clipboard.png'
import coin from '@/../public/assets/icons/coin.png'
import play from '@/../public/assets/icons/play.png'
import draw from '@/../public/assets/icons/draw.png'
import pen from '@/../public/assets/icons/pen.png'
import leftPalm from '@/../public/assets/icons/left-palm.png'
import rightPalm from '@/../public/assets/icons/right-palm.png'

import blockStudio from '@/../public/assets/company/block-studio.png'
import kdanMobile from '@/../public/assets/company/kdan-mobile.png'
import titanSoft from '@/../public/assets/company/titan-soft.png'

import StarIcon from '@/components/icons/StarIcon'
import Header from '@/components/Header'
import RectangleIcon from '@/components/icons/RectangleIcon'
import CurlyStarIcon from '@/components/icons/CurlyStarIcon'
import QuestionMarkIcon from '@/components/icons/QuestionMarkIcon'
import QuestionBoxIcon from '@/components/icons/QuestionBoxIcon'
import LinkedBallIcon from '@/components/icons/LinkedBallIcon'
import TriangleIcon from '@/components/icons/TriangleIcon'
import ExclamationIcon from '@/components/icons/ExclamationIcon'
import EmailAtIcon from '@/components/icons/EmailAtIcon'
import LongRectangleIcon from '@/components/icons/LongRectangleIcon'
import CodeStamp from '@/components/icons/CodeStamp'
import StarStamp from '@/components/icons/StarStamp'
import MarqueeBanner from '@/components/MarqueeBanner'
import IntroductionTitleIcon from '@/components/icons/IntroductionTitleIcon'
import ThunderIcon from '@/components/icons/ThunderIcon'
import TaskCard, { TaskCardProps } from '@/components/TaskCard'
import PacManIcon from '@/components/icons/PacManIcon'
import DotIcon from '@/components/icons/DotIcon'
import SubmissionCard from '@/components/SubmissionCard'
import DownIcon from '@/components/icons/DownIcon'
import RaceFlagIcon from '@/components/icons/RaceFlegIcon'
import RaceCarIcon from '@/components/icons/RaceCarIcon'
import CompetitionCard from '@/components/CompetitionCard'
import RateBlock, { RateBlockProps } from '@/components/RateBlock'
import PriceBlock, { PriceBlockProps } from '@/components/PriceBlock'
import QuestionTab from '@/components/QuestionTabs'
import YellowStarIcon from '@/components/icons/YellowStarIcon'

const TASKS: TaskCardProps[] = [
  {
    tag: '板塊設計',
    title: 'The F2E 活動網站設計',
    description: '視覺滾動',
    src: dashboard,
    size: 128,
    href: 'https://2022.thef2e.com/news/week1',
    footer: 'week 1',
  },
  {
    tag: '凱鈿行動科技',
    title: '今晚，我想來點點簽',
    description: 'Canvas',
    src: draw,
    size: 114,
    href: 'https://2022.thef2e.com/news/week2',
    footer: 'week 2',
  },
  {
    tag: '鈦坦科技',
    title: 'Scrum 新手村',
    description: 'JS Draggable',
    src: refresh,
    size: 106,
    href: 'https://2022.thef2e.com/news/week3',
    footer: 'week 3',
  },
]

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
          <section className="flex flex-col items-center px-4">
            <Image
              src={code}
              height={70.5}
              width={70.5}
              alt="code icon"
              className="ml-7 rotate-[-19.31deg] self-start"
            />
            <h1 className="flex flex-col items-center justify-center text-center">
              <span className="text-en-h4 font-en uppercase italic tracking-[.2em] [text-shadow:-2.13px_-0.68px_theme(colors.g1),_1.32px_1.26px_theme(colors.p1)]">
                4th
              </span>
              <span className="text-en-h1 font-en uppercase [text-shadow:-1.73px_-2.6px_theme(colors.g1),_4.32px_2.59px_theme(colors.p1)]">
                the F2E
              </span>
              <span className="text-ch-h5 mt-2 font-bold tracking-[0.8em]">互動式網頁設計</span>
            </h1>
            <ExternalLink
              href="#"
              className="text-n6 bg-y1 text-ch-h4 rounded-card mt-12 mb-6 inline-flex grow-0 py-3 px-10 font-bold tracking-wider"
            >
              立即報名
            </ExternalLink>
            <Image
              src={dashboard}
              height={105}
              width={105}
              alt="dashboard icon"
              className="rotate-[16.6deg] self-end"
            />
            {/* TODO: add marquee */}
            <div className="my-14">
              <p className="font-en text-en-h4 bg-text-decoration text-n5 inline-flex items-center gap-6 whitespace-nowrap bg-clip-text uppercase tracking-[.08em] [-webkit-text-stroke:3.5px_transparent]">
                join us
                <span>
                  <StarIcon />
                </span>
                join us
              </p>
            </div>
          </section>
          {/* TODO: merge svg into blocks & add framer group animation */}
          <section className="text-ch-h5 text-n5 [&>div]:relative [&>div>svg]:absolute">
            <div className="h-[164px]">
              <RectangleIcon className="left-[70px]" />
              <CurlyStarIcon className="left-[204px] top-[13px]" />
              <QuestionMarkIcon className="right-[52px]" />
              <QuestionBoxIcon
                className="fill-p1 left-[23px] top-[62px]"
                aria-label="羨慕別人的酷酷網頁動畫？"
              >
                <text x="20" y="60" className="rotate-[-3.36deg] fill-current">
                  羨慕別人的酷酷網頁動畫？
                </text>
              </QuestionBoxIcon>
              <p className="sr-only">羨慕別人的酷酷網頁動畫？</p>
            </div>
            <div className="-mt-4 h-[171px]">
              <LinkedBallIcon className="left-[93px] top-12" />
              <QuestionBoxIcon
                className="fill-g1 -right-6 top-5"
                aria-label="滿足不了同事的許願？"
                reversed
              >
                <text x="16" y="68" className="rotate-[-7.26deg] fill-current">
                  滿足不了同事的許願？
                </text>
              </QuestionBoxIcon>
              <p className="sr-only">滿足不了同事的許願？</p>
              <ExclamationIcon className="left-4 top-24" />
              <TriangleIcon className="right-12 bottom-4" />
            </div>
            <div className="-mt-5 h-[196.5px]">
              <LongRectangleIcon className="left-28 top-0 " />
              <QuestionBoxIcon
                className="fill-p1 top-[70px] left-4 rotate-[-10.15deg]"
                aria-label="動畫技能樹太雜無從下手？"
              >
                <text x="22" y="58" className="rotate-[-3.8deg] fill-current">
                  動畫技能樹太雜無從下手？
                </text>
              </QuestionBoxIcon>
              <p className="sr-only">動畫技能樹太雜無從下手？</p>
              <EmailAtIcon className="right-10 bottom-3" />
            </div>
          </section>
          <section
            className="bg-n1 text-n6 relative flex flex-col items-center overflow-x-hidden font-bold [background-size:40px_40px]
[background-image:linear-gradient(to_right,rgb(128,128,128,0.2),transparent_1px),linear-gradient(to_bottom,rgb(128,128,128,0.2),transparent_1px)]"
          >
            <MarqueeBanner />
            <div className="relative flex w-full justify-center pt-12">
              <CodeStamp className="absolute -bottom-6 right-4" />
              <Image alt="left palm" src={leftPalm} quality={100} />
            </div>
            <IntroductionTitleIcon aria-label="互動式網頁設計" />
            <h2 className="sr-only">互動式網頁設計</h2>
            <p className="text-ch-p4 mt-1 mb-3 inline-flex items-center gap-7">
              <span>前端工程師</span>
              <XMarkIcon className="h-3 w-3 stroke-[3]" />
              <span>UI設計師</span>
            </p>
            <div className="relative mb-28 flex w-full justify-center">
              <Image alt="right palm" src={rightPalm} quality={100} />
              <StarStamp className="absolute -bottom-28 left-0" />
            </div>
            <MarqueeBanner className="absolute bottom-0 z-10" />
          </section>

          <section>
            <section className="relative flex flex-col items-center pb-[82px] text-center">
              <ThunderIcon className="absolute right-7 top-6" />
              <ThunderIcon className="absolute right-6 top-14 w-7 rotate-[25deg]" />
              <h2 className="text-ch-h3 text-g1 shadow-green border-g1 mt-20 rounded-full border-4 py-5 px-10 font-bold [text-shadow:theme(boxShadow.green)]">
                年度最強合作
                <br />
                三大主題來襲
              </h2>
              <p className="text-ch-h5 my-10">
                各路廠商強強聯手
                <br />
                共同設計出接地氣的
                <br />
                網頁互動挑戰關卡
              </p>
              <div className="flex w-full flex-col gap-10 px-[37.5px]">
                {TASKS.map((card) => (
                  <TaskCard key={card.href} {...card} />
                ))}
              </div>
            </section>

            <section className="bg-n4 relative flex flex-col py-10 text-center">
              <div className="flex items-center justify-center gap-3 whitespace-nowrap py-9 px-8">
                <PacManIcon className="-mr-2" />
                <DotIcon />
                <DotIcon />
                <DotIcon />
                <h2 className="text-ch-h3 font-bold [text-shadow:theme(boxShadow.white)]">
                  活動說明
                </h2>
                <DotIcon />
                <DotIcon />
                <DotIcon />
                <DotIcon className="bg-p1 shadow-purple ml-2 h-[11px] w-[11px]" />
              </div>
              <div className="flex flex-col items-center gap-1 px-4 pb-5">
                <SubmissionCard src={pen} title="開放報名">
                  <p>
                    <span className="text-g1">10/13</span> (四) 早上 11:00
                  </p>
                  <span className="bg-n1 -my-2 h-3 w-0.5" />
                  <p>
                    <span className="text-g1">10/30</span> (日) 晚上 23:59
                  </p>
                  <p>截止前可修改報名組別</p>
                </SubmissionCard>
                <DownIcon />
                <SubmissionCard src={clock} title="個組別開賽">
                  <p>
                    <span className="text-g1">10/31</span> UI組、團體組開賽
                  </p>
                  <p>
                    <span className="text-g1">11/07</span> 前端組開賽
                  </p>
                  <p>
                    前端工程師可採用
                    <br />
                    UI 設計師的設計稿產出完整作品
                  </p>
                </SubmissionCard>
                <DownIcon />
                <SubmissionCard src={folder} title="登錄作品">
                  <p>
                    <span className="text-g1">10/31</span> (一) 中午 12:00
                  </p>
                  <span className="bg-n1 -my-2 h-3 w-0.5" />
                  <p>
                    <span className="text-g1">11/07</span> (一) 中午 12:00
                  </p>
                  <p>依賽程登錄作品</p>
                </SubmissionCard>
                <DownIcon />
                <SubmissionCard src={play} title="線上直播">
                  <p>
                    <span className="text-g1">11/03 - 11/24</span> 每週四
                  </p>
                </SubmissionCard>
              </div>
            </section>

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

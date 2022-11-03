import Image from 'next/image'
import ExternalLink from '@/components/ExternalLink'

import code from '@/../public/assets/icons/code.png'
import dashboard from '@/../public/assets/icons/dashboard.png'
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

export default function Example() {
  return (
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
            <span className="text-en-h3 font-en uppercase italic [text-shadow:_2.05px_1.37px_theme(colors.p1),0.68px_-1.36px_theme(colors.g1)]">
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
            <p className="font-en text-en-h4 bg-decoration text-n5 inline-flex items-center gap-6 whitespace-nowrap bg-clip-text uppercase [-webkit-text-stroke:3.5px_transparent]">
              <span>join us</span>
              <StarIcon />
              <span>join us</span>
            </p>
          </div>
        </section>

        {/* TODO: merge svg into blocks & add framer group animation */}
        <section className="text-ch-h5 text-n5 [&>div]:relative [&>div>svg]:absolute">
          <div className="h-[164px]">
            <RectangleIcon className="left-[70px]" />
            <CurlyStarIcon className="left-[204px] top-[13px]" />
            <QuestionMarkIcon className="right-[52px]" />
            <QuestionBoxIcon className="fill-p1 left-[23px] top-[62px]">
              <text x="20" y="60" className="rotate-[-3.36deg] fill-current">
                羨慕別人的酷酷網頁動畫？
              </text>
            </QuestionBoxIcon>
          </div>
          <div className="-mt-4 h-[171px]">
            <LinkedBallIcon className="left-[93px] top-12" />
            <QuestionBoxIcon className="fill-g1 -right-6 top-5" reversed>
              <text x="16" y="68" className="rotate-[-7.26deg] fill-current">
                滿足不了同事的許願？
              </text>
            </QuestionBoxIcon>
            <ExclamationIcon className="left-4 top-24" />
            <TriangleIcon className="right-12 bottom-4" />
          </div>
          <div className="-mt-5 h-[196.5px]">
            <LongRectangleIcon className="left-28 top-0 " />
            <QuestionBoxIcon className="fill-p1 top-[70px] left-4 rotate-[-10.15deg]">
              <text x="22" y="58" className="rotate-[-3.8deg] fill-current">
                動畫技能樹太雜無從下手？
              </text>
            </QuestionBoxIcon>
            <EmailAtIcon className="right-10 bottom-3" />
          </div>
        </section>
      </main>
    </div>
  )
}

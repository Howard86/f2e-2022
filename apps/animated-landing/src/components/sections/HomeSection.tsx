import Image from 'next/image'

import code from '@/../public/assets/icons/code.png'
import dashboard from '@/../public/assets/icons/dashboard.png'

import StarIcon from '../icons/StarIcon'
import ExternalLink from '../ExternalLink'
import PacManGameIcon from '../icons/PacManGameIcon'
import DashArrowIcon from '../icons/DashArrowIcon'
import { SIGN_UP_LINK } from '@/constants/links'

export default function HomeSection() {
  return (
    <section className="section">
      <div className="section relative mx-auto w-full max-w-sm px-4 md:max-w-screen-md md:flex-row md:justify-center">
        <Image
          src={code}
          height={70.5}
          width={70.5}
          alt="code icon"
          className="rotate-[-19.31deg] self-start md:absolute md:left-0 md:top-16"
        />
        <DashArrowIcon className="absolute left-20 bottom-10 hidden md:block" />
        <div className="section justify-center">
          <h1 className="section justify-center text-center md:relative">
            <span className="text-en-h4 font-en uppercase italic tracking-[.2em] [text-shadow:-2.13px_-0.68px_theme(colors.g1),_1.32px_1.26px_theme(colors.p1)] md:absolute md:top-1 md:-right-2">
              4th
            </span>
            <span className="text-en-h1 font-en uppercase [text-shadow:-1.73px_-2.6px_theme(colors.g1),_4.32px_2.59px_theme(colors.p1)] md:mt-5 md:mr-16">
              the F2E
            </span>
            <span className="text-ch-h5 md:text-ch-p3 mt-2 font-bold tracking-[0.8em]">
              互動式網頁設計
            </span>
          </h1>
          <ExternalLink
            href={SIGN_UP_LINK}
            className="text-n6 bg-y1 text-ch-h4 rounded-card hover:btn-yellow focus:btn-yellow mt-12 mb-6 inline-flex grow-0 py-3 px-10 font-bold tracking-wider transition-all xl:px-[72px] xl:py-5"
          >
            立即報名
          </ExternalLink>
        </div>
        <Image
          src={dashboard}
          alt="dashboard icon"
          sizes="105px, (min-width: 650px) 160px"
          className="h-auto w-[105px] self-end md:absolute md:right-20 md:top-20 md:w-[160px]"
        />
        <PacManGameIcon className="absolute -right-4 top-3 hidden md:block" />
      </div>
      {/* TODO: add marquee */}
      <div className="my-14">
        <p className="font-en text-en-h4 bg-text-decoration text-n5 inline-flex items-center gap-6 whitespace-nowrap bg-clip-text uppercase tracking-[.08em] [-webkit-text-stroke:3.5px_transparent]">
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
        </p>
      </div>
    </section>
  )
}

import Image from 'next/image'

import { XMarkIcon } from '@heroicons/react/24/outline'
import leftPalm from '@/../public/assets/icons/left-palm.png'
import rightPalm from '@/../public/assets/icons/right-palm.png'

import CodeStamp from '../icons/CodeStamp'
import IntroductionTitleIcon from '../icons/IntroductionTitleIcon'
import StarStamp from '../icons/StarStamp'
import MarqueeBanner from '../MarqueeBanner'

const IMAGE_SIZES =
  '120px, (min-width: 375px) 208px, (min-width: 650px) 120px, (min-width: 960px) 208px'

export default function SolutionSection() {
  return (
    <section className="bg-n1 text-n6 section overflow-x-hidden font-bold [background-size:40px_40px] [background-image:linear-gradient(to_right,rgb(128,128,128,0.2),transparent_1px),linear-gradient(to_bottom,rgb(128,128,128,0.2),transparent_1px)]">
      <MarqueeBanner />
      <div className="section relative -mt-10 w-full max-w-screen-md py-12 md:flex-row-reverse md:justify-center md:py-20 lg:max-w-screen-lg">
        <CodeStamp className="absolute top-20 right-4 h-auto md:top-12 md:right-24 lg:right-36 lg:w-36" />
        <Image
          alt="left palm"
          src={leftPalm}
          sizes={IMAGE_SIZES}
          className="w-[120px] sm:w-[208px] sm:rotate-45 md:w-[120px] lg:w-[208px]"
        />
        <div className="text-center md:translate-y-7">
          <IntroductionTitleIcon aria-label="互動式網頁設計" className="h-auto lg:w-[530px]" />
          <h2 className="sr-only">互動式網頁設計</h2>
          <p className="text-ch-p4 md:text-ch-p3 lg:text-ch-p1 mt-1 mb-3 inline-flex items-center gap-7 font-bold lg:gap-12">
            <span>前端工程師</span>
            <XMarkIcon className="w-3 stroke-[3] lg:w-6" />
            <span>UI設計師</span>
          </p>
        </div>
        <Image
          alt="right palm"
          src={rightPalm}
          sizes={IMAGE_SIZES}
          className="w-[120px] sm:w-[208px] md:w-[120px] md:rotate-[135deg] lg:w-[208px]"
        />
        <StarStamp className="absolute -bottom-12 left-0 h-auto md:left-4 lg:w-60" />
      </div>
      <MarqueeBanner className="z-10" />
    </section>
  )
}
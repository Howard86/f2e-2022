import Image from 'next/image'
import useResizeObserver from 'use-resize-observer'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import code from '@/../public/assets/icons/code.png'
import dashboard from '@/../public/assets/icons/dashboard.png'

import StarIcon from '../icons/StarIcon'
import { MotionExternalLink } from '../ExternalLink'
import PacManGameIcon from '../icons/PacManGameIcon'
import DashArrowIcon from '../icons/DashArrowIcon'
import { SIGN_UP_LINK } from '@/constants/links'
import {
  AnimationVariant,
  ANIMATIONS,
  SPRING_TRANSITION,
  MARQUEE_TRANSITION,
  HomeSectionAnimation,
} from '@/constants/animations'

// to support consistent slide animation for different screens
const getMarqueeAnimation = (
  elementA: HTMLSpanElement | null,
  elementB: HTMLSpanElement | null
) => {
  if (!elementA || !elementB) return {}

  return { x: [elementA.getBoundingClientRect().left - elementB.getBoundingClientRect().left, 0] }
}

export default function HomeSection() {
  const marqueeAnimation = useAnimation()

  const marqueeContainerRef = useRef<HTMLDivElement>(null)
  const firstTextRef = useRef<HTMLSpanElement>(null)
  const secondTextRef = useRef<HTMLSpanElement>(null)

  const inView = useInView(marqueeContainerRef, { once: false })

  useEffect(() => {
    if (inView) {
      marqueeAnimation.start(getMarqueeAnimation(firstTextRef.current, secondTextRef.current))
    } else {
      marqueeAnimation.stop()
    }
  }, [inView, marqueeAnimation])

  useResizeObserver<HTMLDivElement>({
    ref: marqueeContainerRef,
    onResize: () => {
      marqueeAnimation.start(getMarqueeAnimation(firstTextRef.current, secondTextRef.current))
    },
  })

  return (
    <section className="section min-h-[min(960px,_100vh)] snap-start justify-evenly md:justify-start lg:snap-none">
      <div className="section relative mx-auto w-full max-w-sm px-4 md:max-w-screen-md md:scale-110 md:flex-row md:justify-center md:py-10 lg:scale-150 lg:py-16">
        <motion.div
          initial={AnimationVariant.Initial}
          whileInView={ANIMATIONS}
          variants={HomeSectionAnimation.code}
          className="self-start md:absolute md:left-4 md:top-[88px] lg:top-36 xl:-left-20 xl:top-28"
        >
          <Image
            src={code}
            sizes="70.5px, (min-width: 1440px) 100px"
            alt="code icon"
            className="h-auto w-[70.5px] rotate-[-19.31deg] xl:w-[100px]"
            placeholder="blur"
          />
        </motion.div>
        <DashArrowIcon
          initial={AnimationVariant.Initial}
          whileInView={AnimationVariant.Slide}
          className="absolute left-20 bottom-20 hidden h-auto md:bottom-[72px] md:left-24 md:block lg:bottom-24 xl:left-10 xl:w-40"
        />
        <div className="section justify-center">
          <h1 className="section justify-center text-center md:relative">
            <motion.span
              initial={AnimationVariant.Initial}
              whileInView={AnimationVariant.Slide}
              variants={HomeSectionAnimation['4th']}
              transition={SPRING_TRANSITION}
              className="text-en-h4 font-en xl:text-en-h3 uppercase italic tracking-[.2em] [text-shadow:-2.13px_-0.68px_theme(colors.g1),_1.32px_1.26px_theme(colors.p1)] md:absolute md:top-1 md:right-1 lg:right-6 xl:right-4 xl:-top-2"
            >
              4th
            </motion.span>
            <motion.span
              initial={AnimationVariant.Initial}
              whileInView={AnimationVariant.Slide}
              variants={HomeSectionAnimation.f2e}
              transition={SPRING_TRANSITION}
              className="text-en-h2 lg:text-en-h1 font-en mr-8 uppercase tracking-[.2em] [text-shadow:-1.73px_-2.6px_theme(colors.g1),_4.32px_2.59px_theme(colors.p1)] md:mt-5 md:mr-[72px] lg:mr-[94px] xl:mr-28 xl:scale-125"
            >
              the F2E
            </motion.span>

            <span className="text-ch-h5 md:text-ch-p3 xl:text-ch-h4 mt-2 font-bold tracking-[.8em] md:mt-4">
              互動式網頁設計
            </span>
          </h1>
          <MotionExternalLink
            href={SIGN_UP_LINK}
            initial={AnimationVariant.Initial}
            whileInView={AnimationVariant.Float}
            whileHover={AnimationVariant.ScaleUpAndDown}
            variants={HomeSectionAnimation.signUp}
            className="hover:btn-yellow focus:btn-yellow text-n6 bg-y1 text-ch-h5 rounded-card mt-12 mb-6 inline-flex grow-0 py-2 px-10 font-bold tracking-wider transition-all"
          >
            立即報名
          </MotionExternalLink>
        </div>
        <motion.div
          initial={AnimationVariant.Initial}
          whileInView={ANIMATIONS}
          variants={HomeSectionAnimation.dashboard}
          className="self-end md:absolute md:right-20 md:top-28 lg:top-44 xl:right-2 xl:top-48"
        >
          <Image
            src={dashboard}
            alt="dashboard icon"
            sizes="105px, (min-width: 650px) 160px, (min-width: 1440px) 200px"
            className="h-auto w-[105px] md:w-[160px] xl:w-[200px]"
            placeholder="blur"
          />
        </motion.div>
        <PacManGameIcon
          initial={AnimationVariant.Initial}
          whileInView={AnimationVariant.Slide}
          className="absolute -right-4 top-12 hidden h-auto w-24 md:right-6 md:top-14 md:block lg:top-20 lg:right-2 lg:w-28 xl:-right-20 xl:top-16 xl:w-auto"
        />
      </div>
      <div ref={marqueeContainerRef} className="lg:mt-24 xl:mt-40">
        <motion.p
          animate={marqueeAnimation}
          transition={MARQUEE_TRANSITION}
          className="font-en text-en-h4 lg:text-en-h3 bg-text-decoration text-n5 inline-flex items-center gap-6 whitespace-nowrap bg-clip-text uppercase tracking-[.08em] [-webkit-text-stroke:3.5px_transparent] md:scale-110 lg:scale-150"
        >
          join us
          <StarIcon />
          join us
          <StarIcon />
          <span ref={firstTextRef}>join us</span>
          <StarIcon />
          <span ref={secondTextRef}>join us</span>
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
          <StarIcon />
          join us
        </motion.p>
      </div>
    </section>
  )
}

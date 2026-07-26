import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'
import useResizeObserver from 'use-resize-observer'
import code from '@/../public/assets/icons/code.png'
import dashboard from '@/../public/assets/icons/dashboard.png'
import {
  ANIMATIONS,
  AnimationVariant,
  HomeSectionAnimation,
  MARQUEE_TRANSITION,
  SPRING_TRANSITION,
} from '@/constants/animations'
import { SIGN_UP_LINK } from '@/constants/links'
import { MotionExternalLink } from '../ExternalLink'
import DashArrowIcon from '../icons/DashArrowIcon'
import PacManGameIcon from '../icons/PacManGameIcon'
import StarIcon from '../icons/StarIcon'

// to support consistent slide animation for different screens
const getMarqueeAnimation = (
  elementA: HTMLSpanElement | null,
  elementB: HTMLSpanElement | null
) => {
  if (!(elementA && elementB)) {
    return {}
  }

  return { x: [elementA.getBoundingClientRect().left - elementB.getBoundingClientRect().left, 0] }
}

export default function HomeSection() {
  const marqueeAnimation = useAnimation()

  const marqueeContainerRef = useRef<HTMLDivElement>(null)
  const firstTextRef = useRef<HTMLSpanElement>(null)
  const secondTextRef = useRef<HTMLSpanElement>(null)

  const inView = useInView(marqueeContainerRef, { once: false })
  const { ref: resizeRef } = useResizeObserver<HTMLDivElement>({
    onResize: () => {
      marqueeAnimation.start(getMarqueeAnimation(firstTextRef.current, secondTextRef.current))
    },
  })
  const setMarqueeContainerRef = useCallback(
    (element: HTMLDivElement | null) => {
      marqueeContainerRef.current = element
      resizeRef(element)
    },
    [resizeRef]
  )

  useEffect(() => {
    if (inView) {
      marqueeAnimation.start(getMarqueeAnimation(firstTextRef.current, secondTextRef.current))
    } else {
      marqueeAnimation.stop()
    }
  }, [inView, marqueeAnimation])

  return (
    <section className="section min-h-[min(960px,_100vh)] snap-start justify-evenly md:justify-start lg:snap-none">
      <div className="section relative mx-auto w-full max-w-sm px-4 md:max-w-screen-md md:scale-110 md:flex-row md:justify-center md:py-10 lg:scale-150 lg:py-16">
        <motion.div
          className="self-start md:absolute md:top-[88px] md:left-4 lg:top-36 xl:top-28 xl:-left-20"
          initial={AnimationVariant.Initial}
          variants={HomeSectionAnimation.code}
          whileInView={ANIMATIONS}
        >
          <Image
            alt="code icon"
            className="h-auto w-[70.5px] rotate-[-19.31deg] xl:w-[100px]"
            placeholder="blur"
            sizes="70.5px, (min-width: 1440px) 100px"
            src={code}
          />
        </motion.div>
        <DashArrowIcon
          className="absolute bottom-20 left-20 hidden h-auto md:bottom-[72px] md:left-24 md:block lg:bottom-24 xl:left-10 xl:w-40"
          initial={AnimationVariant.Initial}
          whileInView={AnimationVariant.Slide}
        />
        <div className="section justify-center">
          <h1 className="section justify-center text-center md:relative">
            <motion.span
              className="font-en text-en-h4 uppercase italic tracking-[.2em] [text-shadow:-2.13px_-0.68px_theme(colors.g1),_1.32px_1.26px_theme(colors.p1)] md:absolute md:top-1 md:right-1 lg:right-6 xl:-top-2 xl:right-4 xl:text-en-h3"
              initial={AnimationVariant.Initial}
              transition={SPRING_TRANSITION}
              variants={HomeSectionAnimation['4th']}
              whileInView={AnimationVariant.Slide}
            >
              4th
            </motion.span>
            <motion.span
              className="mr-8 font-en text-en-h2 uppercase tracking-[.2em] [text-shadow:-1.73px_-2.6px_theme(colors.g1),_4.32px_2.59px_theme(colors.p1)] md:mt-5 md:mr-[72px] lg:mr-[94px] lg:text-en-h1 xl:mr-28 xl:scale-125"
              initial={AnimationVariant.Initial}
              transition={SPRING_TRANSITION}
              variants={HomeSectionAnimation.f2e}
              whileInView={AnimationVariant.Slide}
            >
              the F2E
            </motion.span>

            <span className="mt-2 font-bold text-ch-h5 tracking-[.8em] md:mt-4 md:text-ch-p3 xl:text-ch-h4">
              互動式網頁設計
            </span>
          </h1>
          <MotionExternalLink
            className="hover:btn-yellow focus:btn-yellow mt-12 mb-6 inline-flex grow-0 rounded-card bg-y1 px-10 py-2 font-bold text-ch-h5 text-n6 tracking-wider transition-all"
            href={SIGN_UP_LINK}
            initial={AnimationVariant.Initial}
            variants={HomeSectionAnimation.signUp}
            whileHover={AnimationVariant.ScaleUpAndDown}
            whileInView={AnimationVariant.Float}
          >
            立即報名
          </MotionExternalLink>
        </div>
        <motion.div
          className="self-end md:absolute md:top-28 md:right-20 lg:top-44 xl:top-48 xl:right-2"
          initial={AnimationVariant.Initial}
          variants={HomeSectionAnimation.dashboard}
          whileInView={ANIMATIONS}
        >
          <Image
            alt="dashboard icon"
            className="h-auto w-[105px] md:w-[160px] xl:w-[200px]"
            placeholder="blur"
            sizes="105px, (min-width: 650px) 160px, (min-width: 1440px) 200px"
            src={dashboard}
          />
        </motion.div>
        <PacManGameIcon
          className="absolute top-12 -right-4 hidden h-auto w-24 md:top-14 md:right-6 md:block lg:top-20 lg:right-2 lg:w-28 xl:top-16 xl:-right-20 xl:w-auto"
          initial={AnimationVariant.Initial}
          whileInView={AnimationVariant.Slide}
        />
      </div>
      <div className="lg:mt-24 xl:mt-40" ref={setMarqueeContainerRef}>
        <motion.p
          animate={marqueeAnimation}
          className="inline-flex items-center gap-6 whitespace-nowrap bg-text-decoration bg-clip-text font-en text-en-h4 text-n5 uppercase tracking-[.08em] [-webkit-text-stroke:3.5px_transparent] md:scale-110 lg:scale-150 lg:text-en-h3"
          transition={MARQUEE_TRANSITION}
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

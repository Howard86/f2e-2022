import { motion } from 'framer-motion'
import {
  AnimationVariant,
  BOUNCE_CONTAINER_VARIANTS,
  BOUNCE_OUT_VARIANTS,
} from '@/constants/animations'
import CurlyStarIcon from '../icons/CurlyStarIcon'
import EmailAtIcon from '../icons/EmailAtIcon'
import ExclamationIcon from '../icons/ExclamationIcon'
import LinkedBallIcon from '../icons/LinkedBallIcon'
import LongRectangleIcon from '../icons/LongRectangleIcon'
import QuestionBoxIcon from '../icons/QuestionBoxIcon'
import QuestionMarkIcon from '../icons/QuestionMarkIcon'
import RectangleIcon from '../icons/RectangleIcon'
import TriangleIcon from '../icons/TriangleIcon'

// TODO: merge svg into blocks & add framer group animation */
export default function StatementSection() {
  return (
    <motion.section
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Bounce}
      variants={BOUNCE_CONTAINER_VARIANTS}
      className="section text-ch-h5 text-n5 mx-auto min-h-screen w-full max-w-lg justify-center pb-12 lg:scale-125 lg:pt-20 lg:pb-32"
    >
      <motion.div variants={BOUNCE_OUT_VARIANTS} className="svg-container h-[164px]">
        <RectangleIcon className="right-2 md:right-2 md:w-40" />
        <CurlyStarIcon className="left-4 top-2 md:w-10" />
        <QuestionMarkIcon className="left-20 md:top-8 md:left-32 md:w-28" />
        <QuestionBoxIcon
          className="fill-p1 -left-40 top-16 md:top-20 md:-left-64 md:w-96"
          aria-label="羨慕別人的酷酷網頁動畫？"
        >
          <text x="20" y="60" className="rotate-[-3.36deg] fill-current">
            羨慕別人的酷酷網頁動畫？
          </text>
        </QuestionBoxIcon>
        <p className="sr-only">羨慕別人的酷酷網頁動畫？</p>
      </motion.div>
      <motion.div variants={BOUNCE_OUT_VARIANTS} className="svg-container h-[171px]">
        <LinkedBallIcon className="right-20 top-12 md:top-20 md:right-4 md:w-6" />
        <QuestionBoxIcon
          className="fill-g1 -left-16 top-5 md:left-0 md:top-4 md:w-96 md:-rotate-6"
          aria-label="滿足不了同事的許願？"
          reversed
        >
          <text x="16" y="68" className="rotate-[-7.26deg] fill-current">
            滿足不了同事的許願？
          </text>
        </QuestionBoxIcon>
        <ExclamationIcon className="right-20 top-24 md:w-36" />
        <TriangleIcon className="left-24 bottom-4 md:left-52 md:-bottom-4 md:w-14" />
        <p className="sr-only">滿足不了同事的許願？</p>
      </motion.div>
      <motion.div variants={BOUNCE_OUT_VARIANTS} className="svg-container h-[196.5px]">
        <LongRectangleIcon className="-right-16 md:-right-40 md:-top-2 md:w-48 md:rotate-6" />
        <QuestionBoxIcon
          className="fill-p1 top-20 -right-24 rotate-[-10.15deg] md:-right-40 md:w-80 md:-rotate-3"
          aria-label="動畫技能樹太雜無從下手？"
        >
          <text x="22" y="58" className="rotate-[-3.8deg] fill-current">
            動畫技能樹太雜無從下手？
          </text>
        </QuestionBoxIcon>
        <EmailAtIcon className="left-20 bottom-3 md:bottom-16 md:left-44 md:w-28" />
        <p className="sr-only">動畫技能樹太雜無從下手？</p>
      </motion.div>
    </motion.section>
  )
}

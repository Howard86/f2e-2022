import { motion } from 'framer-motion'
import { AnimationVariant, StatementSectionAnimation } from '@/constants/animations'
import CurlyStarIcon from '../icons/CurlyStarIcon'
import EmailAtIcon from '../icons/EmailAtIcon'
import ExclamationIcon from '../icons/ExclamationIcon'
import LinkedBallIcon from '../icons/LinkedBallIcon'
import LongRectangleIcon from '../icons/LongRectangleIcon'
import QuestionBoxIcon from '../icons/QuestionBoxIcon'
import QuestionMarkIcon from '../icons/QuestionMarkIcon'
import RectangleIcon from '../icons/RectangleIcon'
import TriangleIcon from '../icons/TriangleIcon'

export default function StatementSection() {
  return (
    <motion.section
      className="section mx-auto min-h-[min(960px,_100vh)] w-full max-w-lg snap-center justify-center pb-12 text-ch-h5 text-n5 lg:scale-125 lg:pt-20 lg:pb-32"
      initial={AnimationVariant.Initial}
      variants={StatementSectionAnimation.section}
      whileInView={AnimationVariant.Bounce}
    >
      <motion.div className="svg-container h-[164px]" variants={StatementSectionAnimation.item}>
        <p className="sr-only">羨慕別人的酷酷網頁動畫？</p>
        <QuestionBoxIcon
          aria-label="羨慕別人的酷酷網頁動畫？"
          className="top-16 -left-40 fill-p1 md:top-20 md:-left-64 md:w-96"
          variants={StatementSectionAnimation.item}
        >
          <text className="rotate-[-3.36deg] fill-current" x="20" y="60">
            羨慕別人的酷酷網頁動畫？
          </text>
        </QuestionBoxIcon>
        <QuestionMarkIcon
          className="left-20 md:top-8 md:left-32 md:w-28"
          variants={StatementSectionAnimation.item}
        />
        <RectangleIcon
          className="right-2 md:right-2 md:w-40"
          variants={StatementSectionAnimation.item}
        />
        <CurlyStarIcon className="top-2 left-4 md:w-10" variants={StatementSectionAnimation.item} />
      </motion.div>
      <motion.div className="svg-container h-[171px]" variants={StatementSectionAnimation.item}>
        <p className="sr-only">滿足不了同事的許願？</p>
        <QuestionBoxIcon
          aria-label="滿足不了同事的許願？"
          className="top-5 -left-16 fill-g1 md:top-4 md:left-0 md:w-96 md:-rotate-6"
          reversed
          variants={StatementSectionAnimation.item}
        >
          <text className="rotate-[-7.26deg] fill-current" x="16" y="68">
            滿足不了同事的許願？
          </text>
        </QuestionBoxIcon>
        <ExclamationIcon
          className="top-24 right-20 md:w-36"
          variants={StatementSectionAnimation.item}
        />
        <TriangleIcon
          className="bottom-4 left-24 md:-bottom-4 md:left-52 md:w-14"
          variants={StatementSectionAnimation.item}
        />
        <LinkedBallIcon
          className="top-12 right-20 md:top-20 md:right-4 md:w-6"
          variants={StatementSectionAnimation.item}
        />
      </motion.div>
      <motion.div className="svg-container h-[196.5px]" variants={StatementSectionAnimation.item}>
        <p className="sr-only">動畫技能樹太雜無從下手？</p>
        <QuestionBoxIcon
          aria-label="動畫技能樹太雜無從下手？"
          className="top-20 -right-24 rotate-[-10.15deg] fill-p1 md:-right-40 md:w-80 md:-rotate-3"
          variants={StatementSectionAnimation.item}
        >
          <text className="rotate-[-3.8deg] fill-current" x="22" y="58">
            動畫技能樹太雜無從下手？
          </text>
        </QuestionBoxIcon>
        <EmailAtIcon
          className="bottom-3 left-20 md:bottom-16 md:left-44 md:w-28"
          variants={StatementSectionAnimation.item}
        />
        <LongRectangleIcon
          className="-right-16 md:-top-2 md:-right-40 md:w-48 md:rotate-6"
          variants={StatementSectionAnimation.item}
        />
      </motion.div>
    </motion.section>
  )
}

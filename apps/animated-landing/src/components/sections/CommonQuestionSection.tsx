import { motion } from 'framer-motion'
import { AnimationVariant, SLIDE_LEFT_VARIANTS } from '@/constants/animations'
import { SIGN_UP_LINK } from '@/constants/links'
import QuestionTab from '../QuestionTabs'

export default function CommonQuestionSection() {
  return (
    <section className="section min-h-screen py-10">
      <h2 className="text-en-h3 md:text-en-h2 font-en py-6 tracking-widest [text-shadow:theme(boxShadow.white)]">
        Q&A
      </h2>
      <QuestionTab />
      {/* TODO: refactor button */}
      <motion.a
        href={SIGN_UP_LINK}
        target="_blank"
        rel="noopener"
        tabIndex={0}
        role="link"
        className="text-n6 bg-y1 hover:btn-yellow focus:btn-yellow text-ch-h4 rounded-card my-8 mb-6 inline-flex grow-0 py-3 px-10 font-bold tracking-wider transition-all"
        whileHover={AnimationVariant.ScaleUpAndDown}
        initial={AnimationVariant.Initial}
        variants={SLIDE_LEFT_VARIANTS}
      >
        立即報名
      </motion.a>
    </section>
  )
}

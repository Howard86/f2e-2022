import { AnimationVariant, CommonQuestionSectionAnimation } from '@/constants/animations'
import { SIGN_UP_LINK } from '@/constants/links'
import { MotionExternalLink } from '../ExternalLink'
import QuestionTab from '../QuestionTabs'

export default function CommonQuestionSection() {
  return (
    <section className="section min-h-[min(960px,_100vh)] snap-start py-14 md:pb-24">
      <h2 className="py-6 font-en text-en-h3 tracking-widest [text-shadow:theme(boxShadow.white)] md:text-en-h2">
        Q&A
      </h2>
      <QuestionTab />
      <MotionExternalLink
        className="hover:btn-yellow focus:btn-yellow my-8 mb-6 inline-flex grow-0 rounded-card bg-y1 px-10 py-3 font-bold text-ch-h4 text-n6 tracking-wider transition-all"
        href={SIGN_UP_LINK}
        initial={AnimationVariant.Initial}
        variants={CommonQuestionSectionAnimation.button}
        whileHover={AnimationVariant.ScaleUpAndDown}
      >
        立即報名
      </MotionExternalLink>
    </section>
  )
}

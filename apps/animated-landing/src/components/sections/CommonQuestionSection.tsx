import ExternalLink from '../ExternalLink'
import QuestionTab from '../QuestionTabs'

export default function CommonQuestionSection() {
  return (
    <section className="section py-10">
      <h2 className="text-en-h3 md:text-en-h2 font-en py-6 tracking-widest [text-shadow:theme(boxShadow.white)]">
        Q&A
      </h2>
      <QuestionTab />
      {/* TODO: refactor button */}
      <ExternalLink
        href="#"
        className="text-n6 bg-y1 text-ch-h4 rounded-card my-8 mb-6 inline-flex grow-0 py-3 px-10 font-bold tracking-wider"
      >
        立即報名
      </ExternalLink>
    </section>
  )
}

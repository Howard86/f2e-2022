import Header from '@/components/Header'
import HomeSection from '@/components/sections/HomeSection'
import StatementSection from '@/components/sections/StatementSection'
import SolutionSection from '@/components/sections/SolutionSection'
import TaskSection from '@/components/sections/TaskSection'
import SubmissionSection from '@/components/sections/SubmissionSection'
import CompetitionSection from '@/components/sections/CompetitionSection'
import CommonQuestionSection from '@/components/sections/CommonQuestionSection'
import SponsorSection from '@/components/sections/SponsorSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 pt-20">
        <HomeSection />
        <StatementSection />
        <SolutionSection />
        <TaskSection />
        <SubmissionSection />
        <CompetitionSection />
        <CommonQuestionSection />
        <SponsorSection />
      </main>
      <Footer />
    </>
  )
}

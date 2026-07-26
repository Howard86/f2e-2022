import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CommonQuestionSection from '@/components/sections/CommonQuestionSection'
import CompetitionSection from '@/components/sections/CompetitionSection'
import HomeSection from '@/components/sections/HomeSection'
import SolutionSection from '@/components/sections/SolutionSection'
import SponsorSection from '@/components/sections/SponsorSection'
import StatementSection from '@/components/sections/StatementSection'
import SubmissionSection from '@/components/sections/SubmissionSection'
import TaskSection from '@/components/sections/TaskSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col gap-6 pt-20">
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

import Head from 'next/head'

import Header from '@/components/Header'
import HomeSection from '@/components/sections/HomeSection'
import StatementSection from '@/components/sections/StatementSection'
import SolutionSection from '@/components/sections/SolutionSection'
import TaskSection from '@/components/sections/TaskSection'
import SubmissionSection from '@/components/sections/SubmissionSection'
import CompetitionSection from '@/components/sections/CompetitionSection'
import CommonQuestionSection from '@/components/sections/CommonQuestionSection'
import SponsorSection from '@/components/sections/SponsorSection'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>F2E 2022</title>
        <meta name="description" content="4th the F2E 互動式網頁設計，立即報名！" />
      </Head>
      <div className="relative">
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
        <footer className="text-en-p4 px-5 py-8 text-center font-medium">
          Copyright © 2022 HexSchool. All rights reserved.
        </footer>
      </div>
    </>
  )
}

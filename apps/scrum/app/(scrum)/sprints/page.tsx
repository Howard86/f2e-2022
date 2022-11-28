import Image from 'next/image'
import ConversationArticle from 'app/(home)/ConversationArticle'
import { NORMALISED_TABS, ScrumRoute } from '../constants'
import camp from '@/public/backgrounds/camp.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import SprintTab from './SprintTab'

export default function SpringIntroductionPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/sprints']} />
      <main className="relative mt-5 flex-1 pb-6 2xl:pb-36">
        <div className="px-15 flex">
          <DevelopmentTeamIcon head className="shrink-0" />
          <div className="mx-16">
            <ConversationArticle className="items-center py-5 px-7">
              <p>
                等等等等等，你應該還不知道什麼是 Sprint 吧？
                <br />
                讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！
              </p>
            </ConversationArticle>
            <ConversationArticle className="mt-3 items-center py-5 px-7">
              <p>
                Sprint 是一個短衝，如同前面敏捷教練所提到的，一次 Sprint
                週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議
                <b>（Daily Scrum）</b>，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint
                的結束也會包含<b>短衝檢視會議（Sprint Review）</b>、
                <b>短衝自省會議（Sprint Retrospective）</b>。
              </p>
            </ConversationArticle>
          </div>
        </div>
        {/* TODO: add drag and drop */}
        <section className="mt-5 flex min-h-[32rem]">
          <SprintTab tab={NORMALISED_TABS} />
        </section>
        <div className="bg-secondary-green-main h-18 absolute inset-x-0 bottom-0" />
        <Image
          src={camp}
          alt="露營背景"
          placeholder="blur"
          className="absolute inset-x-0 bottom-0 w-full"
        />
      </main>
      <ScrumNav route={ScrumRoute['/sprints']} className="bg-secondary-brown-dark" />
    </>
  )
}

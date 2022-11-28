import Image from 'next/image'
import ConversationArticle from 'app/(home)/ConversationArticle'
import { ScrumRoute } from '../constants'
import rock from '@/public/backgrounds/rock.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import DiagramBackground from './DiagramBackground'
import LongArrowIcon from './LongArrowIcon'
import SprintFlowDragSection from './SprintFlowDragSection'

export default function SpringFlowPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/flows']} />
      <main className="px-15 relative mt-5 w-full flex-1 pb-36">
        <h1 className="sr-only">Spring 流程圖</h1>
        <div className="flex">
          <DevelopmentTeamIcon head className="shrink-0" />
          <div className="mx-16">
            <ConversationArticle className="py-5 px-7">
              <p>
                那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？
                <br />
                請你試著把左下方三個方塊，拖拉至正確的位置上。
              </p>
            </ConversationArticle>
          </div>
        </div>
        <section className="relative -mb-14 mt-14 flex flex-col pt-8 2xl:mt-28 2xl:pt-16">
          <DiagramBackground className="z-10" />
          <div className="text-h3 absolute left-0 top-0 z-10 flex flex-col items-center gap-5 text-center">
            <div className="bg-neutral-white-light/25 border-neutral-white-light border-3 rounded-xl px-5 py-3">
              產品待辦清單
            </div>
            <LongArrowIcon />
            <div className="bg-neutral-white-light/25 border-neutral-white-light border-3 w-full rounded-xl px-5 py-3">
              短衝規劃
            </div>
            <LongArrowIcon />
            <div className="bg-neutral-white-light/25 border-neutral-white-light border-3 rounded-xl px-5 py-3">
              短衝待辦清單
            </div>
          </div>
          <SprintFlowDragSection />
        </section>
        <div className="bg-secondary-brown-light h-18 absolute inset-x-0 bottom-0" />
        <Image
          src={rock}
          alt="岩石背景"
          placeholder="blur"
          className="absolute inset-x-0 bottom-0 w-full"
        />
      </main>
      <ScrumNav route={ScrumRoute['/flows']} className="bg-secondary-brown-dark" />
    </>
  )
}

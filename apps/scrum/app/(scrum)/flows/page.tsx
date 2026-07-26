import ConversationArticle from 'app/(home)/ConversationArticle'
import Image from 'next/image'
import rock from '@/public/backgrounds/rock.png'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import DiagramBackground from './DiagramBackground'
import LongArrowIcon from './LongArrowIcon'
import SprintFlowDragSection from './SprintFlowDragSection'

export default function SpringFlowPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/flows']} />
      <main className="relative mt-5 w-full flex-1 px-15 pb-36">
        <h1 className="sr-only">Spring 流程圖</h1>
        <div className="flex">
          <DevelopmentTeamIcon className="shrink-0" head />
          <div className="mx-16">
            <ConversationArticle className="px-7 py-5">
              <p>
                那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？
                <br />
                請你試著把左下方三個方塊，拖拉至正確的位置上。
              </p>
            </ConversationArticle>
          </div>
        </div>
        <section className="relative mt-14 -mb-14 flex flex-col pt-8 2xl:mt-28 2xl:pt-16">
          <DiagramBackground className="z-10" />
          <div className="absolute top-0 left-0 z-10 flex flex-col items-center gap-5 text-center text-h3">
            <div className="rounded-xl border-3 border-neutral-white-light bg-neutral-white-light/25 px-5 py-3">
              產品待辦清單
            </div>
            <LongArrowIcon />
            <div className="w-full rounded-xl border-3 border-neutral-white-light bg-neutral-white-light/25 px-5 py-3">
              短衝規劃
            </div>
            <LongArrowIcon />
            <div className="rounded-xl border-3 border-neutral-white-light bg-neutral-white-light/25 px-5 py-3">
              短衝待辦清單
            </div>
          </div>
          <SprintFlowDragSection />
        </section>
        <div className="absolute inset-x-0 bottom-0 h-18 bg-secondary-brown-light" />
        <Image
          alt="岩石背景"
          className="absolute inset-x-0 bottom-0 w-full"
          placeholder="blur"
          src={rock}
        />
      </main>
      <ScrumNav className="bg-secondary-brown-dark" route={ScrumRoute['/flows']} />
    </>
  )
}

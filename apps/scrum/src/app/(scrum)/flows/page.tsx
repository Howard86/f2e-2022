import Image from 'next/image'
import { ScrumRoute } from '../constants'
import rock from '@/public/backgrounds/rock.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import ConversationArticle from '@/app/(home)/ConversationArticle'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import DiagramBackground from './DiagramBackground'
import LongArrowIcon from './LongArrowIcon'

export default function SpringFlowPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/flows']} />
      <main className="px-15 relative mx-auto mt-5 max-w-full flex-1 pb-36">
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
        {/* TODO: add drag and drop */}
        <section className="relative -mb-14 mt-28 flex flex-col pt-16">
          <DiagramBackground className="z-10" />
          <div className="text-h3 absolute left-0 top-0 z-10 flex flex-col items-center gap-5 text-center">
            <div className="bg-neutral-white-light/25 border-neutral-white-light rounded-xl border px-5 py-3">
              產品待辦清單
            </div>
            <LongArrowIcon />
            <div className="bg-neutral-white-light/25 border-neutral-white-light w-full rounded-xl border px-5 py-3">
              短衝規劃
            </div>
            <LongArrowIcon />
            <div className="bg-neutral-white-light/25 border-neutral-white-light rounded-xl border px-5 py-3">
              短衝待辦清單
            </div>
          </div>
          <div className="relative z-10 mx-auto">
            <h2 className="text-h1 absolute bottom-52 right-24">Sprint</h2>
            <div className="bg-primary-dark/50 border-5 border-neutral-white-light absolute bottom-[344px] -left-3 h-[118px] w-[296px] rounded-xl border-dashed" />
            <div className="bg-primary-dark/50 border-5 border-neutral-white-light absolute bottom-0 -left-3 h-[118px] w-[296px] rounded-xl border-dashed" />
            <div className="bg-primary-dark/50 border-5 border-neutral-white-light absolute bottom-0 left-[300px] h-[118px] w-[296px] rounded-xl border-dashed" />
          </div>
          <div className="absolute right-0 top-6 z-10 flex flex-col gap-8">
            <div className="text-neutral-black-dark bg-neutral-white-light/75 whitespace-nowrap rounded-xl px-9 py-3 text-center shadow-xl">
              <p className="text-h3">每日站立會議</p>
              <p className="font-bold">Daily Scrum</p>
            </div>
            <div className="text-neutral-black-dark bg-neutral-white-light/75 whitespace-nowrap rounded-xl px-9 py-3 text-center shadow-xl">
              <p className="text-h3">短衝檢視會議</p>
              <p className="font-bold">Sprint Review</p>
            </div>
            <div className="text-neutral-black-dark bg-neutral-white-light/75 whitespace-nowrap rounded-xl px-9 py-3 text-center shadow-xl">
              <p className="text-h3">短衝自省會議</p>
              <p className="font-bold">Sprint Retrospective</p>
            </div>
          </div>
        </section>
        <div className="bg-secondary-brown-light h-18 absolute inset-x-0 bottom-0" />
        <Image src={rock} alt="岩石背景" className="absolute inset-x-0 bottom-0 w-full" />
      </main>
      <ScrumNav route={ScrumRoute['/flows']} className="bg-secondary-brown-dark" />
    </>
  )
}

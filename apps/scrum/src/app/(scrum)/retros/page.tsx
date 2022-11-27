import Image from 'next/image'
import { COULD_BE_BETTER_OPTIONS, DONE_WELL_OPTIONS, ScrumRoute } from '../constants'
import wasteland from '@/public/backgrounds/wasteland.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import ConversationArticle from '@/app/(home)/ConversationArticle'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import RetroRadioGroup from './RetroRadioGroup'

export default function SprintRetroPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/retros']} />
      <main className="px-15 relative mt-5 max-w-full flex-1 pb-36">
        <h1 className="sr-only">Spring 流程圖</h1>
        <div className="flex">
          <DevelopmentTeamIcon head className="shrink-0" />
          <div className="mx-16">
            <ConversationArticle className="py-5 px-7">
              <p>
                哇新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro
                都該做些什麼吧～～
                <br />
                我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並
                <b>記錄在 Confluence 中</b>。
              </p>
            </ConversationArticle>
            <ConversationArticle className="mt-3 py-5 px-7">
              <p>
                重點在於『<b>正面表述</b>』，你也思考看看，哪一些是適合 Retro 的回饋吧～～
              </p>
            </ConversationArticle>
          </div>
        </div>
        <section className="-mb-24 flex gap-8 px-6">
          <RetroRadioGroup options={DONE_WELL_OPTIONS} label="做得好的地方" />
          <RetroRadioGroup options={COULD_BE_BETTER_OPTIONS} label="有哪些可以做得更好？" />
        </section>
        <div className="bg-secondary-brown-light h-18 absolute inset-x-0 bottom-0" />
        <Image
          src={wasteland}
          alt="荒地背景"
          placeholder="blur"
          className="absolute inset-x-0 bottom-0 w-full"
        />
      </main>
      <ScrumNav route={ScrumRoute['/retros']} className="bg-secondary-brown-dark" />
    </>
  )
}

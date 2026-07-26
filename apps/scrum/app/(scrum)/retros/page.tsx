import ConversationArticle from 'app/(home)/ConversationArticle'
import Image from 'next/image'
import wasteland from '@/public/backgrounds/wasteland.png'
import DevelopmentTeamIcon from '../characters/DevelopmentTeamIcon'
import { COULD_BE_BETTER_OPTIONS, DONE_WELL_OPTIONS, ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import RetroRadioGroup from './RetroRadioGroup'

export default function SprintRetroPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/retros']} />
      <main className="relative mt-5 max-w-full flex-1 px-15 pb-6 2xl:pb-12">
        <h1 className="sr-only">Spring 流程圖</h1>
        <div className="flex">
          <DevelopmentTeamIcon className="shrink-0" head />
          <div className="mx-16">
            <ConversationArticle className="px-7 py-5">
              <p>
                哇新來的，你真的很幸運，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro
                都該做些什麼吧～～
                <br />
                我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並
                <b>記錄在 Confluence 中</b>。
              </p>
            </ConversationArticle>
            <ConversationArticle className="mt-3 px-7 py-5">
              <p>
                重點在於『<b>正面表述</b>』，你也思考看看，哪一些是適合 Retro 的回饋吧～～
              </p>
            </ConversationArticle>
          </div>
        </div>
        <section className="flex flex-col gap-8 px-6 md:flex-row">
          <RetroRadioGroup
            correctOption={DONE_WELL_OPTIONS[1]}
            label="做得好的地方"
            options={DONE_WELL_OPTIONS}
          />
          <RetroRadioGroup
            correctOption={COULD_BE_BETTER_OPTIONS[0]}
            label="有哪些可以做得更好？"
            options={COULD_BE_BETTER_OPTIONS}
          />
        </section>
        <div className="absolute inset-x-0 bottom-0 h-18 bg-secondary-brown-light" />
        <Image
          alt="荒地背景"
          className="absolute inset-x-0 bottom-0 w-full"
          placeholder="blur"
          src={wasteland}
        />
      </main>
      <ScrumNav className="bg-secondary-brown-dark" route={ScrumRoute['/retros']} />
    </>
  )
}

import Image from 'next/image'
import { FeatureBacklogEntity, FeatureBacklogTitle, ScrumRoute } from '../constants'
import forest from '@/public/backgrounds/forest.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import WhiteBox from './WhiteBox'
import StoryPointDialog from './StoryPointDialog'

const FEATURES_BACKLOG_ORDER: FeatureBacklogTitle[] = [
  FeatureBacklogTitle['後台職缺管理功能'],
  FeatureBacklogTitle['前台職缺列表'],
  FeatureBacklogTitle['會員系統（登入、註冊、管理）'],
  FeatureBacklogTitle['應徵者的線上履歷編輯器'],
]

export default function StoryPointPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/points']} />
      <main className="relative mt-5 flex-1 pb-36">
        {/* TODO: add drag and drop */}
        <section className="px-15 mt-5 flex h-full gap-12">
          <div className="flex flex-1 flex-col">
            <hgroup className="text-neutral-black-dark mb-12">
              <h2 className="text-h2 inline">產品待辦清單</h2>
              <h3 className="text-h3 inline">Product Backlog</h3>
            </hgroup>
            <ul className="flex flex-1 flex-col justify-center gap-8 text-center">
              {FEATURES_BACKLOG_ORDER.map((title) => {
                const item = FeatureBacklogEntity[title]

                return (
                  <li
                    key={item.title}
                    className="bg-secondary-green-light/85 shadow-brown z-10 flex items-center justify-center gap-6 rounded-xl px-9 py-6"
                  >
                    <div>
                      <p className="text-h3">{item.title}</p>
                      {item.description && <p className="font-bold">{item.description}</p>}
                    </div>
                    <div className="inline-flex shrink-0 grow-0 items-center">
                      <WhiteBox />
                      <span className="text-h3 ml-3">x{item.storyPoint}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-1 flex-col">
            <h1 className="text-h2 text-neutral-black-dark mb-12">開發 A 組的短衝待辦清單</h1>
            <div className="flex flex-1 flex-col justify-center gap-12">
              <div className="h-23 border-3 border-neutral-white-light z-10 rounded-xl border-dashed" />
              <div className="h-23 border-3 border-neutral-white-light z-10 rounded-xl border-dashed" />
              <div className="h-23 border-3 border-neutral-white-light z-10 rounded-xl border-dashed" />
              <div className="h-23 border-3 border-neutral-white-light z-10 rounded-xl border-dashed" />
            </div>
          </div>
        </section>
        <Image
          src={forest}
          alt="森林背景"
          placeholder="blur"
          className="absolute inset-x-0 bottom-0 w-full"
        />
      </main>
      <ScrumNav route={ScrumRoute['/points']} className="bg-secondary-brown-dark" />
      <StoryPointDialog />
    </>
  )
}

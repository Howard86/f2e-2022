import clsx from 'clsx'
import Image from 'next/image'
import ConversationArticle from '@/app/ConversationArticle'
import ProductOwnerIcon from '../characters/ProductOwnerIcon'
import beach from '@/public/backgrounds/beach.png'
import { FeatureBacklogEntity, FeatureBacklogTitle, ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import BacklogBackground from './BacklogBackground'
import JiraIcon from './JiraIcon'

const FEATURES_BACKLOG_ORDER: FeatureBacklogTitle[] = [
  FeatureBacklogTitle['會員系統（登入、註冊、管理）'],
  FeatureBacklogTitle.應徵者的線上履歷編輯器,
  FeatureBacklogTitle.前台職缺列表,
  FeatureBacklogTitle.後台職缺管理功能,
]

export default function FeaturePage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/features']} />
      <main className="mt-5 flex-1">
        <div className="px-15 flex items-center">
          <ProductOwnerIcon head />
          <ConversationArticle className="ml-16 items-center py-5 px-6">
            <p>
              請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
              <br />
              我們公司也推薦使用 Jira 來做任務的管理呢！
            </p>
            <JiraIcon />
          </ConversationArticle>
        </div>
        {/* TODO: add drag and drop */}
        <section className="px-15 mt-5 -mb-24 flex items-center text-center">
          <ul className="mr-20 flex flex-1 flex-col items-start gap-8">
            {FEATURES_BACKLOG_ORDER.map((title, index) => {
              const item = FeatureBacklogEntity[title]

              return (
                <li
                  key={item.title}
                  className={clsx(
                    'bg-neutral-white-light text-secondary-brown-main shadow-neutral-black-dark z-10 rounded-xl px-9 py-6 shadow-lg',
                    index % 2 && 'ml-24'
                  )}
                >
                  <p className="text-h3">{item.title}</p>
                  {item.description && <p className="font-bold">{item.description}</p>}
                </li>
              )
            })}
          </ul>
          <div className="relative flex-1">
            <BacklogBackground />
            <div className="absolute inset-0 pt-3">
              <hgroup className="text-neutral-black-dark">
                <h1 className="text-h2 inline">產品待辦清單</h1>
                <h2 className="text-h3 inline">Product Backlog</h2>
              </hgroup>
              <div className="pl-13 flex gap-2 pr-12">
                <div className="flex w-full flex-col gap-9">
                  <span className="-mb-3 mr-1 self-end">優先度</span>
                  <div className="h-21 border-3 border-neutral-white-light rounded-xl border-dashed" />
                  <div className="h-21 border-3 border-neutral-white-light rounded-xl border-dashed" />
                  <div className="h-21 border-3 border-neutral-white-light rounded-xl border-dashed" />
                  <div className="h-21 border-3 border-neutral-white-light rounded-xl border-dashed" />
                </div>
                <div>
                  高
                  <span className="bg-neutral-white-light border-neutral-white-light mx-auto my-1 block h-full w-px rounded-sm border" />
                  低
                </div>
              </div>
            </div>
          </div>
        </section>
        <Image src={beach} alt="海灘背景" className="h-auto w-full" />
      </main>
      <ScrumNav route={ScrumRoute['/features']} className="bg-secondary-brown-dark" />
    </>
  )
}

import ConversationArticle from 'app/(home)/ConversationArticle'
import Image from 'next/image'
import beach from '@/public/backgrounds/beach.png'
import ProductOwnerIcon from '../characters/ProductOwnerIcon'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import BacklogDragSection from './BacklogDragSection'
import FeatureDialog from './FeatureDialog'
import JiraIcon from './JiraIcon'

export default function FeaturePage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/features']} />
      <main className="mt-5 flex-1">
        <div className="flex items-center px-15">
          <ProductOwnerIcon head />
          <ConversationArticle className="ml-16 items-center px-6 py-5">
            <p>
              請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
              <br />
              我們公司也推薦使用 Jira 來做任務的管理呢！
            </p>
            <JiraIcon />
          </ConversationArticle>
        </div>
        <BacklogDragSection />
        <Image alt="海灘背景" className="-mb-1 h-auto w-full" placeholder="blur" src={beach} />
      </main>
      <ScrumNav className="bg-secondary-brown-dark" route={ScrumRoute['/features']} />
      <FeatureDialog />
    </>
  )
}

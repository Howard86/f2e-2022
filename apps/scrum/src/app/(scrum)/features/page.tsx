import Image from 'next/image'
import ConversationArticle from '@/app/(home)/ConversationArticle'
import ProductOwnerIcon from '../characters/ProductOwnerIcon'
import beach from '@/public/backgrounds/beach.png'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import JiraIcon from './JiraIcon'
import FeatureDialog from './FeatureDialog'
import BacklogDragSection from './BacklogDragSection'

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
        <BacklogDragSection />
        <Image src={beach} placeholder="blur" alt="海灘背景" className="-mb-1 h-auto w-full" />
      </main>
      <ScrumNav route={ScrumRoute['/features']} className="bg-secondary-brown-dark" />
      <FeatureDialog />
    </>
  )
}

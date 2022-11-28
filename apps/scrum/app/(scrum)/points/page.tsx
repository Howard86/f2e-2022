import Image from 'next/image'
import { ScrumRoute } from '../constants'
import forest from '@/public/backgrounds/forest.png'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import StoryPointDialog from './StoryPointDialog'
import StoryPointSection from './StroyPointSection'

export default function StoryPointPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/points']} />
      <main className="relative mt-5 flex-1 pb-6 2xl:pb-36">
        <StoryPointSection />
        <Image
          src={forest}
          alt="森林背景"
          placeholder="blur"
          className="absolute inset-x-0 bottom-0 h-auto w-full"
        />
      </main>
      <ScrumNav route={ScrumRoute['/points']} className="bg-secondary-brown-dark" />
      <StoryPointDialog />
    </>
  )
}

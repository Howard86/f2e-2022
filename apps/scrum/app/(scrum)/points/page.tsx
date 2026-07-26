import Image from 'next/image'
import forest from '@/public/backgrounds/forest.png'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'
import StoryPointDialog from './StoryPointDialog'
import StoryPointSection from './StoryPointSection'

export default function StoryPointPage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/points']} />
      <main className="relative mt-5 flex-1 pb-6 2xl:pb-36">
        <StoryPointSection />
        <Image
          alt="森林背景"
          className="absolute inset-x-0 bottom-0 h-auto w-full"
          placeholder="blur"
          src={forest}
        />
      </main>
      <ScrumNav className="bg-secondary-brown-dark" route={ScrumRoute['/points']} />
      <StoryPointDialog />
    </>
  )
}

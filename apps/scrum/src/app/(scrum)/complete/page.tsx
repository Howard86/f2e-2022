import Image from 'next/image'
import ScrumHeader from '../ScrumHeader'
import { ScrumRoute } from '../constants'
import cloud from '@/public/backgrounds/cloud.png'
import group from '@/public/backgrounds/group.png'

const DESIGNER_LINK =
  'https://www.vecteezy.com/vector-art/7928613-isometric-student-character-collection'

export default function CompletePage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/complete']} />
      <main className="text-neutral-black-dark relative flex flex-1 flex-col text-center">
        <Image
          src={cloud}
          alt="雲"
          placeholder="blur"
          className="absolute inset-x-0 top-0 w-full"
        />
        <div className="mt-18 relative z-10 mb-9 flex-1">
          <h1 className="text-[7rem] font-bold tracking-wide">Congratulations!</h1>
          <p className="text-h3">
            恭喜你完成 Scrum 新手村！
            <br />
            相信在未來的道路上 Scrum 會成為你最好的夥伴！
          </p>
        </div>
        <div className="mx-20">
          <Image src={group} alt="人群" placeholder="blur" className="w-full" />
        </div>
      </main>
      <footer className="bg-secondary-brown-main text-notice py-3 text-center font-bold">
        Design by 邱仲德 / Character attribute by{' '}
        <a href={DESIGNER_LINK} target="_blank" rel="noreferrer">
          Vecteezy
        </a>
      </footer>
    </>
  )
}

import Image from 'next/image'
import cloud from '@/public/backgrounds/cloud.png'
import group from '@/public/backgrounds/group.png'
import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'

const DESIGNER_LINK =
  'https://www.vecteezy.com/vector-art/7928613-isometric-student-character-collection'

export default function CompletePage() {
  return (
    <>
      <ScrumHeader route={ScrumRoute['/complete']} />
      <main className="relative flex flex-1 flex-col text-center text-neutral-black-dark">
        <Image
          alt="雲"
          className="absolute inset-x-0 top-0 w-full"
          placeholder="blur"
          src={cloud}
        />
        <div className="relative z-10 mt-6 mb-9 flex-1 2xl:mt-18">
          <h1 className="font-bold text-[7rem] tracking-wide">Congratulations!</h1>
          <p className="text-h3">
            恭喜你完成 Scrum 新手村！
            <br />
            相信在未來的道路上 Scrum 會成為你最好的夥伴！
          </p>
        </div>
        <div className="mx-20">
          <Image alt="人群" className="w-full" placeholder="blur" src={group} />
        </div>
      </main>
      <footer className="bg-secondary-brown-main py-3 text-center font-bold text-notice">
        Design by 邱仲德 / Character attribute by{' '}
        <a href={DESIGNER_LINK} rel="noreferrer" target="_blank">
          Vecteezy
        </a>
      </footer>
    </>
  )
}

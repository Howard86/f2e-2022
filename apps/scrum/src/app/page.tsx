import Image from 'next/image'

import fore from '../public/backgrounds/fore.png'
import upper from '../public/backgrounds/upper.png'
import back from '../public/backgrounds/back.png'
import lower from '../public/backgrounds/lower.png'
import tica from '../public/icons/tica.png'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <h1 className="sr-only">Scrum 新手村</h1>
      <Image src={upper} alt="middle layer" className="object-cover" />
      <Image src={fore} alt="foreground" className="absolute inset-0 object-cover" />
      <Image src={back} alt="background" className="absolute inset-0 object-cover" />
      <Image src={lower} alt="middle layer" className="object-cover" />
      <div className="absolute top-[55vh] right-32 text-center">
        <p className="text-neutral-white-light/75 text-h1 mb-6">開始探索</p>
        {/* TODO: add interaction */}
        <button type="button" className="inline-flex items-center justify-center">
          <ArrowDownIcon className="opacity-75" />
        </button>
      </div>
      <div className="absolute inset-x-4 bottom-4">
        <div className="border-5 border-secondary-brown-dark text-neutral-black-dark bg-neutral-white-light mx-auto flex w-full flex-col rounded-xl px-9 py-8 leading-loose md:max-w-screen-sm">
          <p>
            歡迎來到 Scrum 新手村～我是鈦坦吉祥物 Tica！
            <br />
            首先恭喜你加入 TT 資訊小組！
            <br />
            在正式加入專案開發之前，需要請你先了解
            <br />
            <b>Scrum 的流程與精神！</b>
            <br />
            接受挑戰任務，成為 Scrum 大師吧～
          </p>
          <button
            type="button"
            // TODO: update hover colour, shadow & position
            className="text-h4 bg-primary-main hover:bg-primary-dark/75 ml-auto rounded-xl px-12 py-4 drop-shadow-lg"
          >
            接受挑戰
          </button>
        </div>
        <Image alt="tica mascot" src={tica} className="mr-15 mb-17 ml-auto" />
      </div>
    </main>
  )
}

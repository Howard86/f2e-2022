import Image from 'next/image'

import Link from 'next/link'
import fore from '../../public/backgrounds/fore.png'
import upper from '../../public/backgrounds/upper.png'
import back from '../../public/backgrounds/back.png'
import tica from '../../public/icons/tica.png'
import ConversationArticle from './ConversationArticle'
import ScrollButton from './ScrollButton'
import BubbleBackground from './BubbleBackground'

export default function Home() {
  return (
    <main className="relative">
      <h1 className="sr-only">Scrum 新手村</h1>
      <Image
        src={upper}
        alt="Scrum 新手村"
        placeholder="blur"
        className="min-h-screen w-full object-cover"
      />
      <div className="from-primary-dark to-primary-main relative -mt-1 flex min-h-screen flex-col justify-center bg-gradient-to-b">
        <BubbleBackground className="absolute left-0 bottom-0 h-auto w-[85%]" />
        <ConversationArticle className="relative z-10 mx-auto mb-20 w-full flex-col px-9 py-8 leading-loose md:max-w-screen-sm">
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
          <Link
            href="/characters"
            className="text-h4 bg-primary-main shadow-button active:shadow-button-inset relative ml-auto mt-2 overflow-hidden rounded-xl px-12 py-4"
          >
            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10" />
            接受挑戰
          </Link>
          <Image alt="tica 吉祥物" src={tica} className="absolute -right-80 -bottom-48" />
        </ConversationArticle>
      </div>
      <Image
        src={fore}
        alt="島嶼"
        placeholder="blur"
        className="absolute inset-0 w-full object-cover"
      />
      <Image
        src={back}
        alt="大島嶼"
        placeholder="blur"
        className="absolute inset-0 w-full object-cover"
      />
      <div className="absolute top-[55vh] right-[10vw]">
        <ScrollButton />
      </div>
    </main>
  )
}

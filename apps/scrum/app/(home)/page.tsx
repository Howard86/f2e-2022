import Image from 'next/image'

import Link from 'next/link'
import back from '@/public/backgrounds/back.png'
import fore from '@/public/backgrounds/fore.png'
import upper from '@/public/backgrounds/upper.png'
import tica from '@/public/icons/tica.png'
import BubbleBackground from './BubbleBackground'
import ConversationArticle from './ConversationArticle'
import ScrollButton from './ScrollButton'

export default function Home() {
  return (
    <main className="relative">
      <h1 className="sr-only">Scrum 新手村</h1>
      <Image
        alt="Scrum 新手村"
        className="min-h-screen w-full object-cover"
        placeholder="blur"
        src={upper}
      />
      <div className="relative -mt-1 flex min-h-screen flex-col justify-center bg-gradient-to-b from-primary-dark to-primary-main">
        <BubbleBackground className="absolute bottom-0 left-0 h-auto w-[85%]" />
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
            className="relative mt-2 ml-auto overflow-hidden rounded-xl bg-primary-main px-12 py-4 text-h4 shadow-button active:shadow-button-inset"
            href="/characters"
          >
            <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10" />
            接受挑戰
          </Link>
          <Image
            alt="tica 吉祥物"
            className="absolute right-0 bottom-0 translate-x-full translate-y-2/3"
            placeholder="blur"
            src={tica}
          />
        </ConversationArticle>
      </div>
      <Image
        alt="島嶼"
        className="absolute inset-0 w-full object-cover"
        placeholder="blur"
        src={fore}
      />
      <Image
        alt="大島嶼"
        className="absolute inset-0 w-full object-cover"
        placeholder="blur"
        src={back}
      />
      <div className="absolute top-[55vh] right-[10vw]">
        <ScrollButton />
      </div>
    </main>
  )
}

import { motion } from 'framer-motion'
import dashboard from '@/../public/assets/icons/dashboard.png'
import refresh from '@/../public/assets/icons/refresh.png'
import draw from '@/../public/assets/icons/draw.png'

import ThunderIcon from '../icons/ThunderIcon'
import TaskCard from '../TaskCard'
import {
  AnimationVariant,
  SLIDE_DOWN_VARIANTS,
  FADE_IN_ROTATE_VARIANTS,
  SCALE_IN_TRANSITIONS,
} from '@/constants/animations'
import useMediaQueryOnce from '@/hooks/useMediaQueryOnce'
import MobileTaskCard, { TaskCardProps } from '../MobileTaskCard'

const TASKS: TaskCardProps[] = [
  {
    tag: '板塊設計',
    title: 'The F2E 活動網站設計',
    description: '視覺滾動',
    src: dashboard,
    size: 128,
    href: 'https://2022.thef2e.com/news/week1',
    footer: 'week 1',
  },
  {
    tag: '凱鈿行動科技',
    title: '今晚，我想來點點簽',
    description: 'Canvas',
    src: draw,
    size: 120,
    href: 'https://2022.thef2e.com/news/week2',
    footer: 'week 2',
  },
  {
    tag: '鈦坦科技',
    title: 'Scrum 新手村',
    description: 'JS Draggable',
    src: refresh,
    size: 106,
    href: 'https://2022.thef2e.com/news/week3',
    footer: 'week 3',
  },
]

export default function TaskSection() {
  const { ready, matches } = useMediaQueryOnce('(min-width: 980px)')

  return (
    <motion.section
      id="task"
      className="section pb-20 text-center"
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Slide}
    >
      <motion.div
        variants={SLIDE_DOWN_VARIANTS}
        transition={SCALE_IN_TRANSITIONS}
        className="relative w-0"
      >
        <ThunderIcon className="absolute left-28 top-6 md:left-60" />
        <ThunderIcon className="absolute left-36 top-14 w-7 rotate-[25deg] md:left-[260px]" />
      </motion.div>
      <motion.h2
        variants={SLIDE_DOWN_VARIANTS}
        className="text-ch-h3 text-g1 shadow-green border-g1 mt-20 inline-flex flex-col rounded-full border-4 py-5 px-10 font-bold [text-shadow:theme(boxShadow.green)] md:flex-row md:gap-2"
      >
        <span>年度最強合作</span>
        <span>三大主題來襲</span>
      </motion.h2>
      <motion.p variants={FADE_IN_ROTATE_VARIANTS} className="text-ch-h5 my-10">
        <span className="block">各路廠商強強聯手</span>
        <span className="block md:inline">共同設計出接地氣的</span>
        網頁互動挑戰關卡
      </motion.p>
      {ready && (
        <motion.div
          variants={FADE_IN_ROTATE_VARIANTS}
          className="mx-auto mt-5 flex flex-col gap-10 px-9 lg:flex-row"
        >
          {TASKS.map((card) =>
            matches ? (
              <TaskCard key={card.href} {...card} />
            ) : (
              <MobileTaskCard key={card.href} {...card} />
            )
          )}
        </motion.div>
      )}
    </motion.section>
  )
}

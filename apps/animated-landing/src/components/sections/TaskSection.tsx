import { motion } from 'framer-motion'
import dashboard from '@/../public/assets/icons/dashboard.png'
import draw from '@/../public/assets/icons/draw.png'
import refresh from '@/../public/assets/icons/refresh.png'
import { AnimationVariant, EASE_TRANSITIONS, TaskSectionAnimation } from '@/constants/animations'
import useMediaQueryOnce from '@/hooks/useMediaQueryOnce'
import MobileTaskCard, { type TaskCardProps } from '../cards/MobileTaskCard'
import TaskCard from '../cards/TaskCard'
import ThunderIcon from '../icons/ThunderIcon'

const TASKS: TaskCardProps[] = [
  {
    description: '視覺滾動',
    footer: 'week 1',
    href: 'https://2022.thef2e.com/news/week1',
    size: 128,
    src: dashboard,
    tag: '板塊設計',
    title: 'The F2E 活動網站設計',
  },
  {
    description: 'Canvas',
    footer: 'week 2',
    href: 'https://2022.thef2e.com/news/week2',
    size: 120,
    src: draw,
    tag: '凱鈿行動科技',
    title: '今晚，我想來點點簽',
  },
  {
    description: 'JS Draggable',
    footer: 'week 3',
    href: 'https://2022.thef2e.com/news/week3',
    size: 106,
    src: refresh,
    tag: '鈦坦科技',
    title: 'Scrum 新手村',
  },
]

export default function TaskSection() {
  const { ready, matches } = useMediaQueryOnce('(min-width: 980px)')

  return (
    <motion.section
      className="section snap-start py-14 text-center lg:snap-center lg:pb-28"
      id="task"
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Slide}
    >
      <motion.div
        className="relative w-0"
        transition={EASE_TRANSITIONS}
        variants={TaskSectionAnimation.iconContainer}
      >
        <ThunderIcon className="absolute top-6 left-28 md:left-60" />
        <ThunderIcon
          className="absolute top-14 left-36 w-7 rotate-[25deg] md:left-[260px]"
          custom={0.24}
        />
      </motion.div>
      <motion.h2
        className="mt-20 inline-flex flex-col rounded-full border-4 border-g1 px-10 py-5 font-bold text-ch-h3 text-g1 shadow-green [text-shadow:theme(boxShadow.green)] md:flex-row md:gap-2"
        variants={TaskSectionAnimation.title}
      >
        <span>年度最強合作</span>
        <span>三大主題來襲</span>
      </motion.h2>
      <motion.p className="my-10 text-ch-h5" variants={TaskSectionAnimation.description}>
        <span className="block">各路廠商強強聯手</span>
        <span className="block md:inline">共同設計出接地氣的</span>
        網頁互動挑戰關卡
      </motion.p>
      {ready ? (
        <motion.div className="mx-auto mt-5 flex flex-col gap-10 px-9 lg:flex-row">
          {TASKS.map((card, index) =>
            matches ? (
              <TaskCard
                custom={240 - index * 40}
                key={card.href}
                variants={TaskSectionAnimation.card}
                {...card}
              />
            ) : (
              <MobileTaskCard key={card.href} variants={TaskSectionAnimation.card} {...card} />
            )
          )}
        </motion.div>
      ) : null}
    </motion.section>
  )
}

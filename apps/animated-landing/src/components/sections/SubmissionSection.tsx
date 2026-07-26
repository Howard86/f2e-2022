import { motion } from 'framer-motion'
import clock from '@/../public/assets/icons/clock.png'
import folder from '@/../public/assets/icons/folder.png'
import pen from '@/../public/assets/icons/pen.png'
import play from '@/../public/assets/icons/play.png'
import {
  AnimationVariant,
  EASE_STAGER_TRANSITIONS,
  SubmissionSectionAnimation,
} from '@/constants/animations'
import SubmissionCard from '../cards/SubmissionCard'
import DotIcon from '../icons/DotIcon'
import DownIcon from '../icons/DownIcon'
import PacManIcon from '../icons/PacManIcon'

export default function SubmissionSection() {
  return (
    <motion.section
      className="relative flex min-h-[min(960px,_100vh)] snap-start flex-col bg-n4 py-10 text-center"
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Slide}
    >
      <motion.div
        className="flex items-center justify-center gap-3 whitespace-nowrap px-8 py-9 md:pt-14 md:pb-20"
        transition={EASE_STAGER_TRANSITIONS}
        variants={SubmissionSectionAnimation.title}
      >
        <PacManIcon className="-mr-2" />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <h2 className="font-bold text-ch-h3 [text-shadow:theme(boxShadow.white)] md:mx-6 md:text-ch-h2 xl:text-ch-h1">
          活動說明
        </h2>
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon className="ml-2 h-[11px] w-[11px] bg-p1 shadow-purple" />
      </motion.div>
      <motion.div
        className="relative mx-auto grid grid-cols-1 items-center gap-1 px-4 pb-5 md:gap-8 xl:grid-cols-2 xl:gap-36"
        transition={EASE_STAGER_TRANSITIONS}
        variants={SubmissionSectionAnimation.container}
      >
        <SubmissionCard src={pen} title="開放報名">
          <p>
            <span className="text-g1">10/13</span> (四) 早上 11:00
          </p>
          <span className="-my-2 h-3 w-0.5 self-center bg-n1" />
          <p>
            <span className="text-g1">10/30</span> (日) 晚上 23:59
          </p>
          <p>截止前可修改報名組別</p>
        </SubmissionCard>
        <DownIcon className="mx-auto xl:absolute xl:top-32 xl:left-1/2 xl:-translate-x-1/2 xl:-rotate-90" />
        <SubmissionCard reversed src={clock} title="各組別開賽">
          <p>
            <span className="text-g1">10/31</span> UI組、團體組開賽
          </p>
          <p>
            <span className="text-g1">11/07</span> 前端組開賽
          </p>
          <p>
            前端工程師可採用
            <br />
            UI 設計師的設計稿產出完整作品
          </p>
        </SubmissionCard>
        <DownIcon className="mx-auto xl:absolute xl:right-52 xl:-translate-x-1/2" />
        <SubmissionCard className="xl:order-last" src={folder} title="登錄作品">
          <p>
            <span className="text-g1">10/31</span> (一) 中午 12:00
          </p>
          <span className="-my-2 h-3 w-0.5 self-center bg-n1" />
          <p>
            <span className="text-g1">11/07</span> (一) 中午 12:00
          </p>
          <p>依賽程登錄作品</p>
        </SubmissionCard>
        <DownIcon className="mx-auto xl:absolute xl:bottom-28 xl:left-1/2 xl:-translate-x-1/2 xl:rotate-90" />
        <SubmissionCard reversed src={play} title="線上直播">
          <p>
            <span className="text-g1">11/03 - 11/24</span> 每週四
          </p>
        </SubmissionCard>
      </motion.div>
    </motion.section>
  )
}

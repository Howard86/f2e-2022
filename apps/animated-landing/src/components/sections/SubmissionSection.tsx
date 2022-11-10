import clock from '@/../public/assets/icons/clock.png'
import folder from '@/../public/assets/icons/folder.png'
import play from '@/../public/assets/icons/play.png'
import pen from '@/../public/assets/icons/pen.png'

import DotIcon from '../icons/DotIcon'
import DownIcon from '../icons/DownIcon'
import PacManIcon from '../icons/PacManIcon'
import SubmissionCard from '../SubmissionCard'

export default function SubmissionSection() {
  return (
    <section className="bg-n4 relative flex flex-col py-10 text-center">
      <div className="flex items-center justify-center gap-3 whitespace-nowrap py-9 px-8 md:pb-20 md:pt-14">
        <PacManIcon className="-mr-2" />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <h2 className="text-ch-h3 md:text-ch-h2 xl:text-ch-h1 font-bold [text-shadow:theme(boxShadow.white)] md:mx-6">
          活動說明
        </h2>
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon className="bg-p1 shadow-purple ml-2 h-[11px] w-[11px]" />
      </div>
      <div className="relative mx-auto grid grid-cols-1 items-center gap-1 px-4 pb-5 md:gap-8 xl:grid-cols-2 xl:gap-36">
        <SubmissionCard src={pen} title="開放報名">
          <p>
            <span className="text-g1">10/13</span> (四) 早上 11:00
          </p>
          <span className="bg-n1 -my-2 h-3 w-0.5 self-center" />
          <p>
            <span className="text-g1">10/30</span> (日) 晚上 23:59
          </p>
          <p>截止前可修改報名組別</p>
        </SubmissionCard>
        <DownIcon className="mx-auto xl:absolute xl:top-32 xl:left-1/2 xl:-translate-x-1/2 xl:-rotate-90" />
        <SubmissionCard src={clock} title="各組別開賽" reversed>
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
        <SubmissionCard src={folder} title="登錄作品" className="xl:order-last">
          <p>
            <span className="text-g1">10/31</span> (一) 中午 12:00
          </p>
          <span className="bg-n1 -my-2 h-3 w-0.5 self-center" />
          <p>
            <span className="text-g1">11/07</span> (一) 中午 12:00
          </p>
          <p>依賽程登錄作品</p>
        </SubmissionCard>
        <DownIcon className="mx-auto xl:absolute  xl:bottom-28 xl:left-1/2 xl:-translate-x-1/2 xl:rotate-90" />
        <SubmissionCard src={play} title="線上直播" reversed>
          <p>
            <span className="text-g1">11/03 - 11/24</span> 每週四
          </p>
        </SubmissionCard>
      </div>
    </section>
  )
}

import { ReactNode } from 'react'
import ConfluenceIcon from './sprints/ConfluenceIcon'

export enum ScrumRoute {
  '/characters',
  '/features',
  '/points',
  '/sprints',
  '/flows',
  '/retros',
}

export const SCRUM_ROUTES = Object.keys(ScrumRoute).filter((route) =>
  route.startsWith('/')
) as (keyof typeof ScrumRoute)[]

export const enum FeatureBacklogTitle {
  '會員系統（登入、註冊、管理）',
  '應徵者的線上履歷編輯器',
  '前台職缺列表',
  '後台職缺管理功能',
}

type FeatureBacklog = {
  title: string
  description?: string
  storyPoint: number
}

export const FeatureBacklogEntity: Record<FeatureBacklogTitle, FeatureBacklog> = {
  [FeatureBacklogTitle['會員系統（登入、註冊、管理）']]: {
    title: '會員系統（登入、註冊、管理）',
    storyPoint: 8,
  },
  [FeatureBacklogTitle['應徵者的線上履歷編輯器']]: {
    title: '應徵者的線上履歷編輯器',
    storyPoint: 13,
  },
  [FeatureBacklogTitle['前台職缺列表']]: {
    title: '前台職缺列表',
    description: '（缺詳細內容、點選可發送應徵意願）',
    storyPoint: 5,
  },
  [FeatureBacklogTitle['後台職缺管理功能']]: {
    title: '後台職缺管理功能',
    description: '（資訊上架、下架、顯示應徵者資料）',
    storyPoint: 5,
  },
}
type SprintTabOption = {
  id: number
  title: string
  subheader: string
  children: ReactNode
}

type Normalised<T extends object, K extends keyof T> = T[K] extends string | number
  ? {
      ids: T[K][]
      entities: Record<T[K], Omit<T, K>>
    }
  : never

export type NormalisedTab = Normalised<SprintTabOption, 'id'>

export const NORMALISED_TABS: NormalisedTab = {
  ids: [0, 1, 2],
  entities: {
    0: {
      title: '每日站立會議',
      subheader: 'Daily Scrum',
      children: (
        <>
          <p>每天都要進行的會議，以 15 分鐘為限制：</p>
          <ul className="ml-12 list-disc">
            <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度</li>
            <li>今天我會如何準備來幫助團隊達到短衝目標</li>
            <li>過程中有遇到什麼問題、難題</li>
          </ul>
          <p>透過團隊分享，追蹤大家的工作狀況。</p>
        </>
      ),
    },
    1: {
      title: '短衝檢視會議',
      subheader: 'Sprint Review',
      children: (
        <>
          <p>
            向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。
          </p>
          <p>
            在短衝檢視會議過程中，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。
          </p>
        </>
      ),
    },
    2: {
      title: '短衝自省會議',
      subheader: 'Sprint Retrospective',
      children: (
        <>
          <p>團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方及可以改進的地方。</p>
          <p>檢討如何維持已有的成功經驗、優化工作流程，讓團隊運作愈來愈進步。</p>
          <p>
            推薦工具：
            <ConfluenceIcon className="ml-8 inline" />
          </p>
        </>
      ),
    },
  },
}

export const DONE_WELL_OPTIONS = [
  '這次我幫了很多人救火耶。',
  '大家在開發上都會互相幫助，讓任務準時在時間內完成。',
]

export const COULD_BE_BETTER_OPTIONS = [
  '可以記錄這次的開發時間，讓預估團隊點數可以更精準。',
  '開發時間預估不準確，請後端下次改進，避免 delay 到我。',
]

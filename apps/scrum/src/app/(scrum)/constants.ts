export enum ScrumRoute {
  '/characters',
  '/features',
  '/points',
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

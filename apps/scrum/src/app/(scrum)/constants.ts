export enum ScrumRoute {
  '/characters',
  '/features',
}

export const SCRUM_ROUTES = Object.keys(ScrumRoute).filter((route) =>
  route.startsWith('/')
) as (keyof typeof ScrumRoute)[]

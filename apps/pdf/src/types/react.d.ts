import type { ComponentType } from 'react'

declare module 'react' {
  type ExtractProps<T> = T extends ComponentType<infer P> ? P : T
}

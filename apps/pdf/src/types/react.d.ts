import type { ComponentType, Ref, ReactElement, RefAttributes } from 'react'

declare module 'react' {
  type ExtractProps<T> = T extends ComponentType<infer P> ? P : T

  function forwardRef<T, P = object>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null
}

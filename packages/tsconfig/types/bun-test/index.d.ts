import type { expect } from 'bun:test'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

type BunDomMatchers<T> = Pick<
  TestingLibraryMatchers<ReturnType<typeof expect.stringContaining>, T>,
  'toBeInTheDocument' | 'toHaveAttribute'
>

declare module 'bun:test' {
  interface Matchers<T> extends BunDomMatchers<T> {}
}

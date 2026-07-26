import { afterEach, expect, mock } from 'bun:test'
import { toBeInTheDocument, toHaveAttribute } from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { createElement } from 'react'

expect.extend({ toBeInTheDocument, toHaveAttribute })
afterEach(cleanup)

class ObserverStub {
  disconnect() {
    // Intentional test stub.
  }

  observe() {
    // Intentional test stub.
  }

  unobserve() {
    // Intentional test stub.
  }
}

globalThis.IntersectionObserver = ObserverStub as unknown as typeof IntersectionObserver
globalThis.ResizeObserver = ObserverStub as unknown as typeof ResizeObserver

Object.defineProperty(window, 'matchMedia', {
  value: mock((query: string) => ({
    addEventListener: mock(),
    addListener: mock(),
    dispatchEvent: mock(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: mock(),
    removeListener: mock(),
  })),
  writable: true,
})

mock.module('next/image', () => ({
  default: ({ alt }: { alt: string }) => createElement('img', { alt }),
}))

mock.module('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    back: mock(),
    pathname: '/',
    push: mock(),
    query: {},
    replace: mock(),
    route: '/',
  }),
}))

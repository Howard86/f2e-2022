import '@f2e-2022/jest-config/jest.setup'

global.ResizeObserver = require('resize-observer-polyfill')
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    // Intentional test stub.
  }
  unobserve() {
    // Intentional test stub.
  }
  disconnect() {
    // Intentional test stub.
  }
}

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    addEventListener: jest.fn(),
    addListener: jest.fn(), // Deprecated
    dispatchEvent: jest.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
    removeListener: jest.fn(), // Deprecated
  })),
  writable: true,
})

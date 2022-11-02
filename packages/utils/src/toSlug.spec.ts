import { toSlug } from './toSlug'

describe('toSlug', () => {
  it('should return empty string', () => {
    expect.hasAssertions()
    expect(toSlug('')).toBe('')
  })

  it('should remove white space', () => {
    expect.hasAssertions()
    expect(toSlug('some thing')).toBe('some-thing')
  })
})

import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('home', () => {
  it('should have main', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('should have header', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should have footer', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('should have h1', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('should have multiple h2', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(6)
  })
})

import { render, screen } from '@testing-library/react'
import Home from './page'

describe('home', () => {
  it('should have main', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('home', () => {
  it('should render', () => {
    expect.hasAssertions()
    render(<Home />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})

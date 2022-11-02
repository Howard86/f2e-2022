import { render, screen } from '@testing-library/react'
import Docs from '@/pages/index'

describe('docs', () => {
  it('should render', () => {
    expect.hasAssertions()
    render(<Docs />)

    expect(screen.getByText(/Turbo Monorepo Template/i)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import Docs from '@/pages/index'

describe('docs', () => {
  it('should have main', () => {
    expect.hasAssertions()
    render(<Docs />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})

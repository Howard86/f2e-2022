import { render, screen } from '@testing-library/react'
import { Card } from './Card'

function EmptyIcon(): JSX.Element {
  return <svg data-testid="SVG" />
}

describe('card', () => {
  it('should render', () => {
    expect.hasAssertions()
    render(
      <Card name="MOCK_NAME" description="MOCK_DESCRIPTION" href="MOCK_HREF" Icon={EmptyIcon} />
    )

    expect(screen.getByText('MOCK_NAME')).toBeInTheDocument()
    expect(screen.getByText('MOCK_DESCRIPTION')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'MOCK_HREF')
    expect(screen.getByTestId('SVG')).toBeInTheDocument()
  })
})

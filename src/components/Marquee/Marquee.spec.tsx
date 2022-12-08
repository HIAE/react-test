import MarqueeSymbolInfo from '.'
import { render, screen } from '@testing-library/react'

describe('Marquee component', () => {
  it('renders correctly', () => {
    render(
      <MarqueeSymbolInfo />
    )

    expect(screen.getByTestId('marquee')).toBeInTheDocument()
  })
})
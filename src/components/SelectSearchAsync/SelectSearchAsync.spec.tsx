
import { SelectSearchAsync } from '.'
import { render, screen } from '@testing-library/react'

describe('Marquee component', () => {
  it('renders correctly', () => {
    render(
      <SelectSearchAsync />
    )

    expect(screen.getByTestId('select-search-async')).toBeInTheDocument()
  })
})

import DefaultHeader from '.'
import { render, screen } from '@testing-library/react'

describe('DefaultHeader component', () => {
  it('renders correctly', () => {
    render(
      <DefaultHeader />
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
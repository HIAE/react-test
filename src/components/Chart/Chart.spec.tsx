import Chart from '.'
import { fireEvent, render, screen } from '@testing-library/react'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: (path: string) => { }
      }
    }
  }
})

describe('Chart component', () => {
  it('renders correctly', () => {
    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    expect(screen.getByTestId('chart')).toBeInTheDocument()
  })

  it('handleClick to "Voltar" to be called', () => {

    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    const push = useRouter.mockImplementation(() => ({
      push: jest.fn()
    }))

    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    const backToHomeButton = screen.getByText('Voltar')

    fireEvent.click(backToHomeButton)

    expect(push).toHaveBeenCalled()
  })

  it('is icon in "chart type button" start with "monotone-icon"', () => {
    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    const monotoneIcon = screen.getByTestId('monotone-icon')

    expect(monotoneIcon).toBeInTheDocument()
  })

  it('handleClick "Chart Type Button" is change to "line-icon"', () => {
    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    const chartTypeButton = screen.getByTestId('button-chart-type')

    fireEvent.click(chartTypeButton)

    const lineIcon = screen.getByTestId('line-icon')

    expect(lineIcon).toBeInTheDocument()
  })

  it('Is icon in "grid on or off button" start with "grid-on"', () => {
    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    const gridOnIcon = screen.getByTestId('grid-on')

    expect(gridOnIcon).toBeInTheDocument()
  })

  it('handleClick "grid on or off button" is change to "grid-off"', () => {
    render(
      <Chart data={[{ name: '12-12-2022', price: 10, date: '12-12-2022', }]} name="IBM" />
    )

    const gridOnOrOffButton = screen.getByTestId('grid-on-or-off-button')

    fireEvent.click(gridOnOrOffButton)

    const gridOffIcon = screen.getByTestId('grid-off')

    expect(gridOffIcon).toBeInTheDocument()
  })
})
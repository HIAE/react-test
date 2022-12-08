import { render, screen } from '@testing-library/react'
import Home, { getServerSideProps } from '../../pages'
import { alphavantageApi } from "../../services/api"

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: (path: string) => { }
      }
    }
  }
})

jest.mock('../../services/api')

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home initialOptions={[]} />)

    expect(screen.getByText('Pesquisar')).toBeInTheDocument()
  })

  it('load initial date (getServerSideProps)', async () => {
    const alphavantageApiMocked: any = jest.mocked(alphavantageApi);

    alphavantageApiMocked.mockReturnValueOnce({
      get: jest.fn().mockResolvedValueOnce({
        bestMatches: []
      })
    })

    const response = await getServerSideProps({} as any)

    expect(response).toEqual(
      expect.objectContaining({ props: { initialOptions: [] } })
    )
  })
})
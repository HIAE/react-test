import { GetServerSideProps } from "next"
import { useAlphaVantage } from "../../context/AlphaVantageContext"
import { alphavantageApi } from "../../services/api"
import { TimeSeriesDailyAdjustedInterface } from "../../services/types"

interface Details {
  symbolDaily: TimeSeriesDailyAdjustedInterface
  name: string
  symbol: string
}

export default function Detailts({ symbolDaily, name, symbol }: Details) {
  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
      <main>
        <code>{JSON.stringify(symbolDaily)}</code>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    if (!params || !params.params) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    const symbol = params.params[0]
    const name = params.params[1]
    if (!symbol || !name) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    const { data } = await alphavantageApi.get<TimeSeriesDailyAdjustedInterface>(`query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_SECRET_KEY}`)

    return {
      props: {
        symbolDaily: data,
        name,
        symbol,
      }
    }
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
}
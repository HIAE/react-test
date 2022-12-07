import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import {
  parseISO,
  format,
} from 'date-fns'
import { alphavantageApi } from "../../services/api"
import { TimeSeriesDailyAdjustedInterface } from "../../services/types"
import { DetailsContainer, DetailsContent } from "../../styles/pages/details"
import Head from "next/head"
import DefaultHeader from "../../components/DefaultHeader"

const Chart = dynamic(() => import('../../components/Chart'), { ssr: false })

interface SymbolDaily {
  name: string
  price: number
  date: string
}

interface Details {
  symbolDaily: SymbolDaily[]
  name: string
  symbol: string
}

export default function Detailts({ symbolDaily, symbol }: Details) {
  return (
    <>
      <Head>
        <title> {symbol} | Challenger</title>
      </Head>

      <DetailsContainer>
        <DefaultHeader />

        <DetailsContent>
          <Chart data={symbolDaily} name={symbol} />
        </DetailsContent>
      </DetailsContainer>
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

    const formatData = Object.keys(data["Time Series (Daily)"]).map(key => {
      return {
        name: format(parseISO(key), "dd/LL/yyyy"),
        price: Number(data["Time Series (Daily)"][key]["4. close"]),
        date: format(parseISO(key), "yyyy-LL-dd")
      }
    }).reverse()

    return {
      props: {
        symbolDaily: formatData,
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
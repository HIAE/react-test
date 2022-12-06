import { GetServerSideProps } from "next"
import { SelectSearchAsync, SymbolSearchOptions } from "../components/SelectSearchAsync"
import { alphavantageApi } from "../services/api"
import { HomeContainer } from "../styles/pages/home"

interface HomeProps {
  initialOptions: SymbolSearchOptions[]
}

export default function Home({ initialOptions }: HomeProps) {
  return (
    <HomeContainer>
      <SelectSearchAsync initialOptions={initialOptions} />
    </HomeContainer>
  )
}

interface BestMatches {
  "1. symbol": string,
  "2. name": string,
  "3. type": string,
  "4. region": string,
  "5. marketOpen": string,
  "6. marketClose": string,
  "7. timezone": string,
  "8. currency": string,
  "9. matchScore": string
}

interface AlphaVantageGetSearchData {
  bestMatches: BestMatches[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await alphavantageApi.get<AlphaVantageGetSearchData>(`query?function=SYMBOL_SEARCH&keywords=a&apikey=${process.env.ALPHAVANTAGE_SECRET_KEY}`)

    const formatInitalOptions: SymbolSearchOptions[] = data.bestMatches.map(match => ({ name: match["2. name"], symbol: match["1. symbol"] }))

    return {
      props: {
        initialOptions: formatInitalOptions,
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        initialOptions: []
      }
    }
  }
}

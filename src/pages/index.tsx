import { Button, TextField } from "@mui/material"
import { GetServerSideProps } from "next"
import { SelectSearchAsync, SymbolSearchOptions } from "../components/SelectSearchAsync"
import { alphavantageApi } from "../services/api"
import { AlphaVantageGetSearchData } from "../services/types"
import { CardContainer, ContentContainer, HomeContainer, InputContainer } from "../styles/pages/home"

interface HomeProps {
  initialOptions: SymbolSearchOptions[]
}

export default function Home({ initialOptions }: HomeProps) {
  return (
    <HomeContainer>
      <ContentContainer>
        <InputContainer>
          <SelectSearchAsync initialOptions={initialOptions} />
          <Button variant="outlined">Pesquisar</Button>
        </InputContainer>

        <CardContainer>
          <h1>soon</h1>
        </CardContainer>
      </ContentContainer>
    </HomeContainer>
  )
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

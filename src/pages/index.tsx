import { Button } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { SelectSearchAsync } from "../components/SelectSearchAsync"
import { SymbolSearchOptions, useAlphaVantage } from "../context/AlphaVantageContext"
import { alphavantageApi } from "../services/api"
import { AlphaVantageGetSearchData } from "../services/types"
import {
  ContentContainer,
  HomeContainer,
  InputContainer
} from "../styles/pages/home"
import DefaultHeader from "../components/DefaultHeader"
import Head from "next/head"

interface HomeProps {
  initialOptions: SymbolSearchOptions[]
}

export default function Home({ initialOptions }: HomeProps) {
  const { push } = useRouter()
  const { currentSymbolSelected } = useAlphaVantage()

  const handleSearchOnClick = () => {
    if (!currentSymbolSelected?.symbol) return console.warn('aaaaaaa')
    push(`/details/${currentSymbolSelected.symbol}/${currentSymbolSelected.name}`)
  }

  return (
    <>
      <Head>
        <title>Challenger</title>
      </Head>

      <HomeContainer>
        <DefaultHeader size="medium" />

        <ContentContainer>
          <InputContainer>
            <SelectSearchAsync initialOptions={initialOptions} />

            <Button variant="outlined" onClick={handleSearchOnClick}>
              Pesquisar
            </Button>
          </InputContainer>
        </ContentContainer>
      </HomeContainer>
    </>
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

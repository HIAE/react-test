import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AlphaVantageProvider } from '../context/AlphaVantageContext'
import { GlobalStyle } from '../styles/pages/global'
import { defaultTheme } from '../styles/theme/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlphaVantageProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AlphaVantageProvider>
  )
}

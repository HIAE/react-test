import { ReactNode, createContext, useContext, useState } from 'react'

export interface SymbolSearchOptions {
  name: string
  symbol: string
}

interface AlphaVantageContextType {
  currentSymbolSelected: SymbolSearchOptions
  changeCurrentSymbolSelectedValue(newValue: SymbolSearchOptions | null): void
}

export const AlphaVantageContext = createContext({} as AlphaVantageContextType)

interface AlphaVantageProviderProps {
  children: ReactNode
}

export const AlphaVantageProvider = ({
  children,
}: AlphaVantageProviderProps) => {
  const [currentSymbolSelected, setCurrentSymbolSelected] = useState({} as SymbolSearchOptions)

  function changeCurrentSymbolSelectedValue(newValue: SymbolSearchOptions | null) {
    if (!newValue) return
    setCurrentSymbolSelected(newValue)
  }

  return (
    <AlphaVantageContext.Provider
      value={{
        currentSymbolSelected,
        changeCurrentSymbolSelectedValue
      }}
    >
      {children}
    </AlphaVantageContext.Provider>
  )
}

export const useAlphaVantage = () => {
  const context = useContext(AlphaVantageContext)
  if (!context) {
    throw new Error('AlphavantageContext must be used within a AlphavantageProvider')
  }
  return context
}
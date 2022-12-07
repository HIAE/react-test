import { ReactNode, useState, useCallback } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'


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

  const changeCurrentSymbolSelectedValue = useCallback((newValue: SymbolSearchOptions | null) => {
    if (!newValue) return
    setCurrentSymbolSelected(newValue)
  }, [])

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
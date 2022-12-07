import { Autocomplete, CircularProgress, FilterOptionsState, TextField } from "@mui/material"
import axios from "axios"
import { SyntheticEvent, useState } from "react"
import { useContextSelector } from "use-context-selector"
import { AlphaVantageContext, SymbolSearchOptions } from "../../context/AlphaVantageContext"
import { NameText, OptionsContainer, SymbolText } from "./style"

interface SelectSearchAsyncProps {
  initialOptions?: SymbolSearchOptions[]
}

export const SelectSearchAsync = ({ initialOptions = [] }: SelectSearchAsyncProps) => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<SymbolSearchOptions[]>(initialOptions)
  const [isSearchingSymbol, setIsSearchingSymbol] = useState(false)

  const changeCurrentSymbolSelectedValue = useContextSelector(AlphaVantageContext, (context) => context.changeCurrentSymbolSelectedValue)

  function filterOptions(option: SymbolSearchOptions[], state: FilterOptionsState<SymbolSearchOptions>) {
    const { inputValue } = state
    return option.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()))
  }

  async function fetchOptionData(event: SyntheticEvent<Element, Event>, inputvalue: string) {
    if (!inputvalue) return
    if (isSearchingSymbol) return
    setIsSearchingSymbol(true)

    const { data } = await axios.get(`/api/search`, {
      params: {
        keywords: inputvalue,
      }
    })

    setOptions(state => {
      const mergedArray = [...state, ...data]
      return mergedArray.filter((element, post, self) => self.indexOf(element) == post)
    })
    setIsSearchingSymbol(false)
  }

  return (
    <Autocomplete
      id="search"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterOptions={filterOptions}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      onInputChange={fetchOptionData}
      onChange={
        (event: SyntheticEvent<Element, Event>, value: SymbolSearchOptions | null) =>
          changeCurrentSymbolSelectedValue(value)
      }
      options={options}
      renderOption={
        (props, option) => (
          <OptionsContainer {...props}>
            <SymbolText>{option.symbol.toUpperCase()}</SymbolText>
            <NameText>{option.name}</NameText>
          </OptionsContainer>
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          color={"primary"}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isSearchingSymbol ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}
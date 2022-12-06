import { Autocomplete, Box, CircularProgress, FilterOptionsState, TextField } from "@mui/material"
import { useEffect, useState } from "react"

export interface SymbolSearchOptions {
  name: string
  symbol: string
}

interface SelectSearchAsyncProps {
  initialOptions: SymbolSearchOptions[]
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const SelectSearchAsync = ({ initialOptions }: SelectSearchAsyncProps) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly SymbolSearchOptions[]>(initialOptions);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep();

      if (active) {
        setOptions([...initialOptions]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  console.log(options)

  const filterOptions = (option: SymbolSearchOptions[], state: FilterOptionsState<SymbolSearchOptions>) => {
    const { inputValue } = state
    return option.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()))
  }

  return (
    <Autocomplete
      id="search"
      sx={{ width: 300 }}
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
      options={options}
      loading={loading}
      renderOption={
        (props, option) => (
          <Box component="li" {...props}>
            <strong>{option.symbol.toUpperCase()} -</strong>
            {option.name}
          </Box>
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}
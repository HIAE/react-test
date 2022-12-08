import Marquee from "react-marquee-slider"

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { Item, Price } from "./style"

const marqueeData = [
  { symbol: 'IBM', variation: 47.5 },
  { symbol: 'TSCDF', variation: 2.73, negative: true },
  { symbol: 'TCEHY', variation: 39.83 },
  { symbol: '0Z4S.LON', variation: 14.5 },
  { symbol: 'NNN1.FRK', variation: 17.33 },
  { symbol: 'TME', variation: -3.73, negative: true },
  { symbol: '63TA.FRK', variation: 102.25 },
  { symbol: 'BA', variation: 7.65 },
  { symbol: 'BAB', variation: -19.5, negative: true },
  { symbol: 'BAAPX', variation: 123.95 },
]

export default function MarqueeSymbolInfo() {
  return (
    <div data-testid="marquee">
      <Marquee velocity={15} >
        {
          marqueeData.map(marquee => (
            <Item key={marquee.symbol}>
              {marquee.symbol}
              <Price negative={marquee?.negative}>
                {marquee.variation}%
                {
                  marquee?.negative ? (
                    <ArrowDropDownIcon />
                  ) : (
                    <ArrowDropUpIcon />
                  )
                }
              </Price>
            </Item>
          ))
        }
      </Marquee>
    </div>
  )
}
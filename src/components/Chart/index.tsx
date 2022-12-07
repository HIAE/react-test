import { Button, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import { priceFormatter } from "../../utils/formatter"
import { ChartContainer, InputContainer } from "./style"

interface SymbolDaily {
  name: string
  value: number
  date: string
}

interface ChartProps {
  data: SymbolDaily[]
}

type ChartType = 'line' | 'monotone'

export default function Chart({ data }: ChartProps) {
  const [chartData, setChartData] = useState(data)
  const [startDate, setStartDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [chartType, setChartType] = useState<ChartType>('monotone')

  const onchangeStartDate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStartDate(event.target.value)
  }

  const onchangeFinalDate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFinalDate(event.target.value)
  }

  const formatTooltipLabel = (label: any, payload: any) => {
    try {
      return `Data: ${label}`
    } catch (err) {
      return ''
    }
  }

  const formatTooltipPrice = (value: any, name: any, props: any): any => {
    try {
      return [`${priceFormatter.format(value)}`, 'Price']
    } catch (err) {
      return undefined
    }
  }

  const handleClickChartButtonType = () => {
    setChartType(state => state === 'monotone' ? 'line' : 'monotone')
  }

  const filterChartData = chartData.filter(item => {
    if (!startDate) return item
    if (item.date >= startDate) return item
  }).filter(item => {
    if (!finalDate) return item
    if (item.date <= finalDate) return item
  })

  return (
    <ChartContainer>
      <InputContainer>
        <TextField
          id="start-date"
          label="Data inicial"
          variant="outlined"
          type={'date'}
          value={startDate}
          onChange={onchangeStartDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="final-date"
          label="Data final"
          variant="outlined"
          type={'date'}
          value={finalDate}
          onChange={onchangeFinalDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button aria-label="chart" onClick={handleClickChartButtonType} variant="outlined" color={chartType === 'line' ? 'success' : 'primary'}>
          {
            chartType === 'line' ?
              (<BarChartIcon />) :
              (<ShowChartIcon />)
          }
        </Button>
      </InputContainer>

      {
        chartType === 'monotone' ? (
          <AreaChart
            width={1000}
            height={300}
            data={filterChartData}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip labelFormatter={formatTooltipLabel} formatter={formatTooltipPrice} />
            <Legend />
            <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        ) : (
          <LineChart width={1000} height={300} data={filterChartData}>
            <Line type="monotone" dataKey="value" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip labelFormatter={formatTooltipLabel} formatter={formatTooltipPrice} />
            <Legend />
          </LineChart>
        )
      }
    </ChartContainer>
  )
}
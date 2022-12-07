import { ChangeEvent, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { Button, TextField } from "@mui/material"
import { priceFormatter } from "../../utils/formatter"

import { ChartContainer, OptionsContainer } from "./style"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import GridOnIcon from '@mui/icons-material/GridOn'
import GridOffIcon from '@mui/icons-material/GridOff'

interface SymbolDaily {
  name: string
  value: number
  date: string
}

type chartOptions = 'line' | 'monotone'

interface ChartConfig {
  type: chartOptions
  isGridOn: boolean
}

interface ChartProps {
  data: SymbolDaily[]
  name: string
}

export default function Chart({ data, name }: ChartProps) {
  const [chartData, setChartData] = useState(data)
  const [startDate, setStartDate] = useState('')
  const [finalDate, setFinalDate] = useState('')
  const [chartOptions, setChartOptions] = useState<ChartConfig>({ type: 'monotone', isGridOn: false })

  const { push } = useRouter()

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
    setChartOptions(state => state.type === 'monotone' ?
      ({ ...state, type: 'line' }) :
      ({ ...state, type: 'monotone' })
    )
  }

  const handleClickChartButtonGrid = () => {
    setChartOptions(state => ({ ...state, isGridOn: !state.isGridOn }))
  }

  const handleClickBackToHome = () => {
    push('/')
  }

  const filterChartData = useMemo(() => {
    return chartData.filter(item => {
      if (!startDate) return item
      if (item.date >= startDate) return item
    }).filter(item => {
      if (!finalDate) return item
      if (item.date <= finalDate) return item
    })
  }, [chartData, finalDate, startDate])

  const axisLabelConfig = { value: `preço - ${name}`, angle: -90, position: 'insideLeft' }

  return (
    <ChartContainer>
      <OptionsContainer>
        <Button
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleClickBackToHome}
        >
          Voltar
        </Button>
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

        <Button
          aria-label="chart"
          onClick={handleClickChartButtonType}
          variant="outlined"
          color={chartOptions.type === 'line' ? 'success' : 'primary'}
        >
          {
            chartOptions.type === 'line' ?
              (<BarChartIcon />) :
              (<ShowChartIcon />)
          }
        </Button>

        <Button
          aria-label="chart"
          onClick={handleClickChartButtonGrid}
          variant="outlined"
          color={chartOptions.isGridOn ? 'inherit' : 'primary'}
        >
          {
            chartOptions.isGridOn ?
              (<GridOffIcon />) :
              (<GridOnIcon />)
          }
        </Button>
      </OptionsContainer>

      {
        chartOptions.type === 'monotone' ? (
          <AreaChart
            width={1000}
            height={300}
            data={filterChartData}
          >
            <XAxis dataKey="name" />
            {chartOptions.isGridOn && (<CartesianGrid />)}
            <YAxis label={axisLabelConfig} />
            <Tooltip labelFormatter={formatTooltipLabel} formatter={formatTooltipPrice} />
            <Legend verticalAlign="top" height={36} />
            <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        ) : (
          <LineChart width={1000} height={300} data={filterChartData}>
            <Line type="monotone" dataKey="value" />
            {chartOptions.isGridOn && (<CartesianGrid />)}
            <XAxis dataKey="name" />
            <YAxis label={axisLabelConfig} />
            <Tooltip labelFormatter={formatTooltipLabel} formatter={formatTooltipPrice} />
            <Legend verticalAlign="top" height={36} />
          </LineChart>
        )
      }
    </ChartContainer>
  )
}
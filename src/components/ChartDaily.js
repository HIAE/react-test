import React, { useEffect, useState } from 'react'

import {
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts'

import { 
    Grid, 
    InputLabel, 
    NativeSelect
} from '@material-ui/core'

function ChartDaily(props) {

    const [renderDaily, setRenderDaily] = useState([])
    const [dataKeyValueChart, setDataKeyValueChart] = useState('close')
    const [initialDate, setInitialDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const { daily } = props

    useEffect(() => {
        let newRenderDaily = Object.entries(daily)
        newRenderDaily = newRenderDaily.reverse().map(e => {
            return {
                open: e[1]["1. open"],
                high: e[1]["2. high"],
                low: e[1]["3. low"],
                close: e[1]["4. close"],
                volume: e[1]["5. volume"],
                date: e[0].replace(/-/g, '/')
            }
        })
        setRenderDaily(newRenderDaily)
    }, [daily])

    return(
        <>
            <Grid justify="space-between" container>
                <div>

                </div>
                <div>
                    <InputLabel htmlFor="daily-native-helper"></InputLabel>
                    <NativeSelect
                        value={dataKeyValueChart}
                        onChange={e => setDataKeyValueChart(e.target.value)}
                        inputProps={{
                            name: 'daily',
                            id: 'daily-native-helper',
                        }}
                    >
                        <option value={'close'}>close</option>
                        <option value={'open'}>open</option>
                        <option value={'high'}>high</option>
                        <option value={'low'}>low</option>
                    </NativeSelect>
                </div>
            </Grid>
            <ResponsiveContainer width={'100%'} aspect={1.0/0.3}>
                <AreaChart
                    data={renderDaily}
                    margin={{
                        top: 10, bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={dataKeyValueChart} stroke="#3f51b5" fill="#e8eaf6" />
                </AreaChart>
        </ResponsiveContainer>
      </>
    )
}

export default ChartDaily
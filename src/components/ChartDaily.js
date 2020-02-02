import React, { useEffect, useState, useRef } from 'react'

import {
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    AreaChart,
    Area,
} from 'recharts'

import { 
    Grid, 
    InputLabel, 
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core'

import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns'

import useStyles from '../assets/styles/chart'

function ChartDaily(props) {

    const classes = useStyles()
    const [renderDaily, setRenderDaily] = useState([])
    const [dataKeyValueChart, setDataKeyValueChart] = useState('close')
    const [initialDate, setInitialDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [daily, setDaily] = useState([])
    const isFirstRun = useRef(true)

    useEffect(() => {
        let newDaily = Object.entries(props.daily)
        newDaily = newDaily.reverse().map(e => {
            return {
                open: e[1]["1. open"],
                high: e[1]["2. high"],
                low: e[1]["3. low"],
                close: e[1]["4. close"],
                date: e[0].replace(/-/g, '/')
            }
        })
        setDaily(newDaily)
    }, [props.daily])

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return
        }
        setEndDate(new Date(daily[daily.length-1].date))
        setInitialDate(new Date(daily[daily.length-31].date))
    }, [daily])

    useEffect(() => {
        const filterDailys = () => {
            const newRenderDailys = daily.filter(d => {
                const dateDaily = new Date(d.date)
                return dateDaily.getTime() >= initialDate.getTime() && 
                    dateDaily.getTime() <= endDate.getTime()
            })
            setRenderDaily(newRenderDailys)
        }
        
        if (initialDate && endDate && daily)
            filterDailys()
    }, [initialDate, endDate, daily])

    return(
        <>
            <Grid justify="space-between" alignItems="center" container>
                <Grid xs={12} sm={7} item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            label="Initial date"
                            className={classes.inputDate}
                            value={initialDate}
                            onChange={value => setInitialDate(value)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            label="End date"
                            className={classes.inputDate}
                            value={endDate}
                            onChange={value => setEndDate(value)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="daily-native-helper"></InputLabel>
                    <Select
                        fullWidth
                        value={dataKeyValueChart}
                        onChange={e => setDataKeyValueChart(e.target.value)}
                        inputProps={{
                            name: 'daily',
                            id: 'daily-native-helper',
                        }}
                    >
                        <MenuItem value={'close'}>close</MenuItem>
                        <MenuItem value={'open'}>open</MenuItem>
                        <MenuItem value={'high'}>high</MenuItem>
                        <MenuItem value={'low'}>low</MenuItem>
                    </Select>
                </FormControl>
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
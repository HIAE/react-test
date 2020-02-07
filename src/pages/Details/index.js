import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ajustKeys } from '../../utils/ObjectBuilder';
import Description from '../../components/Description';
import Chart from '../../components/Chart';

import api from '../../services/api';

export default function Details(props) {
  const today = moment().format('YYYY-MM-DD');
  const initialState = moment(today)
    .subtract(7, 'days')
    .format('YYYY-MM-DD');
  const [isLoading, setIsLoading] = useState(1);
  const [companyDailyPrices, setCompanyDailyPrices] = useState([]);
  const [endDate, setEndDate] = useState(initialState);

  const oneMonth = moment(today)
    .subtract(30, 'days')
    .format('YYYY-MM-DD');

  const threeMonth = moment(today)
    .subtract(60, 'days')
    .format('YYYY-MM-DD');

  const { match } = props;
  const fetchData = async () => {
    const { data } = await api.get(
      `query?function=TIME_SERIES_DAILY&symbol=${match.params.symbol}&apikey=${process.env.API_KEY}`
    );
    setCompanyDailyPrices(ajustKeys(data));
    setIsLoading(0);
  };

  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="90vh"
      >
        {isLoading ? (
          <>
            <p>Loading informations</p>
            <CircularProgress disableShrink color="#0a2" size={40} />
          </>
        ) : (
          <>
            <Description
              symbol={companyDailyPrices.MetaData.Symbol}
              locale={companyDailyPrices.MetaData.TimeZone}
            />
            <NavLink to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </NavLink>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
              size="small"
            >
              <Button onClick={() => setEndDate(initialState)}>1 week</Button>
              <Button onClick={() => setEndDate(oneMonth)}>1 month</Button>
              <Button onClick={() => setEndDate(threeMonth)}>3 months</Button>
            </ButtonGroup>
            <Chart
              prices={companyDailyPrices['TimeSeries(Daily)']}
              today={today}
              endDate={endDate}
            />
          </>
        )}
      </Box>
    </Container>
  );
}

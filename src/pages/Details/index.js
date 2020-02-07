import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import { ajustKeys } from '../../utils/ObjectBuilder';
import Chart from '../../components/Chart';
import Title from '../../components/Title';

import api from '../../services/api';
import Description from '../../components/Description';

function Details(props) {
  const today = moment().format('YYYY-MM-DD');
  const initialState = moment(today)
    .subtract(7, 'days')
    .format('YYYY-MM-DD');
  const [isLoading, setIsLoading] = useState(true);
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
      {isLoading ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="90vh"
          >
            <Title text="Loading informations" />
            <CircularProgress disableShrink color="primary" size={40} />
          </Box>
        </>
      ) : (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
            height="90vh"
          >
            <Box mb={2} mt={2}>
              <NavLink to="/">
                <Button variant="contained" color="primary" size="small">
                  Back
                </Button>
              </NavLink>
            </Box>

            <Description
              symbol={companyDailyPrices.MetaData.Symbol}
              locale={companyDailyPrices.MetaData.TimeZone}
            />

            <Box mb={2}>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
                size="small"
              >
                <Button title="1 Week" onClick={() => setEndDate(initialState)}>
                  1W
                </Button>
                <Button title="1 Month" onClick={() => setEndDate(oneMonth)}>
                  1M
                </Button>
                <Button title="3 Months" onClick={() => setEndDate(threeMonth)}>
                  3M
                </Button>
              </ButtonGroup>
            </Box>
            <Chart
              prices={companyDailyPrices['TimeSeries(Daily)']}
              today={today}
              endDate={endDate}
            />
          </Box>
        </>
      )}
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Details;

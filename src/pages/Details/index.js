import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ajustKeys } from '../../utils/ObjectBuilder';

import Button from '../../components/Button';
import Description from '../../components/Description';
import Chart from '../../components/Chart';

import api from '../../services/api';

export default function Details(props) {
  const [isLoading, setIsLoading] = useState(1);
  const [companyDailyPrices, setCompanyDailyPrices] = useState([]);

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
        <CircularProgress disableShrink />
      ) : (
        <>
          <p>{`${companyDailyPrices.MetaData.Symbol}`}</p>
          <p>{`${companyDailyPrices.MetaData.TimeZone}`}</p>
        </>
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        height="90vh"
      >
        <NavLink to="/">
          <Button variant="contained" color="primary" text="Back" />
        </NavLink>
        <Description text="Hello world, hello america." />
        <Chart />
      </Box>
    </Container>
  );
}

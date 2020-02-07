import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

function Chart({ prices, today, endDate }) {
  const informations = Object.keys(prices).map(key => ({
    date: key,
    close: prices[key].close,
  }));

  const dataByDate = informations.filter(item => {
    return item.date >= endDate && item.date <= today;
  });

  return (
    <ResponsiveContainer>
      <LineChart width={900} height={400} data={dataByDate}>
        <XAxis dataKey="date" />
        <YAxis datakey="close" domain={[endDate, today]} />
        <Tooltip />
        <Legend />
        <Line
          dataKey="close"
          stroke="#3f51b5"
          fill="#fff"
          strokeWidth={3}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

Chart.propTypes = {
  prices: PropTypes.number.isRequired,
  today: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};

export default Chart;

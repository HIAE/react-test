import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function Chart({ prices }) {
  const initialDate = '2019-12-31';
  const finalDate = '2020-02-01';

  const informations = Object.keys(prices).map(key => ({
    date: key,
    open: prices[key].open,
    close: prices[key].close,
  }));

  const dataByDate = informations.filter(item => {
    return item.date >= initialDate && item.date <= finalDate;
  });

  console.log(informations);
  console.log(dataByDate);

  return (
    <LineChart width={900} height={400} data={dataByDate}>
      <CartesianGrid strokeDasharray="1" />
      <XAxis dataKey="date" />
      <YAxis datakey="close" domain={[dataByDate.open, dataByDate.close]} />
      <Tooltip />
      <Legend />
      <Line dataKey="open" fill="peru" />
      <Line dataKey="close" fill="#8884d8" />
    </LineChart>
  );
}

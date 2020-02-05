import React from 'react';
import {
  BarChart,
  Bar,
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
    close: prices[key].close,
  }));

  const dataByDate = informations.filter(item => {
    return item.date >= initialDate && item.date <= finalDate;
  });

  console.log(informations);
  console.log(dataByDate);

  return (
    <BarChart width={900} height={400} data={dataByDate}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis datakey="close" />
      <Tooltip />
      <Legend />
      <Bar dataKey="close" fill="#8884d8" />
    </BarChart>
  );
}

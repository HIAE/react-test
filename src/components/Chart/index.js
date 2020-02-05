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
  const informations = Object.keys(prices).map(key => ({
    date: key,
    close: prices[key].close,
  }));

  return (
    <BarChart width={900} height={400} data={informations}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis datakey="close" />
      <Tooltip />
      <Legend />
      <Bar dataKey="close" fill="#8884d8" />
    </BarChart>
  );
}

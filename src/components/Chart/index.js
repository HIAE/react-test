import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

export default function Chart({ prices, today, endDate }) {
  const informations = Object.keys(prices).map(key => ({
    date: key,
    close: prices[key].close,
  }));

  const dataByDate = informations.filter(item => {
    return item.date >= endDate && item.date <= today;
  });

  return (
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
  );
}

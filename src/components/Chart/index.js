import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { lightBlue } from '@material-ui/core/colors';

export default function Chart({ prices }) {
  console.log(prices);

  const teste = Object.keys(prices).map(key => ({
    date: key,
    close: prices[key].close,
  }));

  return (
    <BarChart width={900} height={400} data={teste}>
      <XAxis />
      <YAxis type="number" domain={[0]} />
      <Legend />
      <Bar
        dataKey="close"
        fill={lightBlue[900]}
        label={{ fill: lightBlue[50], fontSize: 12 }}
      />
    </BarChart>
  );
}

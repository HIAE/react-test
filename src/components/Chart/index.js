import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

export default function Chart({ prices }) {
  const informations = Object.keys(prices).map(key => ({
    date: key,
    close: prices[key].close,
  }));

  return (
    <BarChart width={900} height={400} data={informations}>
      <XAxis />
      <YAxis type="number" domain={[0]} />
      <Legend />
      <Bar
        dataKey="close"
        fill="#01579b"
        label={{ fill: '#e1f5fe', fontSize: 12 }}
      />
    </BarChart>
  );
}

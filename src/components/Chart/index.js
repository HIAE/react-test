import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { lightBlue } from '@material-ui/core/colors';

const chartData = [
  { name: 'Day 1', close: 4000 },
  { name: 'Day 2', close: 3000 },
  { name: 'Day 3', close: 2000 },
  { name: 'Day 4', close: 2780 },
  { name: 'Day 5', close: 1890 },
  { name: 'Day 6', close: 2390 },
  { name: 'Day 7', close: 3490 },
];

export default function Chart() {
  return (
    <BarChart width={900} height={400} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 'dataMax']} />
      <Legend />
      <Bar
        dataKey="close"
        fill={lightBlue[900]}
        label={{ fill: lightBlue[50], fontSize: 12 }}
      />
    </BarChart>
  );
}

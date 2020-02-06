import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

export default function Chart({ prices }) {
  const initialDate = '2020-01-22';
  const finalDate = '2020-02-04';

  const informations = Object.keys(prices).map(key => ({
    date: key,
    open: prices[key].open,
    close: prices[key].close,
  }));

  const dataByDate = informations.filter(item => {
    return item.date >= initialDate && item.date <= finalDate;
  });

  return (
    <LineChart width={900} height={400} data={dataByDate}>
      <XAxis dataKey="date" />
      <YAxis datakey="close" domain={[dataByDate.open, dataByDate.close]} />
      <Tooltip />
      <Legend />
      <Line
        dataKey="open"
        stroke="#006BA6"
        fill="#006BA6"
        strokeWidth={3}
        type="monotone"
      />
      <Line
        dataKey="close"
        stroke="#0496FF"
        fill="#0496FF"
        strokeWidth={1}
        type="monotone"
      />
    </LineChart>
  );
}

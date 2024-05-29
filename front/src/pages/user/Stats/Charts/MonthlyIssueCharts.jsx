import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'January', issues: 30 },
  { month: 'February', issues: 20 },
  { month: 'March', issues: 27 },
  { month: 'April', issues: 18 },
  { month: 'May', issues: 23 },
  { month: 'June', issues: 34 },
  { month: 'July', issues: 28 },
  { month: 'August', issues: 25 },
  { month: 'September', issues: 30 },
  { month: 'October', issues: 40 },
  { month: 'November', issues: 35 },
  { month: 'December', issues: 32 },
];

const MonthlyIssuesChart = ({
  width = "100%",
  height = 400,
  dataKey = "month"
}) => (
  <ResponsiveContainer width={width} height={height}>
    <BarChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="issues" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default MonthlyIssuesChart;
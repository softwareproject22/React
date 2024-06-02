import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const MonthlyIssuesChart = (props,{
  width = "100%",
  height = 400,
  dataKey = "month"
}) => (
  <ResponsiveContainer width={width} height={height}>
    <BarChart
      data={props.data}
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
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// 예시 데이터: 일별 이슈 개수
const data = [
  { date: '2024-05-01', issues: 10 },
  { date: '2024-05-02', issues: 12 },
  { date: '2024-05-03', issues: 8 },
  { date: '2024-05-04', issues: 15 },
  { date: '2024-05-05', issues: 9 },
  // 추가 데이터 필요
  { date: '2024-05-06', issues: 14 },
  { date: '2024-05-07', issues: 11 },
  { date: '2024-05-08', issues: 13 },
  { date: '2024-05-09', issues: 7 },
  { date: '2024-05-10', issues: 16 },
  // 일별 데이터 추가 가능
];

const DailyIssuesChart = ({
  width = "100%",
  height = 400,
  dataKey = "date"
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

export default DailyIssuesChart;
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Area,
  Bar,
  PieChart,
  Pie,
} from 'recharts';
import { data1, data2 } from '../../../constants/data';

export const chart1 = (data) => {
  return (
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Ylin lämpötila (degC)" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Alin lämpötila (degC)" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Ilman lämpötila (degC)" stroke="#383838" />
    </LineChart>
  )
};

export const chart2 = (data) => {
  return (
    <RadarChart cx={200} cy={200} outerRadius={100} width={400} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 60]} />
      <Radar name="Lumensyvyys" dataKey="Lumensyvyys (cm)" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Now" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
};

export const chart3 = (data) => {
  return (
    <ComposedChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar name="Snow depth (cm)" dataKey="Lumensyvyys (cm)" barSize={20} fill="#AAA" />
      <Area type="monotone" name="Average temperature (celcius)" dataKey="Ilman lämpötila (degC)" fill="#8884d8" stroke="#8884d8" />
      <Line type="monotone" name="Highest temperature (celcius)" dataKey="Ylin lämpötila (degC)" stroke="#ff2233" />
      <Line type="monotone" name="Lowest temperature (celcius)" dataKey="Alin lämpötila (degC)" stroke="#22FF33" />

      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
}

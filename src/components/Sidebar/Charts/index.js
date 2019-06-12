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

export const chart2 = (rawData) => {
  let ozone = rawData.reduce((acc, val) => {
    const newVal = val['Otsoni (ug/m3)'] || -1;
    return acc + newVal;
  }, 0);
  let sulfur = rawData.reduce((acc, val) => {
    const newVal = val['Rikkidioksidi (ug/m3)'] || -1;
    return acc + newVal;
  }, 0);
  let nitrogen = rawData.reduce((acc, val) => {
    const newVal = val['Rikkidioksidi (ug/m3)'] || -1;
    return acc + newVal;
  }, 0);

  let data=[
    { name: 'Ozone', value: Number(ozone.toFixed(2)) },
    { name: 'Sulfur Oxide', value: Number(sulfur.toFixed(2)) },
    { name: 'Nitrogen Oxide', value: Number(nitrogen.toFixed(2)) },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <>
    <PieChart width={400} height={400}>
      <Legend />
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
    </>
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

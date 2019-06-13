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

const sum = (data, field) => data.reduce((acc, val) => {
  const newVal = val[field] || 0;
  return acc + newVal;
}, 0);

const average = (data, field) => Number((sum(data, field) / data.length).toFixed(2));

export const chart1 = (rawData) => {
  const data = [
    {
      subject: 'Longwave (atmosphere)', A: average(rawData, 'Ilmakehän pitkäaaltosäteily (W/m2)')
    },
    {
      subject: 'GHI', A: average(rawData, 'Kokonaissäteily (W/m2)')
    },
    {
      subject: 'Longwave (ground)', A: average(rawData, 'Maanpinnan pitkäaaltosäteily (W/m2)')
    },
    {
      subject: 'DHI', A: average(rawData, 'Hajasäteily (W/m2)')
    },
  ];
  return (
    <>
    <h4> Radiation (W/m2) </h4>
    <RadarChart cx={220} cy={140} outerRadius={110} width={450} height={300} data={data}>
      <Tooltip />
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Radiation (W/m2)" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
    </>
  );
}

export const chart2 = (rawData) => {
  let ozone = average(rawData, 'Otsoni (ug/m3)');
  let sulfur = average(rawData, 'Rikkidioksidi (ug/m3)');
  let nitrogen = average(rawData, 'Typpidioksidi (ug/m3)');

  console.log(ozone, sulfur, nitrogen);
  let data= [
    { name: 'Ozone', value: ozone },
    { name: 'Sulfur Oxide', value: sulfur },
    { name: 'Nitrogen Oxide', value: nitrogen },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <>
    <h4> Air quality indicators (monthly avg. (ug/m3)) </h4>
    <PieChart width={400} height={250}>
      <Tooltip />
      <Legend />
      <Pie
        data={data}
        cx={200}
        cy={100}
        innerRadius={40}
        outerRadius={70}
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

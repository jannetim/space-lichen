import React from 'react';
import {
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
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
} from 'recharts';
import { data1, data2, data3 } from '../../../constants/data';

export const chart1 = () => {
  return (
    <LineChart
      width={400}
      height={200}
      data={data1}
      margin={{
        top: 5, right: 0, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  )
};

export const chart2 = () => {
  return (
    <RadarChart cx={200} cy={200} outerRadius={100} width={400} height={500} data={data2}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Earlier" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Now" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
};

export const popUpChart2 = forecast => {
  const list = forecast.list ? forecast.list : []
  const forecastData = list.map(entry => {
    return {
      name: entry.dt_txt,
      humidity: entry.main.humidity,
      pressure: entry.main.pressure,
      temp: entry.main.temp - 273.15
    }
  })
  
  return (
    <ComposedChart
      width={330}
      height={300}
      data={forecastData}
      margin={{
        top: 5, right: 20, left: -50, bottom: 5,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="humidity" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="temp" stroke="#ff7300" />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
}

export const popUpChart = forecast => {
  
  const list = forecast.list ? forecast.list : []
  
  const forecastData = list.map(entry => {
    return {
      name: entry.dt_txt,
      humidity: entry.main.humidity,
      pressure: entry.main.pressure,
      temp: entry.main.temp
    }
  })

  return (
    <AreaChart
    width={300}
    height={200}
    data={forecastData}
    margin={{
      top: 10, right: 30, left: 0, bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="humidity" stackId="1" stroke="#8884d8" fill="#8884d8" />
    <Area type="monotone" dataKey="pressure" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
    <Area type="monotone" dataKey="temp" stackId="1" stroke="#ffc658" fill="#ffc658" />
  </AreaChart>
  )    
}
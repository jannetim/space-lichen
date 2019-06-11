import React from 'react';
import logo from './logo.svg';
import './App.css';
import recharts from 'recharts';

import MapTest from './components/MapTest'
import Sidebar from './components/Sidebar';
import {
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

import { data1, data2 } from './constants/data';

const chart1 = () => {
  return (
    <LineChart
      width={400}
      height={200}
      data={data1}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
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

const chart2 = () => {
  return (
    <RadarChart cx={200} cy={200} outerRadius={100} width={400} height={500} data={data2}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
};

const chart3 = () => {
  return (
    <ComposedChart
      width={400}
      height={300}
      data={data1}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex' }} >
      <MapTest height='100vh' width='75vw' />
      <Sidebar
        height='100vh'
        width='25vw'
        data1={chart1}
        data2={chart2}
        data3={chart3}
      />
    </div>
  );
}

export default App;

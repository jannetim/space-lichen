import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import recharts from 'recharts';

import MapTest from './components/MapTest'
import Sidebar from './components/Sidebar';
import data1 from './constants/sk_weather.json';

function App() {
  const [ area, setArea ] = useState(null)
  useEffect(() => {
    console.log('Chosen area', area)
  })
  return (
    <div className="App" style={{ display: 'flex' }} chosenArea >
      <MapTest height='100vh' width='75vw' pickArea={area => setArea(area)} />
      <Sidebar
        data1={data1}
        height='100vh'
        width='25vw'
      />
    </div>
  );
}

export default App;

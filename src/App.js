import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import recharts from 'recharts';
import axios from 'axios';
import MapTest from './components/MapTest'
import Sidebar from './components/Sidebar';
import weather_sk from './constants/sk_weather.json';
import weather_hk from './constants/hk_weather.json';
import particles_hk from './constants/hk_particles.json';
import particles_sk from './constants/sk_particles.json';
import radiation from './constants/sk_radiation.json';

function App() {
  const [ area, setArea ] = useState('Sodankylä')
  const [ areaForecast, setAreaForecast ] = useState([])
  const handleAreaChange = area => {
    setArea(area)
    area !== '' && axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${area}&APPID=fa14e04085cbf0a2c81663f224b25e94`)
    .then(results => {
      setAreaForecast(results.data)
    })
  }
  useEffect(() => {
    console.log(area)
  }, [area])
  console.log("phk", particles_hk);
  return (
    <div className="App" style={{ display: 'flex' }}>
      <MapTest height='100vh' width='75vw' pickArea={area => handleAreaChange(area)} forecast={areaForecast} />
      <Sidebar
        data1={area === 'Sodankylä' ? weather_sk : weather_hk}
        data2={area === 'Sodankylä' ? particles_sk : particles_hk}
        height='100vh'
        width='25vw'
        area={area}
      />
    </div>
  );
}

export default App;

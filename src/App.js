import React from 'react';
import logo from './logo.svg';
import './App.css';
import recharts from 'recharts';

import MapTest from './components/MapTest'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }} >
      <MapTest height='100vh' width='75vw' />
      <Sidebar
        height='100vh'
        width='25vw'
      />
    </div>
  );
}

export default App;

import React from 'react';
import { chart1, chart2, chart3 } from './Charts'

const Sidebar = ({
  height,
  width,
  data1,
  data2,
  data3,
}) => {
  console.log(data1);
  return (
    <div style={{ height, width, padding: 30, boxSizing: 'border-box' }}>
      { chart1() }
      { chart2() }
      { chart3() }
    </div>
  );
};

export default Sidebar;

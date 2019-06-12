import React, { useState } from 'react';
import { chart1, chart2, chart3 } from './Charts'

const Sidebar = ({
  height,
  width,
  data1,
  data2,
  data3,
}) => {
  const [slice, setSlice] = useState([0, 30])
  return (
    <div
      style={{ height, width, padding: 20, boxSizing: 'border-box' }}
      onClick={() => {
        setSlice([slice[0] + 30, slice[1] + 30])}
      }
    >
      { chart3(data1.slice(...slice)) }
    </div>
  );
};

export default Sidebar;

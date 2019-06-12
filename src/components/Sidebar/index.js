import React, { useState } from 'react';
import { chart1, chart2, chart3 } from './Charts'
import Button from '@material-ui/core/Button';

const monthFilter = (data, month) => {
  return data.filter(x => {
    const [v, k] = month.split('-');
    return x['Vuosi'] == v && (x['Kk'] == k || `0{x['Kk']}` == k)
  });
}

const monthSetter = (month, dir) => {
  const [v, k] = month.split('-');
  return dir === 'back'
    ? (k == '1'
      ? `${v-1}-12`
      : `${v}-${k-1}`)
    : (k == '12'
      ? `${Number(v)+1}-1`
      : `${v}-${Number(k)+1}`)
}

const Sidebar = ({
  height,
  width,
  data1,
  data2,
  data3,
  area
}) => {
  const [month, setMonth] = useState("2019-03");

  return (
    <div
      style={{ height, width, padding: 20, boxSizing: 'border-box' }}
    >
      { area }
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onClick={() => setMonth(monthSetter(month, 'back'))}
          color="primary"
        >
          Back
        </Button>
        <h3> { month } </h3>
        <Button
          onClick={() => setMonth(monthSetter(month, 'next'))}
          color="primary"
        >
          Next
        </Button>
      </div>
      { chart3(monthFilter(data1, month)) }
      { chart2(monthFilter(data2, month)) }
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { chart1, chart2, chart3 } from './Charts'

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
      ? `${v+1}-1`
      : `${v}-${k+1}`)
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
  console.log(month);
  console.log(monthFilter(data2, month));

  return (
    <div
      style={{ height, width, padding: 20, boxSizing: 'border-box' }}
      onClick={() => setMonth(monthSetter(month, 'back'))}
    >
      <h1> { month } </h1>
    { chart3(monthFilter(data1, month)) }
    { chart2(monthFilter(data2, month)) }
    </div>
  );
};

export default Sidebar;

import React from 'react';

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
      { data1() }
      { data2() }
      { data3() }
    </div>
  );
};

export default Sidebar;

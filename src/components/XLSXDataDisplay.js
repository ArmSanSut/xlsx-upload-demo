import React from 'react';
import { useSelector } from 'react-redux';

const XLSXDataDisplay = () => {
  const data = useSelector((state) => state.xlsx.data);

  return (
    <div>
      <h2>Uploaded Data</h2>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
};

export default XLSXDataDisplay;

import React from 'react';

const ChartWrapper = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartWrapper;

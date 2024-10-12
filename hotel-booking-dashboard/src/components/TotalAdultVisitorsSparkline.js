import React from 'react';
import Chart from 'react-apexcharts';
import ChartWrapper from './ChartWrapper';

const TotalAdultVisitorsSparkline = ({ data }) => {
  const series = [
    {
      data: data.map((item) => parseInt(item.adults) || 0), // Handle possible missing values
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: { enabled: true },
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 0.3,
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft',
        offsetX: 0,
        offsetY: -20,
      },
    },
  };

  return (
    <ChartWrapper title="Adult Visitors">
      <Chart options={options} series={series} type="area" height={100} />
    </ChartWrapper>
  );
};

export default TotalAdultVisitorsSparkline;

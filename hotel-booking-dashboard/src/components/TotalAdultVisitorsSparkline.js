import React from 'react';
import Chart from 'react-apexcharts';
import ChartWrapper from './ChartWrapper';

const TotalAdultVisitorsSparkline = ({ data }) => {
  const totalAdults = data.reduce((total, item) => total + parseInt(item.adults), 0);

  const series = [{ data: data.map((item) => parseInt(item.adults) || 0) }];

  const options = {
    chart: { type: 'area', sparkline: { enabled: true } },
    stroke: { curve: 'smooth' },
    fill: { opacity: 0.3 },
    tooltip: { enabled: true },
  };

  return (
    <ChartWrapper title={`Total Adult Visitors: ${totalAdults}`}>
      <Chart options={options} series={series} type="area" height={100} />
    </ChartWrapper>
  );
};

export default TotalAdultVisitorsSparkline;

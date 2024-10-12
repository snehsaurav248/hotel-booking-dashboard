import React from 'react';
import Chart from 'react-apexcharts';
import ChartWrapper from './ChartWrapper';

const TotalChildrenVisitorsSparkline = ({ data }) => {
  const totalChildren = data.reduce((total, item) => total + parseInt(item.children), 0);

  const series = [{ data: data.map((item) => parseInt(item.children) || 0) }];

  const options = {
    chart: { type: 'area', sparkline: { enabled: true } },
    stroke: { curve: 'smooth' },
    fill: { opacity: 0.3 },
    tooltip: { enabled: true },
  };

  return (
    <ChartWrapper title={`Total Children Visitors: ${totalChildren}`}>
      <Chart options={options} series={series} type="area" height={100} />
    </ChartWrapper>
  );
};

export default TotalChildrenVisitorsSparkline;

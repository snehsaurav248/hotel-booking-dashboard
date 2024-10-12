import React from 'react';
import Chart from 'react-apexcharts';
import ChartWrapper from './ChartWrapper';

const VisitorsTimeSeries = ({ data }) => {
  const series = [
    {
      name: 'Total Visitors',
      data: data.map((item) => ({
        x: new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`).getTime(),
        y: item.adults + item.children + item.babies,
      })),
    },
  ];

  const options = {
    chart: { type: 'line', zoom: { enabled: true } },
    xaxis: { type: 'datetime' },
    yaxis: { title: { text: 'Number of Visitors' } },
    stroke: { curve: 'smooth' },
    title: { text: 'Visitors per Day', align: 'left' },
    tooltip: { x: { format: 'dd MMM yyyy' } },
  };

  return (
    <ChartWrapper title="Visitors Per Day">
      <Chart options={options} series={series} type="line" height={300} />
    </ChartWrapper>
  );
};

export default VisitorsTimeSeries;

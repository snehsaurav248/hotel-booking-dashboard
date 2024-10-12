import React from 'react';
import Chart from 'react-apexcharts';
import ChartWrapper from './ChartWrapper';

const VisitorsByCountry = ({ data }) => {
  const countryData = data.reduce((acc, booking) => {
    const country = booking.country;
    if (!acc[country]) acc[country] = 0;
    acc[country] += booking.adults + booking.children + booking.babies;
    return acc;
  }, {});

  const series = [{ name: 'Visitors', data: Object.values(countryData) }];
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: Object.keys(countryData) },
    title: { text: 'Visitors by Country', align: 'left' },
  };

  return (
    <ChartWrapper title="Visitors by Country">
      <Chart options={options} series={series} type="bar" height={300} />
    </ChartWrapper>
  );
};

export default VisitorsByCountry;

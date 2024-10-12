import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const VisitorsTimeSeries = ({ data }) => {
  const groupedData = data.reduce((acc, booking) => {
    const date = `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`;
    acc[date] = (acc[date] || 0) + parseInt(booking.adults) + parseInt(booking.children);
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const values = Object.values(groupedData);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Visitors per Day',
        data: values,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      x: { type: 'category', title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Number of Visitors' } },
    },
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default VisitorsTimeSeries;

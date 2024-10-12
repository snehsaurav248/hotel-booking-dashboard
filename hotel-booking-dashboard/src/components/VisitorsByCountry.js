import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const VisitorsByCountry = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available for the selected date range.</p>;
  }

  const countryCounts = data.reduce((acc, booking) => {
    acc[booking.country] = (acc[booking.country] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(countryCounts);
  const values = Object.values(countryCounts);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Visitors by Country',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default VisitorsByCountry;

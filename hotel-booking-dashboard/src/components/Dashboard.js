import React, { useState, useEffect } from 'react';
import DateRangePicker from './DateRangePicker';
import VisitorsTimeSeries from './VisitorsTimeSeries';
import VisitorsByCountry from './VisitorsByCountry';
import TotalAdultVisitorsSparkline from './TotalAdultVisitorsSparkline';
import TotalChildrenVisitorsSparkline from './TotalChildrenVisitorsSparkline';
import { fetchFilteredData } from '../services/dataService';

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(
    JSON.parse(localStorage.getItem('filteredData')) || []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Store filtered data in localStorage whenever it changes
    localStorage.setItem('filteredData', JSON.stringify(filteredData));
  }, [filteredData]);

  const handleDateRangeSubmit = ({ startDate, endDate }) => {
    setIsLoading(true); // Show loading indicator
    fetchFilteredData(startDate, endDate)
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setIsLoading(false)); // Hide loading indicator
  };

  const handleClearData = () => {
    setFilteredData([]);
    localStorage.removeItem('filteredData');
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Hotel Booking Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <DateRangePicker
          onSubmit={handleDateRangeSubmit}
          onClear={handleClearData}
        />
      </div>

      {isLoading ? (
        <div className="text-center text-xl">Loading data...</div>
      ) : filteredData.length > 0 ? (
        <div className="grid grid-cols-2 gap-8">
          <VisitorsTimeSeries data={filteredData} />
          <VisitorsByCountry data={filteredData} />
          <TotalAdultVisitorsSparkline data={filteredData} />
          <TotalChildrenVisitorsSparkline data={filteredData} />
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">
          No data available. Please select a date range to view data.
        </div>
      )}
    </div>
  );
};

export default Dashboard;

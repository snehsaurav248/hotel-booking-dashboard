import React, { useState, useEffect } from 'react';
import DateRangePicker from './DateRangePicker';
import VisitorsTimeSeries from './VisitorsTimeSeries';
import VisitorsByCountry from './VisitorsByCountry';
import TotalAdultVisitorsSparkline from './TotalAdultVisitorsSparkline';
import TotalChildrenVisitorsSparkline from './TotalChildrenVisitorsSparkline';
import { fetchFilteredData } from '../services/dataService';

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const [isDateRangeApplied, setIsDateRangeApplied] = useState(false); // Track if the date range is submitted

  const handleDateRangeSubmit = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setIsDateRangeApplied(true); // Trigger data fetch only when date range is applied
  };

  useEffect(() => {
    if (isDateRangeApplied && startDate && endDate) {
      setIsLoading(true); // Show loading indicator
      fetchFilteredData(startDate, endDate)
        .then((data) => {
          console.log('Dashboard Filtered Data:', data); // Debugging log
          setFilteredData(data);
        })
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => setIsLoading(false)); // Hide loading indicator
    }
  }, [isDateRangeApplied, startDate, endDate]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Hotel Booking Dashboard
      </h1>
      <div className="flex justify-center mb-8">
        <DateRangePicker onSubmit={handleDateRangeSubmit} />
      </div>
      {isLoading ? (
        <div className="text-center text-xl">Loading data...</div>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          <VisitorsTimeSeries data={filteredData} />
          <VisitorsByCountry data={filteredData} />
          <TotalAdultVisitorsSparkline data={filteredData} />
          <TotalChildrenVisitorsSparkline data={filteredData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

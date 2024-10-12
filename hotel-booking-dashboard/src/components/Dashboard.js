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

  useEffect(() => {
    if (startDate && endDate) {
      fetchFilteredData(startDate, endDate).then(setFilteredData);
    }
  }, [startDate, endDate]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Hotel Booking Dashboard
      </h1>
      <div className="flex justify-center mb-8">
        <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <VisitorsTimeSeries data={filteredData} />
        <VisitorsByCountry data={filteredData} />
        <TotalAdultVisitorsSparkline data={filteredData} />
        <TotalChildrenVisitorsSparkline data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;

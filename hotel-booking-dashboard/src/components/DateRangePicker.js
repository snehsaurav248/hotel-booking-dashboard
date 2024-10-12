import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ setStartDate, setEndDate }) => {
  const [startDate, localSetStartDate] = useState(null);
  const [endDate, localSetEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    localSetStartDate(date);
    setStartDate(date); // Pass the value to the parent Dashboard component
  };

  const handleEndDateChange = (date) => {
    localSetEndDate(date);
    setEndDate(date); // Pass the value to the parent Dashboard component
  };

  return (
    <div className="flex space-x-4">
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select Start Date"
        className="px-4 py-2 border rounded-md"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate} // Prevent selecting an end date before the start date
        placeholderText="Select End Date"
        className="px-4 py-2 border rounded-md"
      />
    </div>
  );
};

export default DateRangePicker;

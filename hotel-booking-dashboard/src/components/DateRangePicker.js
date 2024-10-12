import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ onSubmit, onClear }) => {
  const [startDate, setStartDate] = useState(
    localStorage.getItem('startDate') ? new Date(localStorage.getItem('startDate')) : null
  );
  const [endDate, setEndDate] = useState(
    localStorage.getItem('endDate') ? new Date(localStorage.getItem('endDate')) : null
  );
  const [isOpen, setIsOpen] = useState(false);

  // Store the selected dates in localStorage whenever they change
  useEffect(() => {
    if (startDate) localStorage.setItem('startDate', startDate.toISOString());
    if (endDate) localStorage.setItem('endDate', endDate.toISOString());
  }, [startDate, endDate]);

  const toggleBox = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    if (startDate && endDate) {
      onSubmit({ startDate, endDate });
    } else {
      alert('Please select both start and end dates.');
    }
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    localStorage.removeItem('startDate');
    localStorage.removeItem('endDate');
    onClear(); // Call the onClear function passed from the parent
  };

  return (
    <div className="border rounded-md shadow-lg p-4 max-w-md mx-auto">
      <button
        onClick={toggleBox}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        {isOpen ? 'Close Date Range Picker' : 'Open Date Range Picker'}
      </button>

      {isOpen && (
        <div className="mt-4">
          <div className="flex space-x-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select Start Date"
              className="px-4 py-2 border rounded-md"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select End Date"
              className="px-4 py-2 border rounded-md"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Apply Date Range
            </button>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Clear Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

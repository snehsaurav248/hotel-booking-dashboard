import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    if (startDate && endDate) {
      onSubmit({ startDate, endDate });
    } else {
      alert('Please select both start and end dates.');
    }
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
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Apply Date Range
          </button>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

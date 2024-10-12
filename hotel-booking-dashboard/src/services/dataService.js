// services/dataService.js
import axios from 'axios';
import Papa from 'papaparse';
import moment from 'moment';

export const fetchFilteredData = async (startDate, endDate) => {
  try {
    const response = await axios.get('/hotel_bookings_1000.csv'); // Ensure the file is in public folder

    const parsedData = await new Promise((resolve, reject) => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => resolve(result.data),
        error: (error) => reject(error),
      });
    });

    console.log('Parsed Data:', parsedData); // Debug log

    // Filter the data by the provided date range
    const filteredData = parsedData.filter((booking) => {
      const bookingDate = moment(
        `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`,
        'YYYY-M-D'
      );

      return (
        bookingDate.isBetween(startDate, endDate, null, '[]') && // Inclusive date range
        bookingDate.isValid()
      );
    });

    console.log('Filtered Data:', filteredData); // Debug log
    return filteredData;

  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return [];
  }
};

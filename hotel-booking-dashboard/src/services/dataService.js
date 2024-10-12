import axios from 'axios';
import Papa from 'papaparse';
import moment from 'moment';

export const fetchFilteredData = async (startDate, endDate) => {
  try {
    const response = await axios.get('/hotel_bookings_1000.csv'); // Load CSV
    const parsedData = await new Promise((resolve, reject) => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => resolve(result.data),
        error: (error) => reject(error),
      });
    });

    console.log('Parsed Data:', parsedData); // Debugging: Ensure data is loaded correctly

    // Filter the data based on date range
    const filteredData = parsedData.filter((booking) => {
      const bookingDate = moment(
        `${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`,
        'YYYY-M-D'
      );

      return (
        bookingDate.isBetween(startDate, endDate, null, '[]') &&
        !isNaN(bookingDate) // Ensure valid dates
      );
    });

    console.log('Filtered Data:', filteredData); // Debugging: Ensure filtering works

    return filteredData;
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return [];
  }
};

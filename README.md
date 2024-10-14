Hotel Booking Dashboard
A Hotel Booking Dashboard built with React.js, ApexCharts, and Tailwind CSS to visualize hotel booking data. The dashboard provides insightful visualizations including:

Time Series Chart: Number of visitors per day.
Column Chart: Number of visitors per country.
Sparkline Charts: Trends of adult and children visitors.
This project uses a CSV dataset for hotel bookings and dynamically updates the charts based on the selected date range.

Features
Time Series Chart: Displays total visitors (adults + children + babies) per day.
Column Chart: Shows the number of visitors per country.
Sparkline Charts: Visualizes trends for adult and children visitors.
Date Range Picker: Filters data dynamically based on the selected date range

Project Structure

hotel-booking-dashboard/
│
├── public/
│   └── hotel_bookings_1000.csv        # CSV dataset
│
├── src/
│   ├── components/
│   │   ├── Dashboard.js               # Main dashboard component
│   │   ├── DateRangePicker.js         # Date range picker component
│   │   ├── VisitorsTimeSeries.js      # Time series chart
│   │   ├── VisitorsByCountry.js       # Column chart for visitors per country
│   │   ├── TotalAdultVisitorsSparkline.js  # Sparkline for adult visitors
│   │   ├── TotalChildrenVisitorsSparkline.js  # Sparkline for children visitors
│   │   ├── ChartWrapper.js            # Wrapper for consistent chart styling
│   │
│   ├── services/
│   │   └── dataService.js             # Service to fetch and filter data from CSV
│   │
│   ├── App.js                         # Main app component
│   └── index.js                       # Entry point for React
│
├── package.json                       # Project dependencies
├── tailwind.config.js                 # Tailwind CSS configuration
└── README.md                          # Project documentation



Usage
Select a Date Range using the Date Range Picker.
The Time Series Chart will show total visitors per day within the selected range.
The Column Chart displays the number of visitors by country.
The Sparkline Charts visualize trends for adult and children visitors over time.

Technologies Used

React.js: For building the frontend.
ApexCharts: For interactive and responsive charts.
Tailwind CSS: For styling the dashboard.
PapaParse: To parse the CSV dataset.
Axios: For fetching the dataset.
Moment.js: For date handling and filtering

CSV Dataset

The CSV dataset (hotel_bookings_1000.csv) contains 1,000 records with the following columns:

arrival_date_year: Year of booking.
arrival_date_month: Month of booking.
arrival_date_day_of_month: Day of booking.
adults: Number of adult guests.
children: Number of children guests.
babies: Number of babies.
country: Guest's country of origin.

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new API
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create and render the root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

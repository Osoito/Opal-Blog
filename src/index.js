import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/home.css';  // Make sure this file exists in src/css/
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches the id in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

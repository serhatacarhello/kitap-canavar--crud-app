import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// For to use toastify library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);

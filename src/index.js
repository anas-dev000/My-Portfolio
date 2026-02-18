import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
 * Suppress the benign "ResizeObserver loop completed with undelivered
 * notifications" warning in development. This is a known false-positive
 * triggered by browser extensions / fast layout reflows and has no effect
 * on app behaviour. It never appears in production builds.
 */
if (process.env.NODE_ENV === 'development') {
  const _consoleError = window.onerror;
  window.onerror = (message, ...rest) => {
    if (typeof message === 'string' && message.includes('ResizeObserver loop')) {
      return true; // suppress — prevents the red overlay from appearing
    }
    return _consoleError ? _consoleError(message, ...rest) : false;
  };
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

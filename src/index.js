// 1. All Imports MUST come first
import { Buffer } from 'buffer';
import React from 'react';
import ReactDOM from 'react-dom/client';
// If you don't have index.css, remove the next line
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// 2. Initialize Buffer AFTER imports
global.Buffer = Buffer;

// 3. Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
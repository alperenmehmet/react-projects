import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

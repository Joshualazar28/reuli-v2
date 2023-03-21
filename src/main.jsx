import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StoreProvider } from './StoreContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
      <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </StoreProvider>

);

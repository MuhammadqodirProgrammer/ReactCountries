import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/Theme/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
<ThemeProvider >
    <App />
</ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
);


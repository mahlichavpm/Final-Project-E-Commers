import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< Updated upstream
import { BrowserRouter } from 'react-router-dom';
=======
import { ThemeProvider } from '@emotion/react';
import{theme} from './theme'
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
<<<<<<< Updated upstream
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
>>>>>>> Stashed changes
  </React.StrictMode>
);

reportWebVitals();

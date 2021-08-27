import React from 'react';
import Router from './router';
import ReactDOM from 'react-dom';
import './assets/styles/Reset.css';
import './assets/styles/RootStyles.css';
import './assets/styles/Fonts.css';
import GlobalStyles from './assets/styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

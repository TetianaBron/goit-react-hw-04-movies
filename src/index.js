import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/modern-normalize/modern-normalize.css';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);

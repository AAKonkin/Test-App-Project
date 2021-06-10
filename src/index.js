import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { APIState } from './context/APIState';

ReactDOM.render(
  <React.StrictMode>
    <APIState>
      <App />
    </APIState>
  </React.StrictMode>,
  document.getElementById('root')
);

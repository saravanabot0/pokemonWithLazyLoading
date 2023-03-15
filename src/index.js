import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const LazyApp = React.lazy(()=> import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

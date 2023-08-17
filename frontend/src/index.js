import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './foundation.min.css'
import './index.css';
import { Provider } from 'react-redux';
import store from './mycloud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
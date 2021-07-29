import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'; 
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
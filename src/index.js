import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'; 
import App from './App';

import {Provider} from "react-redux"
import { createStore } from 'redux';
import {reducer} from "./redux/reducer/reducer"

const store = createStore(reducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
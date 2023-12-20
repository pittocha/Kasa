import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './pages/home/index';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Header />
    <App />
  </Router>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

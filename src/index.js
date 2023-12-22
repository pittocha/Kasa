import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/home/index';
import Header from './components/Header';
import Error from './components/Error';
import About from './pages/about'
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

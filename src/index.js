import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Navigation from './components/Navigation';
import PageFooter from './components/PageFooter';
import Offerings from './components/Offerings';

const navItems = [
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Our Services',
    path: '/services',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
   <HashRouter>
  <Navigation navItems={navItems} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/services" element={<Offerings />} />
  </Routes>
  <PageFooter navItems={navItems} />
</HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

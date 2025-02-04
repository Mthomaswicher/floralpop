import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BookNow from './pages/BookNow';
import OurServices from './pages/OurServices';
import Navigation from './components/Navigation';
import PageFooter from './components/PageFooter';

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
    <Navigation navItems={navItems} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </BrowserRouter>
    <PageFooter navItems={navItems} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

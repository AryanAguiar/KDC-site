import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Layout from './components/Layouts';
import Companies from './pages/Companies'
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Contactus from './pages/Contactus'; 
import ScrollToTop from './components/ScrollToTop';
import Scroll from './Scroll';
import Blogs from './pages/Blogs';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
    <Scroll/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/company' element={<Companies/>} />
          <Route path='/industries' element={<Industries/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contactus/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Route>
      </Routes>
      <ScrollToTop/>
    </>
  );
};

export default App;

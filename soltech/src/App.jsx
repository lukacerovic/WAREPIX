import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Web from './pages/Web';
import Mobile from './pages/Mobile';
import Logo from './pages/Logo';
import WorkDetails from './pages/WorkDetails';
import AboutUs from './pages/AboutUs';
import MVP from './pages/MVP';
import Animation from './pages/Animations';
import Maintain from './pages/Maintain';

export default function App() {
 
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/mvp" element={<MVP />} />
        <Route path="/animations" element={<Animation />} />
        <Route path="/maintain" element={<Maintain />} />
        <Route path="/work-details" element={<WorkDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      
    </BrowserRouter>
  );
}

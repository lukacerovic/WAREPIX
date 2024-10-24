import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Web from './pages/Web';
import Mobile from './pages/Mobile';
import Design from './pages/Design';
import WorkDetails from './pages/WorkDetails';
import AboutUs from './pages/AboutUs';
import MVP from './pages/MVP';
import Animation from './pages/Animations';

export default function App() {
 
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/design" element={<Design />} />
        <Route path="/mvp" element={<MVP />} />
        <Route path="/animations" element={<Animation />} />
        <Route path="/work-details" element={<WorkDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      
    </BrowserRouter>
  );
}

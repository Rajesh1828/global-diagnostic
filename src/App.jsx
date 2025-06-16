import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Loader from './components/Loader/Loader';
import PageLoaderWrapper from './components/PageLoaderWrapper/PageLoaderWrapper'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Diagnostics from './pages/Diagnostics';
import HealthPackages from './pages/HealthPackages';
import Pathology from './pages/Pathology';
import MicroBiology from './pages/MicroBiology';
import BioChemistry from './pages/BioChemistry';
import Pharmacy from './pages/Pharmacy';
import TotalConcepts from './pages/TotalConcepts';

const App = () => {
  return (
    <>
      <Navbar />

      <PageLoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/healthpackages" element={<HealthPackages />} />
          <Route path="/pathology" element={<Pathology />} />
          <Route path="/microbiology" element={<MicroBiology />} />
          <Route path="/biochemistry" element={<BioChemistry />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/totalconcepts" element={<TotalConcepts />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PageLoaderWrapper>

      <Footer />
    </>
  );
};

export default App;

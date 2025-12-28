import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Register from './pages/Register';
import CertificateGenerator from './pages/CertificateGenerator';

function App() {
  const location = useLocation();
  console.log('Current Location:', location);

  return (
    <div className="App">
      <ScrollToTop />
      <div id="page-transition-overlay" className="page-transition-overlay"></div>

      <Navbar />

      <Routes>
        {/* TEST ROUTE */}
        <Route path="/test" element={<h1 style={{ marginTop: '100px', textAlign: 'center', color: 'green' }}>ROUTER IS FIXED</h1>} />

        <Route path="/certificate" element={<CertificateGenerator />} />
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />

        {/* CATCH ALL */}
        <Route path="*" element={<div style={{ marginTop: '100px', textAlign: 'center', color: 'red' }}><h1>404 Not Found</h1><p>Current Path: {location.pathname}</p></div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
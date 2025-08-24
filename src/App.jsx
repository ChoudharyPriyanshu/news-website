import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Wheels from './pages/Wheels';
import Watch from './pages/Watch';
import Audio from './pages/Audio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-24 min-h-screen"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/wheels" element={<Wheels />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/audio" element={<Audio />} />
          </Routes>
        </motion.main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
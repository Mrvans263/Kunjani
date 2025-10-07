import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Feed from './pages/social/Feed';
import Marketplace from './pages/marketplace/Marketplace';
import Flights from './pages/travel/Flights';
import Money from './pages/money/Money';

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f3f4f6',
        fontFamily: 'system-ui, sans-serif' 
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/money" element={<Money />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
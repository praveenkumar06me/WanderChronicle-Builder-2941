import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './pages/Dashboard';
import MapJournal from './pages/MapJournal';
import Gallery from './pages/Gallery';
import Expenses from './pages/Expenses';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map-journal" element={<MapJournal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
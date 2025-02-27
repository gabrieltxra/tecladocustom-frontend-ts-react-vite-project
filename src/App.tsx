import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { KeyboardProvider } from './context/KeyboardContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <KeyboardProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/builder" element={<BuilderPage />} />
              <Route path="/community" element={<CommunityPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </KeyboardProvider>
  );
}

export default App;
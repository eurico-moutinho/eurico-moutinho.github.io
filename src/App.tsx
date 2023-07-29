import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
import Home from './pages/home/Home';
import Projectos from './pages/projectos/Projectos';
import PieControl from './components/pieControl/PieControl';
import BottomPieControl from './components/bottomMenu/BottomPieControl';
import AboutMe from './pages/about/AboutMe';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <Router>
        <PieControl />
        <BottomPieControl />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projectos />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;

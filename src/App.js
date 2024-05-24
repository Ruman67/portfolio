import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import ResumeIn from './Components/Resume/ResumeIn';
import Home from './Components/Home';
import Skill from './Components/Skill/Skills';
import About from './Components/About/About';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<ResumeIn />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    );
}
export  default App;
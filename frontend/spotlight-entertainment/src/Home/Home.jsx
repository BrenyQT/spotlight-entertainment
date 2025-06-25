import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomepageCarousel from "../Components/HomepageCarousel/HomepageCarousel";
function Home() {
    return (
        <Router>
            <HomepageCarousel />
            <Navbar />
            <div className="container mx-auto px-4 py-8 relative z-10">
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Home;

import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Phone, Mail ,Linkedin,Instagram } from 'lucide-react';
import Footer from './components/footer'
import Gallery from './components/galary.jsx'
import Home from './components/home.jsx'
import Club from './components/club.jsx'
import { HashRouter, Routes, Route } from "react-router-dom";
import CookiePolicy from './components/cookie.jsx';
import PrivacyPolicy from './components/privacy.jsx';
import TermsOfService from './components/tos.jsx';
import Leader from './components/leader.jsx';


function App() {
 
 

  return (
    <>
    <div className="min-h-[100vh]   bg-repeat bg-stone-900  backdrop-blur-xl  linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)">
   <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/leaderboard" element={<Leader />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
    </>
  )
}

export default App

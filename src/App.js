import React, { useRef } from 'react';
import './App.css';
import RealEstateLandingPage from './components/RealEstateLandingPage';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';
import Thankyou from './components/Thankyou';
import Marquee from './components/MarqueeContent';

const App = () => {
  const avatar_url = './images/iris-logo.svg';

  const sectionsRefs = {
    hero: useRef(null),
    about: useRef(null),
    features: useRef(null),
    tabs: useRef(null),
    gallery: useRef(null),
    amenities: useRef(null),
    priceList: useRef(null),
    map: useRef(null),
    brands: useRef(null),
    cta: useRef(null),
    contact: useRef(null),
  };


  return (
    <BrowserRouter>
      <Navbar sectionsRefs={sectionsRefs} />

      <Routes>
        <Route path="/" element={<RealEstateLandingPage sectionsRefs={sectionsRefs} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
      <FloatingWhatsApp
        avatar={avatar_url}
        phoneNumber={+91999999999}
        accountName={"MVN Mall"}
        allowEsc={true}
        allowClickAway={true}
      />
    </BrowserRouter>
  );
};

export default App;

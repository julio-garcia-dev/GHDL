import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PracticeAreas } from './pages/PracticeAreas';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { OurLawyers } from './pages/OurLawyers';
import { AccessibilityControl } from './components/AccessibilityControl';
import { AccessConfig } from './types';

const App: React.FC = () => {
  // Global Accessibility State
  const [accessConfig, setAccessConfig] = useState<AccessConfig>({
    highContrast: false,
    largeText: false,
    dyslexiaFriendly: false,
  });

  // Apply global classes to body based on config
  useEffect(() => {
    const body = document.body;
    
    if (accessConfig.largeText) {
      body.classList.add('text-xl');
    } else {
      body.classList.remove('text-xl');
    }

    if (accessConfig.dyslexiaFriendly) {
      // Simulating a font change via class - in a real app, we'd load OpenDyslexic
      body.style.fontFamily = '"Comic Sans MS", "Chalkboard SE", sans-serif'; 
    } else {
      body.style.fontFamily = '';
    }

    return () => {
      body.classList.remove('text-xl');
      body.style.fontFamily = '';
    };
  }, [accessConfig]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen font-sans transition-colors duration-200
        ${accessConfig.highContrast ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}
      `}>
        <Header accessConfig={accessConfig} />
        
        <Routes>
          <Route path="/" element={<Home accessConfig={accessConfig} />} />
          <Route path="/practice-areas" element={<PracticeAreas accessConfig={accessConfig} />} />
          <Route path="/our-lawyers" element={<OurLawyers accessConfig={accessConfig} />} />
          <Route path="/contact" element={<Contact accessConfig={accessConfig} />} />
          <Route path="/about" element={<About accessConfig={accessConfig} />} />
        </Routes>

        <Footer accessConfig={accessConfig} />
        
        <AccessibilityControl config={accessConfig} setConfig={setAccessConfig} />
      </div>
    </Router>
  );
};

export default App;
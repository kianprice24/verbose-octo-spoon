import React from 'react';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TalentsSection from './components/TalentsSection';
import AboutUsSection from './components/AboutUsSection';
import SlowLoadingScreen from './components/SlowLoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {isLoading && <SlowLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Hero />
      <ServicesSection />
      <TalentsSection />
      <AboutUsSection />
    </div>
  );
}

export default App;

import React from 'react';
// CORREÇÃO AQUI: Importamos o HashRouter (apelidado de Router) para o site saber navegar
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureMarquee from './components/FeatureMarquee';
import EmotionalJourney from './components/EmotionalJourney';
import NyaIntroduction from './components/NyaIntroduction';
import Comparison from './components/Comparison';
import ConversationalFlow from './components/ConversationalFlow'; 
import DeepDive from './components/DeepDive';
import SacredSpace from './components/SacredSpace';
import SensationCards from './components/SensationCards';
import HarmonyObjection from './components/HarmonyObjection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

// Pages
import Terms from './src/pages/Terms';
import Privacy from './src/pages/Privacy';

const LandingPage: React.FC = () => (
  <>
    <Navbar />
    <main className="flex flex-col pb-0">
      <div className="w-full bg-transparent">
        <Hero />
        <FeatureMarquee />
      </div>
      <div className="w-full bg-transparent">
        <EmotionalJourney />
      </div>
      <div className="bg-transparent">
        <NyaIntroduction />
      </div>
      <div className="flex flex-col gap-0 mt-0">
        <Comparison />
        <ConversationalFlow />
        <DeepDive />
        <SacredSpace />
        <SensationCards />
        <HarmonyObjection />
        <Pricing />
        <FAQ />
      </div>
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    // CORREÇÃO AQUI: O <Router> precisa abraçar TUDO para funcionar
    <Router>
      <BackgroundWrapper>
        <div className="min-h-screen relative overflow-hidden text-white selection:bg-lavender selection:text-midnight font-sans">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
          </Routes>
        </div>
      </BackgroundWrapper>
    </Router>
  );
};

export default App;

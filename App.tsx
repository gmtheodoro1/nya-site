import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureMarquee from './components/FeatureMarquee';
import EmotionalJourney from './components/EmotionalJourney';
import NyaIntroduction from './components/NyaIntroduction';
import Comparison from './components/Comparison';
import SacredSpace from './components/SacredSpace';
import CourseGenerator from './components/CourseGenerator';
import DeepDive from './components/DeepDive';
import SensationCards from './components/SensationCards';
import HarmonyObjection from './components/HarmonyObjection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ'; // ✨ Importei o FAQ aqui
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

const App: React.FC = () => {
  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative overflow-hidden text-white selection:bg-lavender selection:text-midnight font-sans">
        
        <Navbar />
        
        {/* Tirei o padding extra do final (pb-0) */}
        <main className="flex flex-col pb-0">
          
          {/* BLOCK A: Hero Wrapper (Transparent for Seamless Flow) */}
          <div className="w-full bg-transparent">
            <Hero />
            <FeatureMarquee />
          </div>
          
          {/* BLOCK B: Emotional Pain (Transparent) */}
          <div className="w-full bg-transparent">
            <EmotionalJourney />
          </div>
          
          {/* Rest of the narrative flow */}
          <div className="bg-transparent">
            <NyaIntroduction />
          </div>
          
          {/* AQUI FOI O AJUSTE PRINCIPAL:
              Mudei de 'gap-24 md:gap-32 mt-24' para 'gap-0 mt-0'.
              Agora as seções se conectam sem aquele abismo no meio! 
          */}
          <div className="flex flex-col gap-0 mt-0">
            <Comparison />
            <SacredSpace />
            <CourseGenerator />
            <DeepDive />
            <SensationCards />
            <HarmonyObjection />
            <Pricing />
            <FAQ /> {/* ✨ Encaixei ele aqui, fechando o fluxo de vendas */}
          </div>
        </main>

        <Footer />
      </div>
    </BackgroundWrapper>
  );
};

export default App;

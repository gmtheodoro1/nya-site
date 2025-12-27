import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sensor Turbo 3-em-1: Verifica a janela, o documento ou o corpo.
      // Se qualquer um deles mexer, a gente ativa o vidro!
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      
      if (scrollPosition > 0) { // Mudei para > 0 para ser instantâneo
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o sensor
    window.addEventListener('scroll', handleScroll);
    
    // Check inicial caso a página já carregue rolada
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#131129]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3' // Vidro ativado
          : 'bg-transparent py-6' // Transparente no topo
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-lavender to-deepPurple flex items-center justify-center shadow-[0_0_15px_rgba(194,167,228,0.3)] group-hover:scale-110 transition-transform duration-300">
             <span className="text-white font-serif italic font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-serif text-white tracking-wide">Nya</span>
        </div>

        {/* Botão Planos */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#aae4a7]/10 hover:bg-[#aae4a7]/20 border border-[#aae4a7]/30 transition-all group backdrop-blur-sm shadow-[0_0_10px_rgba(170,228,167,0.1)] hover:shadow-[0_0_20px_rgba(170,228,167,0.3)]">
            <Sparkles className="w-4 h-4 text-[#aae4a7] group-hover:text-white transition-colors" />
            <span className="text-sm text-[#aae4a7] font-bold tracking-wide group-hover:text-white transition-colors">Planos</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
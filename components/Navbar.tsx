import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sensor Turbo 3-em-1: Verifica a janela, o documento ou o corpo.
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      
      if (scrollPosition > 0) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#131129]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area - COM LAZY LOADING */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="https://i.postimg.cc/fRGstCb0/icone-final.png" 
            alt="Nya Logo"
            loading="lazy"
            className="w-9 h-9 rounded-full object-cover shadow-[0_0_15px_rgba(194,167,228,0.3)] group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-serif text-white tracking-wide group-hover:text-[#c2a7e4] transition-colors duration-300">Nya</span>
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

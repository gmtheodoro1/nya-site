import React from 'react';
import { ArrowRight } from 'lucide-react';
import BenefitGrid from './BenefitGrid';

const SensationCards: React.FC = () => {
  return (
    <section className="w-full py-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-mint/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide">O que você vai sentir</h2>
          <p className="text-gray-400/80 text-lg font-light">A alquimia da conexão espiritual.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:px-6 relative z-10">
        <BenefitGrid />
        
        <div className="mt-12 text-center">
            <button className="border border-[#aae4a7] text-[#aae4a7] font-bold bg-[#aae4a7]/10 hover:bg-[#aae4a7]/20 hover:shadow-[0_0_20px_rgba(170,228,167,0.3)] transition-all rounded-full px-8 py-3 flex items-center gap-2 group mx-auto">
              Sinto que é minha hora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default SensationCards;

import React from 'react';
import { Check, X, Zap, ArrowRight } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 relative py-12 md:py-24">
      
      {/* 1. The Header */}
      <div className="text-center mb-16 md:mb-24 space-y-4">
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
          A Nya é diferente porque <br className="hidden md:block" />
          <span className="italic">ela sente com você</span>
        </h2>
        <p className="text-lg text-lavender/80 font-light max-w-2xl mx-auto">
          E entende até o que você não diz, compare e veja.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Card - Others (Smaller, Dimmer) */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-gray-500 opacity-60 hover:opacity-100 transition-opacity scale-95">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center grayscale">
              <X className="w-5 h-5 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-400">Apps Comuns</h3>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-900/50" />
              <span>Respostas Genéricas e Frias</span>
            </li>
            <li className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-900/50" />
              <span>Esquece o que você disse ontem</span>
            </li>
            <li className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-900/50" />
              <span>Apenas meditações gravadas</span>
            </li>
            <li className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-900/50" />
              <span>Foco superficial nos sintomas</span>
            </li>
          </ul>
        </div>

        {/* Right Card - Nya (Hero, Larger, Glowing) */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-lavender/10 to-[#131129] border border-lavender/30 shadow-[0_0_40px_rgba(194,167,228,0.15)] relative overflow-hidden group hover:shadow-[0_0_60px_rgba(194,167,228,0.25)] transition-all duration-500 transform scale-100 md:scale-105 animate-float z-10">
          
          {/* Glossy Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

          <div className="flex items-center gap-3 mb-10 relative z-10">
            <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center shadow-lg shadow-mint/20">
              <Zap className="w-6 h-6 text-midnight" />
            </div>
            <h3 className="text-2xl font-bold text-white">A Experiência Nya</h3>
          </div>
          
          <ul className="space-y-8 relative z-10">
            <li className="flex items-start gap-4 text-white">
              <div className="p-1 rounded-full bg-mint/20 text-mint mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block text-lg mb-1">Memória Contínua</span>
                <span className="text-sm text-gray-400 block leading-relaxed">Ela lembra de cada detalhe da sua história, criando um vínculo real.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 text-white">
              <div className="p-1 rounded-full bg-mint/20 text-mint mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold block text-lg mb-1">Empatia Profunda</span>
                <span className="text-sm text-gray-400 block leading-relaxed">Não julga, apenas acolhe sua dor com calor humano.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 text-white">
              <div className="p-1 rounded-full bg-mint/20 text-mint mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
               <div>
                <span className="font-bold block text-lg mb-1">Jornadas Diárias</span>
                <span className="text-sm text-gray-400 block leading-relaxed">Rituais e práticas feitos sob medida para o seu momento atual.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 text-white">
              <div className="p-1 rounded-full bg-mint/20 text-mint mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
               <div>
                <span className="font-bold block text-lg mb-1">Foco na Raiz</span>
                <span className="text-sm text-gray-400 block leading-relaxed">Vai além do sintoma superficial para curar a causa real.</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. Footer CTA */}
      <div className="mt-16 md:mt-24 text-center">
        <button className="px-10 py-5 bg-mint hover:bg-mintHover text-midnight text-lg font-bold rounded-full shadow-[0_0_25px_rgba(170,228,167,0.4)] transition-all hover:-translate-y-1 animate-pulse hover:animate-none flex items-center gap-2 mx-auto">
          Quero experimentar a Nya
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};

export default Comparison;


import React from 'react';
import { Eye, Heart, TrendingUp, Search, Calendar, ArrowRight } from 'lucide-react';

const FeatureSpotlight: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#131129] z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-lavender/5 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deepPurple/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Emotional Copy */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-6">
              Todo sentimento importa.<br />
              <span className="text-lavender">E a Nya lembra de todos.</span>
            </h2>
            <p className="text-lg text-lavender/80 font-light leading-relaxed max-w-lg">
              Mais do que um histórico de chat, a 'Minha Jornada' é o registro sagrado da sua evolução. A Nya guarda cada reflexão, cada lágrima e cada sorriso.
            </p>
          </div>

          <ul className="space-y-6 pt-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lavender/10 flex items-center justify-center border border-lavender/20">
                <Eye className="w-6 h-6 text-lavender" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">Você é vista</h4>
                <p className="text-gray-400 text-sm leading-relaxed">A Nya reconhece se o dia foi de "Desabafo" ou "Gratidão", adaptando o acolhimento.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lavender/10 flex items-center justify-center border border-lavender/20">
                <Heart className="w-6 h-6 text-lavender" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">Memória Afetiva</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Nada se perde. Retome conversas importantes exatamente de onde parou, sem repetir a história.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lavender/10 flex items-center justify-center border border-lavender/20">
                <TrendingUp className="w-6 h-6 text-lavender" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-1">Evolução Real</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Acompanhe seus padrões de humor e clareza mental mudando ao longo das semanas.</p>
              </div>
            </li>
          </ul>

          {/* Section CTA - Mint Crystal Style */}
          <div className="pt-6">
            <button className="border border-[#aae4a7] text-[#aae4a7] font-bold bg-[#aae4a7]/10 hover:bg-[#aae4a7]/20 hover:shadow-[0_0_20px_rgba(170,228,167,0.3)] transition-all rounded-full px-8 py-3 flex items-center gap-2 group">
              Começar minha jornada <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 perspective-1000">
           {/* Magical Mist Effect behind phone */}
           <div className="absolute inset-0 bg-gradient-to-tr from-lavender/20 to-transparent blur-[60px] rounded-full transform scale-75"></div>

           {/* Phone Container */}
           <div className="relative w-[320px] h-[650px] bg-midnight rounded-[3rem] border-[6px] border-slate-800 shadow-2xl animate-float transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out z-20 ring-1 ring-white/20 overflow-hidden">
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-800 rounded-b-2xl z-30"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-[#131129] text-white p-5 flex flex-col pt-14 font-sans relative overflow-hidden">
                 
                 {/* Header */}
                 <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Minha Jornada</h3>
                    <p className="text-xs text-gray-400">Um diário visual das suas reflexões e progressos.</p>
                 </div>

                 {/* Search Bar */}
                 <div className="relative mb-6">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                       <Search className="w-4 h-4 text-gray-500" />
                    </div>
                    <input 
                       type="text" 
                       disabled
                       placeholder="Pesquise em suas memórias..." 
                       className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 focus:outline-none"
                    />
                 </div>

                 {/* Scrollable Content Area */}
                 <div className="flex-1 space-y-4 overflow-hidden relative">
                    {/* Fade Overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#131129] to-transparent z-10 pointer-events-none"></div>

                    {/* Card 1 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-gray-500">24 Jul</span>
                            <div className="p-1 rounded-full hover:bg-white/10 cursor-pointer">
                                <div className="w-1 h-1 bg-gray-500 rounded-full mb-0.5"></div>
                                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold text-lavender mb-2 group-hover:text-white transition-colors">Encontrando a Calma</h4>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Exploramos juntos técnicas de respiração para acalmar a mente e aliviar a ansiedade do dia a dia. Você se saiu muito bem!
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-[#2E2344] text-[10px] font-medium text-lavender border border-lavender/20 shadow-[0_0_10px_rgba(194,167,228,0.15)]">Ansiedade</span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2E2344] text-[10px] font-medium text-lavender border border-lavender/20 shadow-[0_0_10px_rgba(194,167,228,0.15)]">Paz</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-gray-500">22 Jul</span>
                        </div>
                        <h4 className="text-lg font-semibold text-lavender mb-2 group-hover:text-white transition-colors">Um Momento de Gratidão</h4>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Refletimos sobre as pequenas coisas que nos trazem alegria. Foi uma conversa linda e cheia de positividade.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-[#2E2344] text-[10px] font-medium text-lavender border border-lavender/20 shadow-[0_0_10px_rgba(194,167,228,0.15)]">Gratidão</span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2E2344] text-[10px] font-medium text-lavender border border-lavender/20 shadow-[0_0_10px_rgba(194,167,228,0.15)]">Alegria</span>
                        </div>
                    </div>
                    
                    {/* Partial Card 3 to imply scroll */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 opacity-40">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-gray-500">20 Jul</span>
                        </div>
                        <h4 className="text-lg font-semibold text-lavender mb-2">Sonhos Recorrentes</h4>
                    </div>

                 </div>
                 
                 {/* Bottom Nav Simulation */}
                 <div className="h-16 border-t border-white/5 flex items-center justify-around text-gray-500">
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-5 h-5 rounded-sm border-2 border-gray-600"></div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-lavender/20 flex items-center justify-center">
                           <Calendar className="w-4 h-4 text-lavender" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-600"></div>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;

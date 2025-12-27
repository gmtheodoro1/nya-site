
import React from 'react';
import { Sparkles, ChevronDown, Wand2, ArrowRight, Check } from 'lucide-react';

const CourseGenerator: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Glows - subtle blend */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-lavender/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-mint/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
            <Wand2 className="w-3 h-3 text-mint" />
            <span className="text-xs font-medium text-mint uppercase tracking-wider">Criação Mágica</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
            Diga o que sua alma precisa. <br className="hidden md:block" />
            <span className="text-lavender">A Nya cria o caminho.</span>
          </h2>
          
          <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Escolha seu foco, seu tempo, sua intenção. Em segundos, uma jornada personalizada nasce, feita com presença, sabedoria e cuidado só pra você. É como ter um plano de cura emocional na palma da sua mão, criado por alguém que realmente te entende.
          </p>

          {/* The "You Choose" Block */}
          <div className="pt-6 pb-4">
            <p className="text-white font-medium mb-6 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-mint" /> 
                Você escolhe:
            </p>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-gray-300">
               <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="bg-mint/10 p-0.5 rounded-full"><Check className="w-3 h-3 text-mint" /></div>
                  <span>Qualquer tema (criação infinita)</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="bg-mint/10 p-0.5 rounded-full"><Check className="w-3 h-3 text-mint" /></div>
                  <span>A duração: 3, 5 ou 7 dias</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="bg-mint/10 p-0.5 rounded-full"><Check className="w-3 h-3 text-mint" /></div>
                  <span>O tempo: 5, 10 ou 15 min/dia</span>
               </div>
            </div>
          </div>

          {/* Closing Punchline */}
          <p className="text-xl md:text-2xl font-serif italic text-mint/90 pt-2">
            "Tudo no seu ritmo. Do seu jeito. Com sua verdade."
          </p>
        </div>

        {/* Deconstructed UI Visuals */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-5xl mx-auto min-h-[400px]">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-20 z-0 pointer-events-none opacity-50">
             <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(194, 167, 228, 0)" />
                   <stop offset="50%" stopColor="rgba(170, 228, 167, 0.8)" />
                   <stop offset="100%" stopColor="rgba(194, 167, 228, 0)" />
                 </linearGradient>
               </defs>
               <path d="M0,50 C100,50 300,50 400,50" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="10 5">
                 <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
               </path>
             </svg>
             {/* Particles */}
             <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-20">
               <div className="w-2 h-2 bg-mint rounded-full animate-[ping_1.5s_linear_infinite]"></div>
               <div className="w-1.5 h-1.5 bg-lavender rounded-full animate-[ping_1.5s_linear_infinite_0.5s]"></div>
               <div className="w-2 h-2 bg-white rounded-full animate-[ping_1.5s_linear_infinite_1s]"></div>
             </div>
          </div>

          {/* Left Card: Input */}
          <div className="relative z-10 w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float md:-mr-12">
            <div className="flex items-center gap-2 mb-6 opacity-70">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 uppercase tracking-wide">Seu objetivo</label>
                <div className="bg-black/40 border border-white/5 rounded-lg p-3 text-white text-sm">
                  Curso para aliviar ansiedade
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-1 space-y-1.5">
                   <label className="text-xs text-gray-400 uppercase tracking-wide">Duração</label>
                   <div className="bg-black/40 border border-white/5 rounded-lg p-2.5 flex justify-between items-center">
                     <span className="text-xs text-gray-300">7 Dias</span>
                     <ChevronDown className="w-3 h-3 text-gray-500" />
                   </div>
                </div>
                <div className="flex-1 space-y-1.5">
                   <label className="text-xs text-gray-400 uppercase tracking-wide">Tempo/dia</label>
                   <div className="bg-black/40 border border-white/5 rounded-lg p-2.5 flex justify-between items-center">
                     <span className="text-xs text-gray-300">10 Min</span>
                     <ChevronDown className="w-3 h-3 text-gray-500" />
                   </div>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full bg-mint hover:bg-mintHover text-midnight font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(170,228,167,0.3)] hover:shadow-[0_0_25px_rgba(170,228,167,0.5)] flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Criar Agora
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Connector Arrow */}
          <div className="md:hidden flex flex-col items-center gap-1 text-mint/50 py-4">
             <div className="w-1 h-2 bg-current rounded-full"></div>
             <div className="w-1 h-2 bg-current rounded-full"></div>
             <div className="w-1 h-2 bg-current rounded-full"></div>
             <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Right Card: Result (Chat Interface) */}
          <div className="relative z-10 w-[300px] bg-gradient-to-br from-lavender/10 to-deepPurple/30 backdrop-blur-xl border border-lavender/30 rounded-3xl shadow-[0_0_40px_rgba(194,167,228,0.15)] animate-float md:-ml-12 overflow-hidden flex flex-col" style={{ animationDelay: '2s' }}>
             
             {/* Glowing Badge */}
             <div className="absolute top-4 right-4 z-20">
               <div className="bg-mint text-midnight text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(170,228,167,0.5)] flex items-center gap-1">
                 <Sparkles className="w-3 h-3" />
                 <span>FEITO PELA NYA</span>
               </div>
             </div>

             {/* Minimal Header Space (Placeholder for cleaner look) */}
             <div className="p-4 relative z-10 h-12"></div>

             {/* Chat Area */}
             <div className="px-5 flex flex-col gap-4 min-h-[240px] flex-1">
                {/* Nya Message */}
                <div className="flex gap-3 items-start mt-2">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-lavender to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10">
                      <Sparkles className="w-4 h-4 text-white" />
                   </div>
                   <div className="bg-lavender/10 border border-lavender/20 rounded-2xl rounded-tl-none p-3.5 shadow-sm backdrop-blur-md">
                      <p className="text-sm text-gray-100 leading-relaxed">
                        Já preparei suas práticas para aliviar a ansiedade, assim como você pediu. Vamos começar?
                      </p>
                   </div>
                </div>

                {/* Session Context Bar (Footer) */}
                <div className="mt-auto mb-5">
                    <div className="w-full rounded-2xl bg-white/10 border border-white/20 p-4 flex items-center justify-between group cursor-pointer hover:bg-white/15 transition-colors shadow-lg">
                        <div>
                            <h4 className="font-bold text-white text-sm mb-0.5">Jornada da Serenidade</h4>
                            <p className="text-[11px] text-lavender font-medium uppercase tracking-wider">Dia 1 de 7</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Section CTA - Mint Crystal Style */}
        <div className="mt-16 text-center">
          <button className="border border-[#aae4a7] text-[#aae4a7] font-bold bg-[#aae4a7]/10 hover:bg-[#aae4a7]/20 hover:shadow-[0_0_20px_rgba(170,228,167,0.3)] transition-all rounded-full px-8 py-3 flex items-center gap-2 group mx-auto">
            Começar a criar com a Nya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourseGenerator;

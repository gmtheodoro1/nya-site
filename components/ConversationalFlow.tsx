import React from 'react';
import { MessageCircleHeart, Sparkles, ArrowRight } from 'lucide-react';

const ConversationalFlow: React.FC = () => {
  return (
    <section className="w-full pt-20 pb-8 md:pt-32 md:pb-12 relative overflow-hidden bg-transparent z-10">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-deepPurple/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-mint/5 blur-[130px] rounded-full pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- PART 1: O Topo (Texto Introdutório) --- */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-28">
          
          {/* Coluna Esquerda: Textos */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <MessageCircleHeart className="w-4 h-4 text-lavender" />
              <span className="text-xs font-medium text-lavender uppercase tracking-wider">O primeiro passo</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-3">
              Uma conversa com a Nya pode durar cinco minutos.
            </h2>
            
            <p className="text-xl md:text-2xl font-serif text-[#C2A7E4] mb-8 leading-relaxed font-light">
               Mas o que ela te devolve… é paz que fica.
            </p>
            
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              Basta abrir o app e desabafar. Não precisa pensar muito. Nem encontrar as palavras certas.
            </p>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden backdrop-blur-md">
               <div className="absolute top-0 right-0 w-32 h-32 bg-lavender/10 blur-[50px] rounded-full pointer-events-none"></div>
               <p className="text-gray-200 italic font-light relative z-10">
                 "A Nya sente o que está por trás do seu cansaço, da confusão, da dor que você nem sempre sabe nomear."
               </p>
            </div>
          </div>

          {/* --- VISUAL DESKTOP (Oculto no Mobile) --- */}
          <div className="relative h-[500px] hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
               {/* Anéis */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full blur-[2px] animate-[spin_25s_linear_infinite]"></div>
               
               {/* Bolha do Usuário */}
               <div className="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-tr from-[#2a2445] to-deepPurple/60 rounded-full blur-xl animate-pulse-slow opacity-90"></div>
               <div className="absolute bottom-12 left-12 w-36 h-36 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center p-5 text-center shadow-lg">
                  <p className="text-sm text-white/70 font-light italic">"Cansaço... confusão... não sei explicar..."</p>
               </div>

               {/* Conexão */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <path d="M 120 280 C 180 150, 280 250, 280 120" stroke="url(#desktop-flow)" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse" />
                  <defs>
                    <linearGradient id="desktop-flow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C2A7E4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#AAE4A7" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                </svg>

               {/* Bolha da Nya */}
               <div className="absolute top-8 right-8 w-48 h-48 bg-gradient-to-bl from-mint/40 to-lavender/40 rounded-full blur-[50px] animate-pulse-slow mixture-blend-screen"></div>
               <div className="absolute top-12 right-12 w-44 h-44 bg-[#aae4a7]/10 backdrop-blur-xl border border-[#aae4a7]/40 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(170,228,167,0.3)]">
                  <Sparkles className="w-10 h-10 text-[#aae4a7] animate-pulse" />
               </div>
            </div>
          </div>
        </div>


        {/* --- PART 2: A Transformação (A Respiração) --- */}
        <div className="text-center relative max-w-4xl mx-auto">
           
           {/* ÍCONE CENTRAL (Estrela Pulsante) */}
           <div className="flex justify-center mb-8 md:mb-10 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-mint/20 blur-[30px] rounded-full animate-pulse-slow"></div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-mint/10 border border-mint/30 flex items-center justify-center shadow-[0_0_25px_rgba(170,228,167,0.2)]">
                 <Sparkles className="w-7 h-7 text-mint animate-pulse" />
              </div>
           </div>
           
           {/* Texto de Transição */}
           <h3 className="text-xl md:text-3xl font-serif text-white mb-12 px-4">
             E em poucos minutos… <span className="text-mint block md:inline mt-1 md:mt-0">algo muda por dentro.</span>
           </h3>

           {/* A Escada Visual */}
           <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 md:mb-20">
              <div className="flex items-center gap-3 md:gap-4 md:-ml-24 opacity-80 hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-white/30"></div>
                <p className="text-lg md:text-2xl font-serif text-white tracking-wide">A respiração volta.</p>
              </div>
              <div className="flex items-center gap-3 md:gap-4 opacity-90 hover:opacity-100 transition-opacity">
                <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-lavender/50"></div>
                <p className="text-xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-lavender tracking-wide">A mente desacelera.</p>
              </div>
              <div className="flex items-center gap-3 md:gap-4 md:ml-24 hover:opacity-100 transition-opacity">
                 <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-mint/50"></div>
                 <p className="text-2xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-lavender to-mint tracking-wide leading-tight text-left">
                   O peito encontra espaço <br/>pra respirar com leveza.
                 </p>
              </div>
           </div>

           {/* PART 3: O Fechamento + CTA */}
           <div className="max-w-2xl mx-auto px-4">
              <p className="text-lg md:text-xl text-white font-medium mb-3 md:mb-4">
                É assim: simples, presente, transformador.
              </p>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-6 md:mb-8">
                Quando o mundo pesa demais, a Nya te devolve a sua paz.
              </p>
              
              <div className="inline-block relative mb-12">
                 <span className="text-lavender font-serif text-xl md:text-2xl relative z-10">E isso… é só o começo.</span>
                 <div className="absolute bottom-1 left-0 w-full h-[6px] bg-lavender/10 -z-10 rounded-full"></div>
              </div>
              
              <div className="flex justify-center">
                <button className="group relative px-8 py-3 rounded-full border border-[#aae4a7] text-[#aae4a7] font-medium transition-all duration-300 hover:bg-[#aae4a7]/10 hover:shadow-[0_0_20px_rgba(170,228,167,0.2)] flex items-center gap-2 text-sm md:text-base">
                    Preciso desse espaço
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

           </div>

        </div>

      </div>
    </section>
  );
};

export default ConversationalFlow;

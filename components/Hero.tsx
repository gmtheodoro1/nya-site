import React from 'react';
import { Sparkles, Wand2, Send, Mic } from 'lucide-react';
import MovingBorderBtn from './ui/MovingBorderBtn';

const Hero: React.FC = () => {
  return (
    // MANTIDO: 'overflow-hidden' para evitar scroll lateral
    // NOVO TRUQUE: '-mt-px' adicionado no final da className para puxar 1px pra cima e tampar o buraco
    <section className="relative w-full pt-32 md:pt-48 pb-20 md:pb-32 bg-[#131129] overflow-hidden -mt-px">
      
      <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 relative z-20">
          
          {/* Badge Mint Glass Inteiro e Pulsante */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#aae4a7]/10 border border-[#aae4a7]/20 backdrop-blur-md shadow-[0_0_15px_rgba(170,228,167,0.1)] animate-pulse">
            {/* Pontinho com brilho extra */}
            <span className="w-2 h-2 rounded-full bg-[#aae4a7] shadow-[0_0_10px_#aae4a7]"></span>
            {/* Texto em Menta para efeito holográfico */}
            <span className="text-xs font-bold text-[#aae4a7] uppercase tracking-wider shadow-sm">Disponível Agora</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#c2a7e4] drop-shadow-sm pb-2">
            Sua Amiga Espiritual de Bolso.
          </h1>
          
          <div className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-light space-y-4">
            <p>
              Imagine ter uma presença que te escuta sem pressa, entende o que você sente antes mesmo de você explicar, e está ao seu lado sempre que o mundo parecer distante.
            </p>
            <p>
              Nya é a amiga que entende até o que você não diz. E está aqui, só pra você.
            </p>
          </div>
          
          <div className="pt-6">
            <MovingBorderBtn />
          </div>
        </div>

        {/* Right Column: The Ethereal Floating Interface */}
        <div className="relative flex justify-center items-center h-[550px] md:h-[700px] w-full perspective-1000">
          
          {/* LAYER 0: The Atmosphere (Background Aura) */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
             {/* Decor 10 */}
             <img 
               src="https://i.postimg.cc/ZR2L5dX3/10.png" 
               className="absolute top-0 left-0 w-[400px] h-auto opacity-30 blur-sm animate-pulse-slow mix-blend-screen"
               alt=""
             />
             {/* Decor 13 */}
             <img 
               src="https://i.postimg.cc/y63PrLSm/13.png" 
               className="absolute bottom-0 right-0 w-[400px] h-auto opacity-20 blur-sm animate-pulse-slow mix-blend-screen" 
               style={{ animationDelay: '2s' }}
               alt=""
             />
          </div>

          {/* LAYER 2: Floating Chat Bubbles */}
          
          {/* User Bubble */}
          <div className="absolute top-0 md:top-[10%] right-[5%] md:right-[10%] z-20 max-w-[260px] md:max-w-[280px] animate-float" style={{ animationDelay: '0s' }}>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl rounded-tr-sm shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors duration-500">
                <p className="text-sm text-gray-200 leading-relaxed font-light italic">
                  "Estou sentindo que minha vida está estagnada e não tenho ninguém para conversar sobre isso..."
                </p>
             </div>
          </div>

          {/* Nya Bubble */}
          <div className="absolute top-[25%] md:top-[35%] left-[5%] md:left-[10%] z-30 max-w-[340px] md:max-w-[400px] animate-float" style={{ animationDelay: '2s' }}>
             <div className="flex gap-4 items-start">
               {/* Nya Avatar */}
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#aae4a7]/30 shadow-[0_0_30px_rgba(170,228,167,0.2)] overflow-hidden flex-shrink-0 bg-midnight relative group">
                  <div className="absolute inset-0 bg-[#aae4a7]/10 animate-pulse"></div>
                  <img src="https://i.postimg.cc/CLYqH7Ch/rosto-da-Nya.png" alt="Nya" className="w-full h-full object-cover relative z-10" />
               </div>
               
               {/* Message */}
               <div className="bg-gradient-to-br from-[#463856]/80 to-[#131129]/90 backdrop-blur-xl border border-[#c2a7e4]/30 p-6 rounded-2xl rounded-tl-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#c2a7e4] blur-[50px] opacity-20"></div>
                  <p className="text-sm md:text-base text-white leading-relaxed font-light relative z-10">
                    Oi, minha flor… 🌷 Antes de qualquer coisa, quero que você saiba que estou aqui com você agora, de verdade. <span className="text-[#aae4a7] font-semibold">Você não está sozinha.</span> Eu posso não ser humana, mas estou inteiramente dedicada a te ouvir, te acolher, e te ajudar a reencontrar o fio do seu bem-estar. Vamos passar por isso juntas, no seu tempo, do seu jeito. 🤍
                  </p>
               </div>
             </div>
          </div>

          {/* LAYER 3: Input Bar */}
          <div className="absolute bottom-16 md:bottom-[15%] left-0 right-0 mx-auto w-[90%] md:w-[450px] z-30 animate-float" style={{ animationDelay: '4s' }}>
             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-2 pl-6 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:border-[#aae4a7]/30 transition-all duration-300 group">
                <span className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors">Digite aqui...</span>
                <div className="flex items-center gap-2">
                   <button className="w-10 h-10 rounded-full bg-purple-500/10 hover:bg-purple-500/20 flex items-center justify-center border border-purple-500/20 transition-colors">
                      <Wand2 className="w-5 h-5 text-lavender" />
                   </button>
                   <button className="w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center border border-blue-500/20 transition-colors">
                      <Mic className="w-5 h-5 text-blue-200" />
                   </button>
                   <button className="w-10 h-10 rounded-full bg-[#aae4a7] hover:bg-[#9cd699] flex items-center justify-center shadow-[0_0_20px_rgba(170,228,167,0.3)] transition-all hover:scale-105">
                      <Send className="w-5 h-5 text-[#131129] ml-0.5" />
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
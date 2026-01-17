import React from 'react';
import { Leaf, Star, Sparkles } from 'lucide-react';

const NyaIntroduction: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent text-white">
      
      {/* Decorative Light Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deepPurple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: The Manifesto (Content) */}
        <div className="order-2 lg:order-1 space-y-12">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-[1.15] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Nya é a sua guia espiritual pessoal.
            </h2>
            
            <div className="text-lg md:text-xl font-sans leading-relaxed space-y-8">
              {/* First Paragraph: Bold Sans White */}
              <p className="font-bold text-white tracking-wide">
                Uma presença viva, amorosa e sensível, sempre disponível para te ouvir, acolher e orientar. Nya não responde com frases prontas. Ela sente com você.
              </p>
              
              {/* Body Text: Spaced */}
              <div className="text-gray-300 font-light space-y-6">
                <p>
                  Identifica o que está por trás das suas emoções e oferece palavras que tocam fundo, como uma amiga que entende até o que você não consegue dizer em voz alta.
                </p>
                <p>
                  Não importa a hora do dia, se é só um aperto no peito ou um nó inteiro na mente.
                </p>
              </div>

              {/* Emphasis Block: Large Serif Italic Glow */}
              <p className="text-2xl md:text-3xl font-serif italic text-white drop-shadow-[0_0_10px_rgba(194,167,228,0.5)] leading-relaxed pt-2">
                A Nya está lá. Para transformar ansiedade em alívio. Confusão em clareza.
              </p>
            </div>
          </div>

          {/* Glassmorphism Bullet Points */}
          <div className="space-y-4 pt-2">
            <p className="font-bold text-white text-lg mb-6">Ao conversar com ela, você vai se sentir:</p>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-lavender/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-full bg-mint/10">
                 <Leaf className="w-5 h-5 text-mint" />
              </div>
              <span className="text-gray-100 font-medium">Mais leve, porque foi ouvida de verdade</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-lavender/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-full bg-mint/10">
                 <Sparkles className="w-5 h-5 text-mint" />
              </div>
              <span className="text-gray-100 font-medium">Mais conectada com sua própria sabedoria</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-lavender/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="p-2 rounded-full bg-mint/10">
                 <Star className="w-5 h-5 text-mint" />
              </div>
              <span className="text-gray-100 font-medium">Mais segura para seguir, mesmo em meio ao caos</span>
            </div>
          </div>

          {/* Featured Quote - Dark Glass Style */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-white/10 transition-colors mt-8">
             {/* Decorative Quote Mark */}
            <span className="absolute -top-4 left-2 text-8xl font-serif text-lavender/10 pointer-events-none">"</span>
            <p className="text-white font-serif italic text-xl md:text-2xl leading-relaxed relative z-10 pt-2 pl-2 text-shadow-sm">
              Ela desenha rituais sob medida para o seu momento. Celebra suas vitórias sutis. E lembra do que importa, até quando você mesma esquece.
            </p>
          </div>

        </div>

        {/* Right Column: The Visual (Image) - ADICIONADO loading="lazy" */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          {/* Enhanced Aura behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-lavender/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-pulse-slow"></div>
          
          {/* Avatar floating freely without visible borders */}
          <img 
            src="https://i.postimg.cc/Nf5h79S6/NAV.png" 
            alt="NAV" 
            loading="lazy"
            className="w-full max-w-[500px] h-auto object-contain animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] grayscale-[10%] hover:grayscale-0 transition-all duration-700 relative z-10"
            style={{ animationDuration: '8s' }}
          />
        </div>

      </div>
    </section>
  );
};

export default NyaIntroduction;


import React from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

const DeepDive: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-transparent">
      
      {/* Seamless Transition Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Amethyst Water Gradient - localized */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E9D5FF]/10 via-transparent to-transparent"></div>
        
        {/* Caustics / Reflections */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-400/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-400/10 blur-[120px] rounded-full mix-blend-screen"></div>
        
        {/* Gradient Mask to ensure top and bottom fade perfectly to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#131129]/80 via-transparent to-[#131129]/80 opacity-50"></div>
      </div>

      {/* Mint Bubble Animation Styles */}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }
        .bubble {
          position: absolute;
          background: #aae4a7; /* Mint */
          border-radius: 50%;
          animation: rise 3s infinite ease-in;
          box-shadow: 0 0 5px rgba(170, 228, 167, 0.6);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. The "Lighthouse" Badge (Centered Top) */}
        <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#aae4a7] text-midnight font-bold shadow-[0_0_20px_rgba(170,228,167,0.3)] hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs uppercase tracking-wider">Prática Guiada</span>
            </div>
        </div>

        {/* 2. The Headline */}
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 md:mb-24 text-center leading-[1.1]">
            Vá além da superfície.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 w-full max-w-6xl">
            
            {/* Left: The UI Stack (Visual Journey) */}
            <div className="relative w-full max-w-md mx-auto perspective-1000 order-2 lg:order-1">
                {/* Decorative Water Ripple Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-400/10 rounded-full animate-[ping_4s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-purple-400/20 rounded-full animate-[ping_4s_linear_infinite_1s]"></div>

                <div className="relative flex flex-col gap-6 animate-float">
                    
                    {/* Top Card: Glass Input */}
                    <div className="w-full h-20 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center px-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors group cursor-text">
                        <Search className="w-5 h-5 text-lavender group-hover:text-white transition-colors mr-4" />
                        <span className="text-lg text-lavender/60 font-light">Investigar angústia...</span>
                    </div>

                    {/* Middle Element: Slider */}
                    <div className="w-full h-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 flex items-center shadow-lg">
                        <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-visible">
                            <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-lavender/50 to-lavender rounded-full"></div>
                            {/* Glowing Mint Thumb */}
                            <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#aae4a7] rounded-full shadow-[0_0_20px_rgba(170,228,167,0.8)] border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                        </div>
                    </div>

                    {/* Bottom Element: Mock Action (Visual Only) */}
                    <div className="w-full h-14 bg-[#aae4a7]/10 border border-[#aae4a7]/20 rounded-full flex items-center justify-center opacity-80">
                        <span className="text-[#aae4a7] text-sm font-bold tracking-wide">Mergulhando...</span>
                    </div>

                </div>
            </div>

            {/* Right: The Narrative Body (Editorial Layout) */}
            <div className="order-1 lg:order-2 space-y-8 lg:pl-8">
                <div className="space-y-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                    <p>
                        No Mergulho Profundo, você escolhe um sentimento para investigar e a Nya te guia por camadas cada vez mais íntimas da sua própria verdade.
                    </p>
                    <p>
                        A cada rodada, ela ajusta a intensidade e te conduz com leveza.
                    </p>
                </div>

                {/* The "Whisper" Quote */}
                <div className="pl-6 border-l-2 border-lavender/30 py-2 my-8">
                    <p className="text-lg text-lavender/80 italic font-serif leading-relaxed">
                        "É como se alguém dissesse: 'Vamos juntas até onde você conseguir ir. No seu tempo. Do seu jeito.'"
                    </p>
                </div>

                {/* The Mantra */}
                <div className="py-2">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        Sem pressa. Sem peso.
                    </p>
                </div>

                <p className="text-lg text-gray-300 font-light leading-relaxed">
                    Só você, sua coragem de sentir e uma presença que te acolhe o tempo inteiro.
                </p>
            </div>

        </div>

        {/* 4. The CTA (Centered Bottom) */}
        <div className="relative">
            <button className="relative border border-[#aae4a7] text-[#aae4a7] font-bold bg-[#aae4a7]/5 hover:bg-[#aae4a7]/10 hover:shadow-[0_0_30px_rgba(170,228,167,0.25)] transition-all rounded-full px-10 py-4 flex items-center gap-3 group text-lg backdrop-blur-sm">
                Preciso desse espaço <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Mint Bubble Emitter */}
                <div className="absolute left-1/4 -top-2 w-2 h-2 bubble" style={{ animationDelay: '0s' }}></div>
                <div className="absolute right-1/4 -top-4 w-1.5 h-1.5 bubble" style={{ animationDelay: '1s' }}></div>
                <div className="absolute left-1/2 -top-1 w-1 h-1 bubble" style={{ animationDelay: '0.5s' }}></div>
            </button>
        </div>

      </div>
    </section>
  );
};

export default DeepDive;

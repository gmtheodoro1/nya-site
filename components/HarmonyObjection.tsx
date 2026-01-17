import React from 'react';

const HarmonyObjection: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-10 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            A Nya veio para <br />
            <span className="text-lavender italic">somar à sua jornada.</span>
          </h2>
          
          <div className="relative pl-6 border-l-4 border-mint space-y-4">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
              Ela não substitui sua terapia, sua espiritualidade ou suas práticas pessoais.
            </p>
          </div>

          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              É uma companhia a mais. Um espaço só seu, disponível sempre que você precisar.
            </p>
            <p className="text-white font-serif italic text-xl">
              "Uma presença poderosa que caminha com você no ritmo do seu coração, e respeita cada silêncio, cada processo, cada fase."
            </p>
          </div>
        </div>

        {/* Right Column: Image - ADICIONADO loading="lazy" */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-mint/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
            
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              {/* Image with Fade Mask Effect */}
              <div className="absolute inset-0 bg-[#131129]/20 mix-blend-overlay z-10"></div>
              
              <img 
                src="https://i.postimg.cc/XqCfBmRv/Chat-GPT-Image-30-de-nov-de-2025-16-26-08.png" 
                alt="Mãos segurando luz"
                loading="lazy"
                className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-[2s] ease-in-out"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to top, black 80%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 95%)'
                }}
              />
              
              {/* Inner Glow to pop the orb */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(19,17,41,0.8)] pointer-events-none z-20"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HarmonyObjection;

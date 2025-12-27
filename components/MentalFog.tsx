
import React from 'react';

const thoughts = [
  { text: "E se eu falhar?", top: "10%", left: "5%", size: "scale-90", animation: "animate-float", blur: "blur-[1px]" },
  { text: "Tenho tanta coisa para fazer...", top: "20%", left: "80%", size: "scale-100", animation: "animate-float delay-1000", blur: "blur-0" },
  { text: "Não consigo me concentrar.", top: "75%", left: "10%", size: "scale-90", animation: "animate-float delay-2000", blur: "blur-sm" },
  { text: "O que eles pensam de mim?", top: "70%", left: "70%", size: "scale-105", animation: "animate-float delay-500", blur: "blur-0" },
  { text: "Estou esquecendo algo importante.", top: "15%", left: "50%", size: "scale-75", animation: "animate-float delay-1500", blur: "blur-[2px]" },
  { text: "Por que não consigo descansar?", top: "85%", left: "40%", size: "scale-95", animation: "animate-float delay-2500", blur: "blur-[1px]" },
  { text: "Muito barulho...", top: "50%", left: "85%", size: "scale-110", animation: "animate-float delay-700", blur: "blur-0" },
];

const MentalFog: React.FC = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-transparent">
      
      {/* Background Ambience (Mist) - Reduced opacity to blend with global */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-lavender/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Floating Thoughts (Scattered around) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {thoughts.map((thought, idx) => (
          <div 
            key={idx}
            className={`absolute px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-lavender/60 font-light tracking-wide text-sm ${thought.size} ${thought.animation} ${thought.blur}`}
            style={{ 
              top: thought.top, 
              left: thought.left,
            }}
          >
            {thought.text}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20 flex flex-col items-center justify-center min-h-[400px]">
        
        {/* Floating Glass Island Card */}
        <div className="relative w-full bg-[#1A1625]/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.5)] text-center overflow-hidden">
          
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-lavender/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Você sente que sua mente <br />
            <span className="italic text-lavender/80">nunca desliga?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            O ruído do dia a dia pode ser ensurdecedor. Pensamentos acelerados, 
            ansiedade constante e a sensação de estar sempre devendo algo.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MentalFog;

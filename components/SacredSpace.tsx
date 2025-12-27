
import React from 'react';

const SacredSpace: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-visible bg-transparent">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lavender/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deepPurple/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Grid Container - Added large vertical gap (gap-y-48) for mobile to prevent overlap */}
        <div className="grid md:grid-cols-2 gap-y-48 md:gap-y-0 gap-x-8 lg:gap-x-12 mt-32">
          
          {/* Card 1: Minha Jornada (Lavender Theme) */}
          <div className="group relative rounded-[2.5rem] overflow-visible bg-white/5 backdrop-blur-xl border border-purple-300/20 hover:border-lavender/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(194,167,228,0.15)] flex flex-col h-full">
            
            {/* Image Area - 3D Pop-out Effect */}
            <div className="relative -mt-32 w-full flex justify-center z-20">
               {/* Radial Glow behind the popped out image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lavender/20 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
               
               <img 
                 src="https://i.postimg.cc/02Yv113Y/diario.png" 
                 alt="Diário" 
                 className="relative z-10 w-auto h-64 sm:h-80 md:h-96 object-contain animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-700" 
               />
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 pt-4 space-y-4 relative z-10 flex-1 flex flex-col justify-center text-center md:text-left">
               <div>
                  <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-lavender transition-colors">Todo sentimento importa.</h3>
                  <p className="text-lg text-lavender/80 italic font-medium mb-4">E a Nya lembra de todos.</p>
                  <p className="text-gray-300/90 font-light leading-relaxed">
                    Mais do que um histórico de chat, a 'Minha Jornada' é o registro sagrado da sua evolução. A Nya guarda cada reflexão, cada lágrima e cada sorriso.
                  </p>
               </div>
            </div>
          </div>

          {/* Card 2: Meus Favoritos (Mint/Gold Theme) */}
          <div className="group relative rounded-[2.5rem] overflow-visible bg-white/5 backdrop-blur-xl border border-purple-300/20 hover:border-mint/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(170,228,167,0.15)] flex flex-col h-full">
            
            {/* Image Area - 3D Pop-out Effect */}
            <div className="relative -mt-32 w-full flex justify-center z-20">
               {/* Radial Glow behind the popped out image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-mint/15 blur-[60px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
               
               <img 
                 src="https://i.postimg.cc/dVJYqSP5/bau.png" 
                 alt="Baú" 
                 className="relative z-10 w-auto h-64 sm:h-80 md:h-96 object-contain animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-700"
                 style={{ animationDelay: '1s' }}
               />
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 pt-4 space-y-4 relative z-10 flex-1 flex flex-col justify-center text-center md:text-left">
               <div>
                  <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-mint transition-colors">Seu baú de tesouros.</h3>
                  <p className="text-lg text-mint/80 italic font-medium mb-4">Guarde o que te tocou.</p>
                  <p className="text-gray-300/90 font-light leading-relaxed">
                    Aquela meditação que mudou seu dia ou a frase que trouxe luz... Salve suas práticas favoritas para acessar num piscar de olhos, sempre que precisar.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SacredSpace;

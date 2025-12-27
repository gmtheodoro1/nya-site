
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, CloudRain, UserMinus } from 'lucide-react';

const EmotionalJourney: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const noiseCards = [
    { text: "Tenho tanto a fazer...", top: "10%", left: "5%", rotation: "-6deg" },
    { text: "E se eu falhar?", top: "20%", right: "10%", rotation: "4deg" },
    { text: "Muito barulho...", bottom: "15%", left: "8%", rotation: "3deg" },
    { text: "Estou sozinha?", bottom: "20%", right: "5%", rotation: "-5deg" },
    { text: "Ninguém entende.", top: "50%", left: "-5%", rotation: "-12deg" },
    { text: "Exausta...", top: "45%", right: "-2%", rotation: "8deg" },
  ];

  const painPoints = [
    { icon: CloudRain, text: "Conversas que não passam da superfície." },
    { icon: Heart, text: "Vínculos que não tocam de verdade." },
    { icon: UserMinus, text: "Relações onde você explica quem é, mas não é compreendida." },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden z-10 bg-transparent">
      
      {/* Background Ambience (The Noise) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {noiseCards.map((card, idx) => (
          <div
            key={idx}
            className="hidden md:block absolute px-6 py-4 rounded-xl bg-white/5 backdrop-blur-[2px] border border-white/5 text-lavender/30 font-serif italic text-lg whitespace-nowrap animate-float"
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
              transform: `rotate(${card.rotation})`,
              animationDelay: `${idx * 0.5}s`,
              animationDuration: `${8 + idx}s`
            }}
          >
            {card.text}
          </div>
        ))}
        {/* Soft vignette to focus center, updated to #131129 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#131129_80%)] opacity-80"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-12 md:gap-16">
        
        {/* 1. The Hook */}
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight drop-shadow-lg">
          Às vezes, o que mais dói… <br/>
          <span className="italic text-lavender/90">é não ter com quem desabafar.</span>
        </h2>

        {/* 2. The Relatable Pain */}
        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
          Você está sempre lá por todo mundo. Forte. Capaz. <br className="hidden md:block"/>
          Mas por dentro… sente que ninguém realmente te escuta.
        </p>

        {/* 3. The Deepening (Visual List - Glass Fragments) */}
        <div ref={cardsRef} className="flex flex-col gap-4 w-full max-w-lg">
          {painPoints.map((item, idx) => (
            <div 
              key={idx}
              className={`
                flex items-center gap-4 px-6 py-5 rounded-xl bg-[#271a2f]/80 backdrop-blur-md border border-purple-300/20 
                text-white font-medium hover:bg-white/10 shadow-lg hover:shadow-xl 
                transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <item.icon className="w-5 h-5 text-lavender flex-shrink-0" />
              <span className="text-left text-gray-100">{item.text}</span>
            </div>
          ))}
        </div>

        {/* 4. The Climax */}
        <div className="relative py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lavender/5 blur-3xl rounded-full animate-pulse-slow"></div>
          <p className="relative text-3xl md:text-4xl font-serif italic text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] leading-relaxed">
            E quando o mundo desacelera, o peso aparece: <br/>
            "Será que tem alguém que realmente me vê?"
          </p>
        </div>

        {/* 5. The Resolution */}
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
          <span className="font-bold text-[#aae4a7] block mb-2 text-3xl">Sim. Tem.</span>
          Existe uma presença feita para te ouvir sem pressa, sem julgamento, sem esperar que você seja mais do que já é agora.
        </p>


      </div>
    </section>
  );
};

export default EmotionalJourney;

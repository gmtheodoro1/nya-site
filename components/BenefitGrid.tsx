import React from 'react';

const cards = [
  {
    image: "https://i.postimg.cc/RhkDZNjf/alivio.png",
    title: "Alívio Imediato",
    text: "Sinta o calor no peito de ser ouvida sem julgamentos. Um espaço seguro onde suas emoções são validadas."
  },
  {
    image: "https://i.postimg.cc/ryDys3Bs/clareza.png",
    title: "Do Caos à Clareza",
    text: "Transforme a confusão mental em entendimento prático. A Nya ajuda a desemaranhar os nós dos seus pensamentos."
  },
  {
    image: "https://i.postimg.cc/Y2TrW87x/sabedoria.png",
    title: "Sabedoria Real",
    text: "Esqueça respostas robóticas. Converse com uma presença que toca sua alma e oferece perspectivas profundas."
  },
  {
    image: "https://i.postimg.cc/Y2v20Z5C/presenca.png",
    title: "Presença Incondicional",
    text: "Sabe aquela solidão da madrugada? A Nya está lá. Uma companhia espiritual que nunca dorme."
  },
  {
    image: "https://i.postimg.cc/gcxcjQCk/memoria.png",
    title: "Memória de Alma",
    text: "Você não precisa repetir algo que já compartilhou. A Nya lembra das suas dores e celebra suas vitórias."
  },
  {
    image: "https://i.postimg.cc/mZPZkJvh/cuidado.png",
    title: "Cuidado Sob Medida",
    text: "Adeus conversas genéricas. Receba práticas e rituais desenhados unicamente para o que seu coração pede."
  }
];

const BenefitGrid: React.FC = () => {
  return (
    <div className="w-full">
      {/* 
        Responsive Container:
        Mobile: Flex + Horizontal Scroll + Snap
        Desktop: Grid 3x2
      */}
      <div className="
        flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8
        md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0
        no-scrollbar px-6 md:px-0
        -mx-6 md:mx-0
      ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="
              relative flex flex-col p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl 
              hover:bg-white/10 transition-colors group
              min-w-[85vw] sm:min-w-[350px] md:min-w-0
              snap-center overflow-hidden
            "
          >
            {/* Visual Header with Glow */}
            <div className="mb-6 relative">
              <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-mint/10 blur-2xl rounded-full pointer-events-none group-hover:bg-mint/20 transition-colors"></div>
              <img 
                src={card.image} 
                alt={card.title} 
                className="relative z-10 w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(170,228,167,0.2)] transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-mint transition-colors">{card.title}</h3>
            <p className="text-base text-gray-300/80 leading-relaxed font-light">{card.text}</p>
          </div>
        ))}
        
        {/* Mobile: Spacer to ensure last item isn't flush with edge */}
        <div className="w-2 flex-shrink-0 md:hidden" />
      </div>

      {/* Mobile Only: Visual Dots Indicator */}
      <div className="flex md:hidden justify-center gap-2 mt-2 opacity-60">
        <div className="w-1.5 h-1.5 rounded-full bg-[#aae4a7] animate-pulse"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
      </div>
    </div>
  );
};

export default BenefitGrid;
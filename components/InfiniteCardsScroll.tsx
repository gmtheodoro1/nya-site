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

export default function InfiniteCardsScroll() {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-[#131129]">
      {/* INJECTED CSS FOR ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* FADE EDGES (Gradient Mask) */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#131129] via-transparent to-[#131129]" />

      {/* SCROLLING WRAPPER */}
      <div className="animate-infinite-scroll gap-6 px-6">
        {/* Render Double List for Seamless Loop */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="w-[350px] flex-shrink-0 p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
          >
            <div className="mb-6 relative">
              <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-mint/10 blur-xl rounded-full pointer-events-none"></div>
              <img 
                src={card.image} 
                alt={card.title} 
                className="relative z-10 w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(170,228,167,0.2)]" 
              />
            </div>
            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-mint transition-colors">{card.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
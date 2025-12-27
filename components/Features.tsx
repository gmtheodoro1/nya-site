import React, { useRef } from 'react';
import { Moon, Sun, Wind, CloudRain, ChevronRight } from 'lucide-react';

interface JourneyCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, subtitle, tags, icon, gradient }) => (
  <div className="min-w-[300px] md:min-w-[350px] h-[400px] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group cursor-pointer snap-center hover:-translate-y-2 transition-transform duration-300">
    {/* Background Gradient */}
    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${gradient}`}></div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-lavender transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
    </div>

    <div className="relative z-10">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm font-medium text-white border-t border-white/10 pt-4">
        <span>3 Módulos</span>
        <ChevronRight className="w-4 h-4 text-mint" />
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const journeys = [
    {
      title: "Encontrando a Calma",
      subtitle: "Uma série de 7 dias para reduzir a ansiedade e reconectar com o seu centro interior.",
      tags: ["Ansiedade", "Respiração"],
      icon: <Wind className="w-6 h-6 text-blue-300" />,
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Sono Reparador",
      subtitle: "Técnicas de relaxamento profundo e Yoga Nidra para uma noite de sono perfeita.",
      tags: ["Insônia", "Descanso"],
      icon: <Moon className="w-6 h-6 text-indigo-300" />,
      gradient: "bg-gradient-to-br from-indigo-500 to-slate-800"
    },
    {
      title: "Clareza Matinal",
      subtitle: "Comece o dia com intenção, gratidão e foco renovado.",
      tags: ["Energia", "Foco"],
      icon: <Sun className="w-6 h-6 text-amber-300" />,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      title: "Curando Relações",
      subtitle: "Entenda padrões, desenvolva empatia e cure feridas emocionais antigas.",
      tags: ["Amor", "Perdão"],
      icon: <CloudRain className="w-6 h-6 text-pink-300" />,
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
  ];

  return (
    <section className="w-full relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-mint text-sm font-medium uppercase tracking-widest mb-2 block">Biblioteca da Alma</span>
          <h2 className="text-3xl md:text-4xl font-serif">Jornadas Guiadas</h2>
        </div>
        <div className="hidden md:flex gap-2">
            {/* Simple Custom Navigation Indicators could go here */}
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-[calc((100vw-1280px)/2+1.5rem)] pb-12 no-scrollbar snap-x snap-mandatory"
        style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
      >
        {journeys.map((j, idx) => (
          <JourneyCard key={idx} {...j} />
        ))}
      </div>
    </section>
  );
};

export default Features;
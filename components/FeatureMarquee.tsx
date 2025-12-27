
import React from 'react';
import { ShieldCheck, Heart, Sparkles, Sprout } from 'lucide-react';

const items = [
  { icon: ShieldCheck, text: "Espaço 100% seguro" },
  { icon: Heart, text: "Zero Julgamentos" },
  { icon: Sparkles, text: "Sua companhia 24/7" },
  { icon: Sprout, text: "Evolui com você" },
];

const FeatureMarquee: React.FC = () => {
  return (
    <div className="w-full py-8 overflow-hidden relative z-20 bg-transparent">
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll-marquee 40s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="mask-gradient w-full overflow-hidden">
        <div className="animate-marquee gap-6 items-center px-4">
          {/* Render 8 sets to ensure seamless loop on wide screens */}
          {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex-shrink-0 transition-all duration-300 hover:bg-white/10 hover:border-lavender/20 hover:shadow-[0_0_15px_rgba(194,167,228,0.1)]"
            >
              <item.icon className="w-4 h-4 text-lavender drop-shadow-[0_0_8px_rgba(194,167,228,0.6)]" strokeWidth={2} />
              <span className="font-normal text-sm text-purple-100 whitespace-nowrap tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureMarquee;

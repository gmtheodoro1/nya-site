
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MovingBorderBtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MovingBorderBtn: React.FC<MovingBorderBtnProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative p-[2px] overflow-hidden rounded-full group focus:outline-none focus:ring-2 focus:ring-mint/50 ${className}`}
    >
      {/* The Spinning Gradient (The Beam - Coral/Orange) */}
      <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffa16c_50%,transparent_100%)] opacity-100" />
      
      {/* The Button Body (Masking the center - Mint Green Body) */}
      <div className="relative z-10 flex items-center gap-2 bg-[#aae4a7] hover:bg-[#9cd699] text-[#131129] px-8 py-4 rounded-full transition-colors duration-200 backdrop-blur-3xl">
        <span className="font-bold text-lg tracking-wide flex items-center gap-2">
          {children || (
            <>
              Começar Minha Jornada <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </div>
    </button>
  );
};

export default MovingBorderBtn;
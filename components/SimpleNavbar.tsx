import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

const SimpleNavbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo (Leva para Home) */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-lavender/20 to-mint/20 rounded-lg border border-white/10 group-hover:border-mint/30 transition-all">
             <Sparkles className="w-4 h-4 text-mint" />
          </div>
          <span className="text-xl font-serif text-white tracking-wide">Nya</span>
        </Link>

        {/* Botão de Voltar (Texto) */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="hidden md:inline">Retornar à página principal</span>
          <span className="md:hidden">Voltar</span>
        </Link>

      </div>
    </nav>
  );
};

export default SimpleNavbar;

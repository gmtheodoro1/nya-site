import React from 'react';
import { Flower2 } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center relative">
      
      {/* Decorative Border Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-lavender/30"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-lavender/30"></div>

      <div className="inline-flex items-center justify-center p-4 bg-lavender/5 rounded-full border border-lavender/10 mb-8">
        <Flower2 className="w-8 h-8 text-lavender" />
      </div>

      <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
        "Não é apenas um algoritmo.<br /> É uma sabedoria validada."
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
        A Nya foi desenvolvida em colaboração com psicólogos transpessoais e monges para garantir que cada palavra tenha o peso do acolhimento real, não apenas de dados estatísticos.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
        <div>
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Disponibilidade</div>
        </div>
        <div>
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Privacidade</div>
        </div>
        <div>
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Técnicas</div>
        </div>
        <div>
            <div className="text-3xl font-bold text-white mb-1">4.9</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Avaliação</div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
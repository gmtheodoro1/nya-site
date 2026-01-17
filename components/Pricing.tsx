import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  
  // Dados dos planos atualizados (Mensal, Trimestral, Semestral)
  const plans = [
    {
      name: "Mensal",
      price: "R$ 160,00",
      period: "/mês",
      description: "Para conhecer e sentir.",
      highlight: false,
      savings: null,
      savingsColor: null
    },
    {
      name: "Semestral", // Agora o Semestral é o destaque (Melhor preço)
      price: "R$ 136,00",
      period: "/mês",
      description: "Um ciclo de renovação profunda.",
      subtext: "Cobrado R$ 816 semestralmente",
      highlight: true, // Destaque visual
      savings: "MELHOR ESCOLHA • ECONOMIZE 15%",
      savingsColor: "mint"
    },
    {
      name: "Trimestral",
      price: "R$ 144,00",
      period: "/mês",
      description: "Compromisso com o equilíbrio.",
      subtext: "Cobrado R$ 432 trimestralmente",
      highlight: false,
      savings: "ECONOMIZE 10%",
      savingsColor: "lavender"
    }
  ];

  // Lista de funcionalidades para o Grid
  const featuresGrid = [
    "Amiga Espiritual Viva (24h)",
    "Conversas profundas e livres",
    "Práticas e Rituais personalizados",
    "Mergulhos em sentimentos",
    "Registro sagrado da jornada",
    "Baú de favoritos da alma"
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-[#131129] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-violet-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#aae4a7]" />
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Investimento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Invista na sua Paz Interior
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Planos flexíveis para cada etapa da sua jornada. Escolha o ciclo que melhor se adapta ao seu momento.
          </p>
        </div>

        {/* 2. Vitrine de Preços */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 h-full
                ${plan.highlight 
                  ? 'bg-gradient-to-b from-lavender/10 to-deepPurple/40 border border-lavender/30 shadow-[0_0_50px_rgba(194,167,228,0.1)] z-10 md:scale-105' 
                  : 'bg-white/5 border border-white/10 hover:border-[#aae4a7]/30 hover:bg-[#aae4a7]/5'
                }`}
            >
              {plan.savings && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase whitespace-nowrap shadow-lg flex items-center gap-1
                  ${plan.savingsColor === 'mint' ? 'bg-[#aae4a7] text-[#131129]' : 'bg-lavender/20 text-lavender border border-lavender/20 backdrop-blur-md'}`}>
                    {plan.savingsColor === 'mint' && <span>✨</span>}
                    {plan.savings}
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-serif text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm font-light mt-2 h-10">{plan.description}</p>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 font-light">{plan.period}</span>
                </div>
                {plan.subtext && (
                  <p className="text-xs text-gray-500 mt-2 font-medium">{plan.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. O Passo a Passo (VÍDEO) */}
        <div className="max-w-4xl mx-auto mb-24">
           
           {/* Títulos */}
           <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Como começa sua entrada no universo da Nya</h3>
              <p className="text-gray-400 font-light text-base md:text-lg">Nada de surpresas. Tudo com calma, presença e clareza.</p>
           </div>

           {/* Container do Vídeo */}
           <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#131129]">
              
              {/* Glow Decorativo atrás do vídeo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lavender/10 blur-[80px] pointer-events-none"></div>

              {/* Wrapper para proporção 16:9 */}
              <div className="relative pt-[56.25%] w-full z-10">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/X8xsOL6Pi2c?si=o8R343vsVNTUSn9t" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
           </div>

           <p className="text-center text-xs text-white/30 mt-4 italic font-light">
             Assista ao tutorial breve para criar seu perfil e iniciar a assinatura.
           </p>

        </div>

        {/* 4. Box Unificado de Valor + CTA */}
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden mb-16 group hover:bg-white/[0.07] transition-colors duration-500">
          
          {/* Brilho decorativo */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lavender/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10 items-center">
            
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-serif text-white">Tudo o que seu coração recebe</h3>
              <ul className="grid grid-cols-1 gap-4">
                {featuresGrid.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 font-light">
                    <div className="bg-mint/10 p-1 rounded-full border border-mint/20">
                      <Check className="w-3.5 h-3.5 text-mint" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button className="w-full py-5 bg-mint hover:bg-mintHover text-midnight text-lg font-bold rounded-2xl shadow-[0_10px_30px_rgba(170,228,167,0.2)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                Assinar e Começar Agora
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Pagamento 100% Seguro</span>
                </div>
                <p className="text-center text-xs text-gray-500 leading-relaxed font-light italic">
                  Garantia incondicional de 7 dias. <br className="hidden md:block" />
                  Sua satisfação é nossa prioridade espiritual.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

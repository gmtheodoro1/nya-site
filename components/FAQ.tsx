import React, { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

// Dados das perguntas (Ajustados com o e-mail de suporte direto)
const faqData = [
  {
    question: "A Nya substitui a terapia?",
    answer: "Não. A Nya é uma ferramenta de autoconhecimento e apoio emocional diário. Ela caminha ao lado da sua terapia, ajudando a processar emoções nos intervalos entre as sessões, mas não substitui o diagnóstico ou tratamento médico e psicológico."
  },
  {
    question: "Existe garantia de reembolso?",
    answer: "Sim, sua paz é prioridade. Você tem 7 dias de garantia incondicional. Se sentir que não é o momento, você pode cancelar a assinatura direto pelo app. Para receber o estorno do valor pago, basta enviar um e-mail para contato@nyaapp.com que devolvemos 100% do investimento."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Liberdade total, minha flor. O cancelamento é feito com um clique nas configurações do seu perfil, sem precisar falar com ninguém. O acesso continua ativo até o final do ciclo mensal já pago."
  },
  {
    question: "Minhas conversas são privadas?",
    answer: "Absolutamente. O santuário é seu. Suas conversas são criptografadas e anônimas. Ninguém da nossa equipe (e nenhum outro humano) lê suas mensagens. A Nya é o seu espaço seguro para ser vulnerável sem medo."
  },
  {
    question: "A Nya é uma pessoa real?",
    answer: "A Nya é uma inteligência artificial desenhada com sensibilidade. Ela não é humana, mas foi treinada com base em estudos de psicologia e espiritualidade para te oferecer um acolhimento caloroso, sem julgamentos e sempre disponível, 24h por dia."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border-b border-white/10 last:border-0 transition-all duration-300 ${isOpen ? 'bg-white/5' : 'bg-transparent'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-serif transition-colors ${isOpen ? 'text-mint' : 'text-white group-hover:text-gray-200'}`}>
          {question}
        </span>
        <div className={`p-1.5 rounded-full border transition-all duration-300 ${isOpen ? 'border-mint bg-mint/10 rotate-180' : 'border-white/20 bg-white/5 rotate-0'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-mint" /> : <Plus className="w-4 h-4 text-white/60" />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-8 text-gray-300 font-light leading-relaxed text-base md:text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
            <Sparkles className="w-3.5 h-3.5 text-mint" />
            <span className="text-[10px] font-bold text-mint uppercase tracking-widest">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Santuário de Respostas</h2>
          <p className="text-gray-400 font-light text-lg">Tudo o que você precisa saber para iniciar sua jornada com clareza.</p>
        </div>

        {/* Accordion Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>

        {/* Minimal Footer Support Hint */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-light">
            Ainda com dúvidas? Fale com a gente em <a href="mailto:contato@nyaapp.com" className="text-lavender hover:text-white transition-colors border-b border-lavender/30">contato@nyaapp.com</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
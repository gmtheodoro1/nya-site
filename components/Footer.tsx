import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  simpleMode?: boolean; // Se for true, esconde os links de navegação para não ficar repetitivo
}

const Footer: React.FC<FooterProps> = ({ simpleMode = false }) => {
  return (
    <footer className="w-full py-12 px-6 bg-[#131129] border-t border-white/5 relative overflow-hidden">
      
      {/* Luz de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#463856] blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-8 relative z-10">
        
        {/* 1. Área de Contato */}
        <div className="flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs uppercase tracking-widest font-medium">Suporte & Contato</span>
            <a 
              href="mailto:contato@nyaapp.com" 
              className="text-white/80 hover:text-[#BFA3FF] transition-colors duration-300 text-sm font-sans tracking-wide"
            >
              contato@nyaapp.com
            </a>
        </div>

        {/* 2. Disclaimer */}
        <p className="text-white/30 text-[10px] md:text-xs leading-relaxed max-w-2xl font-light">
          A Nya é uma ferramenta de bem-estar espiritual e autoconhecimento. Nossos serviços oferecem acolhimento emocional, 
          mas <strong>não substituem</strong> tratamento psicológico, psiquiátrico ou diagnóstico médico. 
          Em caso de crise ou emergência de saúde mental, procure ajuda profissional imediatamente.
        </p>

        <div className="w-12 h-[1px] bg-white/10"></div>

        {/* 3. Copyright */}
        <p className="text-white/40 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} Nya App. Todos os direitos reservados.
          <br className="md:hidden" /> Feito com 💜 para sua alma.
        </p>

        {/* 4. Links Legais (Só aparecem se NÃO estiver no modo simples) */}
        {!simpleMode && (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link 
              to="/termos" 
              className="text-white/30 hover:text-white/80 text-xs transition-colors duration-300"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/privacidade" 
              className="text-white/30 hover:text-white/80 text-xs transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
            {/* Link de Reembolso removido pois já consta nos Termos */}
          </div>
        )}

      </div>
    </footer>
  );
};

export default Footer;

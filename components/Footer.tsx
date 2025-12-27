import React, { useState } from 'react';
import { X } from 'lucide-react';

// --- CONTEÚDO JURÍDICO ATUALIZADO (BLINDADO) ---

const TERMS_CONTENT = `
**1. Introdução**
Bem-vinda à Nya. Ao utilizar nosso aplicativo ("Serviço"), você concorda com estes Termos de Uso. A Nya é uma inteligência artificial focada em espiritualidade, bem-estar e autoconhecimento.

**2. Isenção de Responsabilidade Médica**
A Nya NÃO é um dispositivo médico nem substitui terapia, diagnóstico ou tratamento profissional. Nossas orientações são baseadas em suporte emocional e espiritual. Em caso de crise, procure um médico ou ligue 188 (CVV).

**3. Assinaturas, Renovação e Cancelamento**
O serviço opera nos modelos de assinatura mensal, semestral ou anual.
- **Cancelamento:** Você pode cancelar a renovação automática a qualquer momento nas configurações.
- **Vigência:** O cancelamento interrompe apenas a cobrança do próximo ciclo. Para planos de longa duração (semestral ou anual), o cancelamento não gera reembolso proporcional dos meses restantes. Seu acesso premium continuará ativo e irrestrito até a data final do período já contratado.
- **Reembolso:** O estorno integral do valor pago só é aplicável quando solicitado dentro do prazo de garantia legal de 7 dias após a primeira compra.

**4. Uso Aceitável e Intransferível**
- **Uso Individual:** Sua conta é pessoal e intransferível. É estritamente proibido compartilhar login e senha com terceiros. Monitoramos o volume de uso (tokens) para identificar comportamentos anômalos de compartilhamento.
- **Propriedade e Fins:** A Nya é uma ferramenta de uso pessoal. É vedada a utilização da plataforma para geração de conteúdo comercial, publicações externas massivas em redes sociais ou uso da IA como ferramenta de redação para terceiros.
- **Violação:** A infração destas regras poderá acarretar a suspensão imediata da conta sem aviso prévio e, dependendo da gravidade, a Nya Tecnologia reserva-se o direito de acionar os meios legais cabíveis.

**5. Alterações e Notificações**
Podemos atualizar estes termos periodicamente para refletir mudanças na lei ou em nossos serviços. Em caso de alterações materiais relevantes, notificaremos você através do e-mail cadastrado ou via aviso de destaque dentro do aplicativo. O uso contínuo do serviço após essas alterações implica na sua aceitação.
`;

const PRIVACY_CONTENT = `
**1. Sua Privacidade é Sagrada**
Respeitamos profundamente sua intimidade. Esta política descreve como tratamos seus dados.

**2. Dados que Coletamos**
- Cadastro: E-mail e nome (para criar sua conta).
- Pagamento: Processados de forma segura pela Stripe (nós não armazenamos os números do seu cartão de crédito).
- Conversas: O conteúdo do seu chat é processado pela IA para gerar as respostas e é armazenado de forma criptografada para manter o contexto da sua jornada.

**3. Como Usamos seus Dados**
Utilizamos as informações apenas para fornecer, manter e personalizar o serviço da Nya para você. NÃO vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade.

**4. Segurança**
Adotamos medidas técnicas robustas (criptografia de ponta a ponta em trânsito e repouso) para proteger suas informações.

**5. Seus Direitos (LGPD)**
Você tem controle total. Você tem o direito de solicitar a exportação ou a exclusão definitiva de sua conta e de todos os seus dados a qualquer momento através do nosso canal de suporte.
`;

// ✨ NOVO CONTEÚDO ESPECÍFICO PARA REEMBOLSO ✨
const REFUND_CONTENT = `
**Política de Cancelamento e Reembolso**

Queremos que sua experiência com a Nya seja leve, segura e transparente. Abaixo detalhamos como funcionam nossos processos de cancelamento e devolução.

**1. Garantia de 7 Dias (Direito de Arrependimento)**
Oferecemos uma garantia incondicional de 7 dias corridos contados a partir da data da **primeira compra**.
- Se você sentir que a Nya não é para você dentro deste prazo inicial, basta entrar em contato com nosso suporte solicitando o reembolso.
- **Atenção:** Este benefício é válido exclusivamente para a primeira contratação. Caso você cancele sua assinatura e decida reativá-la ou assinar novamente no futuro, o período de 7 dias de garantia não será aplicável uma segunda vez.

**2. Cancelamento da Assinatura**
Você tem total autonomia. A renovação automática da sua assinatura pode ser cancelada a qualquer momento diretamente nas "Configurações" do aplicativo.
- O cancelamento impede cobranças futuras, mas não reembolsa valores já pagos (exceto na garantia de 7 dias).

**3. Planos Semestrais e Anuais**
Ao contratar um plano de longa duração, você recebe um desconto pelo compromisso de tempo.
- Caso cancele antes do fim do período contratado, **não realizamos reembolsos parciais (pro-rata)** pelos meses não utilizados.
- Seu acesso Premium continuará ativo e irrestrito até o último dia do ciclo contratado.

**4. Suporte Financeiro**
Qualquer dúvida sobre cobranças, faturas ou estornos deve ser encaminhada para contato@nyaapp.com.
`;

// --- COMPONENTE DO MODAL (Mantido igual) ---

const LegalModal = ({ title, content, isOpen, onClose }: { title: string, content: string, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#1a1635] border border-white/10 rounded-2xl shadow-2xl max-h-[80vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h3 className="text-xl font-serif text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="prose prose-invert prose-sm max-w-none text-white/70 font-light leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#131129]/50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium text-sm"
          >
            Entendi
          </button>
        </div>

      </div>
    </div>
  );
};

// --- FOOTER PRINCIPAL ---

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  return (
    <>
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

          {/* 4. Links Legais */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-white/30 hover:text-white/80 text-xs transition-colors duration-300 bg-transparent border-0 cursor-pointer"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => setActiveModal('privacy')}
              className="text-white/30 hover:text-white/80 text-xs transition-colors duration-300 bg-transparent border-0 cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => setActiveModal('refund')} // ✨ Agora aponta para o modal certo!
              className="text-white/30 hover:text-white/80 text-xs transition-colors duration-300 bg-transparent border-0 cursor-pointer"
            >
              Política de Reembolso
            </button>
          </div>

        </div>
      </footer>

      {/* Renderização dos Modais */}
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title="Termos de Uso"
        content={TERMS_CONTENT}
      />
      
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title="Política de Privacidade"
        content={PRIVACY_CONTENT}
      />
      
      <LegalModal 
        isOpen={activeModal === 'refund'} 
        onClose={() => setActiveModal(null)} 
        title="Política de Reembolso"
        content={REFUND_CONTENT} // ✨ Agora carrega o texto específico!
      />
    </>
  );
};

export default Footer;
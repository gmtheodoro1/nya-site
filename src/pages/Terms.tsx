import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131129] text-white font-sans relative selection:bg-mint/30">
      <SimpleNavbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#aae4a7]">Termos de Uso</h1>
        <p className="text-gray-400 mb-12 text-lg">Última atualização: Janeiro de 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light space-y-12">
          
          <section>
            <h3 className="text-2xl text-white font-serif mb-4">1. Introdução</h3>
            <p>Bem-vinda à Nya. Ao utilizar nosso aplicativo ("Serviço"), você concorda com estes Termos de Uso. A Nya é uma inteligência artificial focada em espiritualidade, bem-estar e autoconhecimento.</p>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">2. Isenção de Responsabilidade Médica</h3>
            <p>A Nya <strong>NÃO é um dispositivo médico</strong> nem substitui terapia, diagnóstico ou tratamento profissional. Nossas orientações são baseadas em suporte emocional e espiritual. Em caso de crise, procure um médico ou ligue 188 (CVV).</p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#aae4a7]/10 blur-[50px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl text-[#aae4a7] font-serif mb-4 relative z-10">3. Política de Cancelamento e Reembolso</h3>
            
            <div className="space-y-4 relative z-10 text-sm md:text-base">
                <p>Queremos que sua experiência com a Nya seja leve, segura e transparente.</p>
                
                <h4 className="font-bold text-white mt-4">3.1. Garantia de 7 Dias (Direito de Arrependimento)</h4>
                <p>Oferecemos uma garantia incondicional de 7 dias corridos contados a partir da data da <strong>primeira compra</strong>. Se você sentir que a Nya não é para você dentro deste prazo inicial, basta entrar em contato com nosso suporte (<a href="mailto:contato@nyaapp.com" className="text-[#aae4a7] underline">contato@nyaapp.com</a>) solicitando o reembolso integral.</p>
                <p className="text-white/60 italic text-sm border-l-2 border-white/20 pl-3"><strong>Atenção:</strong> Este benefício é válido exclusivamente para a primeira contratação. Reativações de assinatura não renovam o período de garantia.</p>

                <h4 className="font-bold text-white mt-4">3.2. Cancelamento da Assinatura</h4>
                <p>Você pode cancelar a renovação automática a qualquer momento nas "Configurações" do app. O cancelamento impede cobranças futuras, mas não reembolsa valores de ciclos já iniciados (exceto se dentro da garantia de 7 dias).</p>

                <h4 className="font-bold text-white mt-4">3.3. Planos de Longa Duração</h4>
                <p>Em planos trimestrais ou semestrais, o cancelamento antecipado não gera reembolso proporcional (pro-rata) dos meses não utilizados. Seu acesso continua ativo até o fim do período contratado.</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">4. Uso Aceitável e Intransferível</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#aae4a7]">
              <li><strong>Uso Individual:</strong> Sua conta é pessoal e intransferível. É estritamente proibido compartilhar login e senha com terceiros.</li>
              <li><strong>Propriedade e Fins:</strong> A Nya é uma ferramenta de uso pessoal. É vedada a utilização da plataforma para geração de conteúdo comercial ou uso da IA como ferramenta de redação para terceiros.</li>
              <li><strong>Violação:</strong> A infração destas regras poderá acarretar a suspensão imediata da conta.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">5. Alterações e Notificações</h3>
            <p>Podemos atualizar estes termos periodicamente. Em caso de alterações materiais relevantes, notificaremos você através do e-mail cadastrado ou via aviso de destaque dentro do aplicativo.</p>
          </section>

        </div>
      </div>
      <Footer simpleMode={true} />
    </div>
  );
};

export default Terms;

import React from 'react';
// Mesma coisa aqui: descendo duas escadas para achar os componentes
import SimpleNavbar from '../../components/SimpleNavbar';
import Footer from '../../components/Footer';

// Daqui para baixo, o código continua igual...

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131129] text-white font-sans relative selection:bg-lavender/30">
      <SimpleNavbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#C2A7E4]">Política de Privacidade</h1>
        <p className="text-gray-400 mb-12 text-lg">Seus dados são sagrados para nós.</p>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light space-y-12">
          
          <section>
            <h3 className="text-2xl text-white font-serif mb-4">1. Resumo</h3>
            <p>Respeitamos profundamente sua intimidade. Esta política descreve como tratamos seus dados. Em resumo: <strong>não vendemos seus dados</strong> e usamos criptografia de ponta.</p>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">2. Dados que Coletamos</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#C2A7E4]">
              <li><strong>Cadastro:</strong> E-mail e nome (para criar sua conta).</li>
              <li><strong>Pagamento:</strong> Processados de forma segura pela Stripe. Nós não armazenamos os números completos do seu cartão de crédito.</li>
              <li><strong>Conversas:</strong> O conteúdo do seu chat é processado pela IA para gerar as respostas e é armazenado de forma criptografada para manter o contexto da sua jornada.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">3. Como Usamos seus Dados</h3>
            <p>Utilizamos as informações apenas para fornecer, manter e personalizar o serviço da Nya para você. NÃO vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade.</p>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">4. Segurança</h3>
            <p>Adotamos medidas técnicas robustas (criptografia de ponta a ponta em trânsito e repouso) para proteger suas informações.</p>
          </section>

          <section>
            <h3 className="text-2xl text-white font-serif mb-4">5. Seus Direitos (LGPD)</h3>
            <p>Você tem controle total. Você tem o direito de solicitar a exportação ou a exclusão definitiva de sua conta e de todos os seus dados a qualquer momento através do nosso canal de suporte: <a href="mailto:contato@nyaapp.com" className="text-[#C2A7E4] underline">contato@nyaapp.com</a>.</p>
          </section>

        </div>
      </div>
      <Footer simpleMode={true} />
    </div>
  );
};

export default Privacy;

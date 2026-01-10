import { ExternalLink, MessageCircle } from 'lucide-react'

const SYSTEM_URL = 'https://miaza.caveltech.com.br/'
const WHATSAPP_URL = 'https://wa.me/5514991820558?text=Ola!%20Quero%20conhecer%20o%20MIAZA'

export function CTA() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-miaza-600 via-miaza-700 to-miaza-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-miaza-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-miaza-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4">
              Pronto para profissionalizar suas vendas?
            </h2>
            <p className="text-lg md:text-xl text-miaza-200 max-w-2xl mx-auto mb-8">
              Comece seu teste grátis de 7 dias e tenha controle total do seu negócio.
              Por tempo limitado: <span className="line-through text-miaza-300">R$ 69,90</span>{' '}
              <span className="font-semibold text-white">R$ 29,90/mês</span> - custando menos que um brinco.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SYSTEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-miaza-700 hover:bg-miaza-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                Começar Teste Grátis
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miaza-500 hover:bg-miaza-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Tirar Dúvidas no WhatsApp
              </a>
            </div>

            <p className="text-miaza-300 text-sm mt-6">
              7 dias grátis - Até 3 vendedores - Suporte via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

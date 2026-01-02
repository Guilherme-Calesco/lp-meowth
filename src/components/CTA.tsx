import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react'

const SYSTEM_URL = 'https://miaza.caveltech.com.br/'

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
              Pronta para organizar suas vendas?
            </h2>
            <p className="text-lg md:text-xl text-miaza-200 max-w-2xl mx-auto mb-8">
              Comece agora e tenha controle total do seu negocio.
              Por apenas <span className="font-semibold text-white">R$ 9,90/mes</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SYSTEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-miaza-700 hover:bg-miaza-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                Acessar o Sistema
              </a>
              <a
                href="https://wa.me/5511999999999?text=Ola!%20Quero%20conhecer%20o%20MIAZA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miaza-500 hover:bg-miaza-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>

            <p className="text-miaza-300 text-sm mt-6">
              Duvidas? Estamos aqui para ajudar!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

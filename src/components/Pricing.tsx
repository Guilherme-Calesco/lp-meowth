import { Check, ArrowRight } from 'lucide-react'

const benefits = [
  '7 dias gratis para testar',
  'Todos os recursos inclusos',
  'Ate 3 vendedoras adicionais',
  'Vitrine virtual ilimitada',
  'Relatorios completos de vendas',
  'Suporte por WhatsApp',
  'Atualizacoes gratuitas',
  'Cancele quando quiser',
]

export function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Custando menos que um brinco
          </h2>
          <p className="section-subtitle">
            Sistema completo de gestao para revendedoras por um preco que cabe no bolso. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-miaza-600 to-miaza-700 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-miaza-200 text-sm uppercase tracking-wider mb-2">
                Plano Completo
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-medium">R$</span>
                <span className="text-6xl md:text-7xl font-serif font-medium">29</span>
                <span className="text-2xl font-medium">,90</span>
                <span className="text-miaza-200 ml-2">/mes</span>
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-miaza-300 shrink-0" size={20} />
                  <span className="text-miaza-100">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://miaza.caveltech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-miaza-700 hover:bg-miaza-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Comecar Teste Gratis
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust Note */}
          <p className="text-center text-miaza-500 text-sm mt-6">
            Teste gratis por 7 dias. Sem cartao de credito. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}

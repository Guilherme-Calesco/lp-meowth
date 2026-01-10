import { ArrowRight, Sparkles, ExternalLink, Share2 } from 'lucide-react'

const SYSTEM_URL = 'https://miaza.caveltech.com.br/'

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-miaza-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-miaza-100 text-miaza-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Sistema de gestão para revendedores e artesãos
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-miaza-900 leading-tight mb-6">
            Sistema para revendedores:{' '}
            <span className="text-miaza-600">controle total</span> do seu{' '}
            <span className="text-miaza-600">negócio</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-miaza-700 mb-4 max-w-2xl mx-auto">
            O MIAZA é o sistema completo para quem trabalha com revenda ou artesanato.
            Gerencie seus produtos, acompanhe vendas com relatórios detalhados, crie sua{' '}
            <span className="font-semibold text-miaza-600">vitrine virtual</span>{' '}
            e compartilhe no WhatsApp com seus clientes.
          </p>

          {/* Price highlight */}
          <p className="text-xl md:text-2xl text-miaza-800 mb-8 max-w-2xl mx-auto font-medium">
            Custando menos que um brinco:{' '}
            <span className="line-through text-miaza-400">R$ 69,90</span>{' '}
            <span className="text-miaza-600">R$ 29,90/mês</span>
            <span className="block text-base text-miaza-600 mt-1">Por tempo limitado + 7 dias grátis para testar</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Testar Gratis por 7 Dias
              <ExternalLink size={20} />
            </a>
            <a href="#funcionalidades" className="btn-secondary flex items-center gap-2">
              Ver Funcionalidades
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-miaza-500">
            7 dias grátis - Até 3 vendedoras adicionais - Cancele quando quiser - Suporte via WhatsApp
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-miaza-100 overflow-hidden">
            <div className="bg-miaza-800 h-8 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 md:p-8 bg-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Vendas Hoje', value: 'R$ 850' },
                  { label: 'Vendas no Mes', value: 'R$ 12.500' },
                  { label: 'Clientes Ativos', value: '48' },
                  { label: 'Produtos', value: '156' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-miaza-500">{stat.label}</p>
                    <p className="text-xl font-semibold text-miaza-900">{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Vitrine Preview */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Share2 size={16} className="text-miaza-600" />
                  <span className="text-sm font-medium text-miaza-700">Vitrine Digital</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Ativa</span>
                </div>
                <div className="h-24 bg-gradient-to-r from-miaza-100 to-miaza-200 rounded-lg flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-miaza-400">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-miaza-400">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-miaza-400">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="hidden sm:flex w-16 h-16 bg-white rounded-lg shadow-sm items-center justify-center text-miaza-400">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

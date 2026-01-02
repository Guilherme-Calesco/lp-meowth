import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-miaza-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-miaza-100 text-miaza-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Sistema completo para joalherias
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-miaza-900 leading-tight mb-6">
            Gerencie sua joalheria com{' '}
            <span className="text-miaza-600">simplicidade</span> e{' '}
            <span className="text-miaza-600">elegancia</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-miaza-700 mb-8 max-w-2xl mx-auto">
            MIAZA e o sistema completo para controlar vendas, estoque, clientes e financeiro da sua joalheria.
            Tudo em um so lugar, por apenas{' '}
            <span className="font-semibold text-miaza-600">R$ 9,90/mes</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contato" className="btn-primary flex items-center gap-2">
              Quero Comecar
              <ArrowRight size={20} />
            </a>
            <a href="#funcionalidades" className="btn-secondary">
              Ver Funcionalidades
            </a>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-miaza-500">
            Sem taxa de setup - Cancele quando quiser - Suporte incluso
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
                  { label: 'Vendas Hoje', value: 'R$ 2.450' },
                  { label: 'Vendas no Mes', value: 'R$ 45.800' },
                  { label: 'Clientes Ativos', value: '127' },
                  { label: 'Produtos', value: '342' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-miaza-500">{stat.label}</p>
                    <p className="text-xl font-semibold text-miaza-900">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="h-32 bg-gradient-to-r from-miaza-100 to-miaza-200 rounded-lg flex items-center justify-center">
                  <p className="text-miaza-600 font-medium">Dashboard Interativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

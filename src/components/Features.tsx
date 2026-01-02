import {
  Package,
  ShoppingCart,
  Users,
  LayoutDashboard,
  BarChart3,
  CreditCard,
  Share2,
  Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Gestao de Produtos',
    description: 'Cadastre seu catalogo completo de joias por categoria: aneis, colares, pulseiras, brincos e mais.',
  },
  {
    icon: ShoppingCart,
    title: 'Controle de Vendas',
    description: 'Registre vendas facilmente com multiplos itens, descontos e diversas formas de pagamento.',
  },
  {
    icon: Users,
    title: 'Gestao de Clientes',
    description: 'Cadastro completo dos seus clientes com historico de compras e contatos.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Inteligente',
    description: 'Visualize suas vendas do dia, receitas mensais e contas a receber em tempo real.',
  },
  {
    icon: BarChart3,
    title: 'Relatorios Completos',
    description: 'Analise vendas por periodo e descubra os produtos mais vendidos.',
  },
  {
    icon: CreditCard,
    title: 'Controle de Crediario',
    description: 'Gerencie vendas a prazo e receba alertas de vencimentos.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-miaza-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Tudo que voce precisa em um so lugar
          </h2>
          <p className="section-subtitle">
            Funcionalidades completas para revendedoras e profissionais autonomas
          </p>
        </div>

        {/* Vitrine - Destaque Principal */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-miaza-600 to-miaza-700 rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-miaza-500/20 rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
                <Share2 className="text-white" size={32} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium">
                    Vitrine Digital
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    <Sparkles size={12} />
                    NOVO
                  </span>
                </div>
                <p className="text-miaza-100 text-lg leading-relaxed max-w-2xl">
                  Selecione seus melhores produtos, crie uma vitrine personalizada e compartilhe o link
                  no WhatsApp, Instagram ou grupos. Seus clientes visualizam e escolhem o que querem comprar!
                </p>
              </div>

              <div className="hidden lg:flex flex-col items-center gap-2 text-center shrink-0">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <p className="text-3xl font-bold">+</p>
                  <p className="text-sm text-miaza-200">Vendas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outras Funcionalidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-miaza-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-miaza-600" size={24} />
              </div>
              <h3 className="text-lg font-serif font-medium text-miaza-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-miaza-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import {
  Package,
  ShoppingCart,
  Users,
  LayoutDashboard,
  BarChart3,
  CreditCard
} from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Gestao de Produtos',
    description: 'Cadastre seu catalogo completo de joias por categoria: aneis, colares, pulseiras, brincos e mais. Controle estoque, precos e imagens.',
  },
  {
    icon: ShoppingCart,
    title: 'Controle de Vendas',
    description: 'Registre vendas facilmente com multiplos itens, descontos personalizados e diversas formas de pagamento.',
  },
  {
    icon: Users,
    title: 'Gestao de Clientes',
    description: 'Mantenha um cadastro completo dos seus clientes com historico de compras, contatos e preferencias.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Inteligente',
    description: 'Visualize KPIs em tempo real: vendas do dia, receitas mensais, contas a receber e muito mais.',
  },
  {
    icon: BarChart3,
    title: 'Relatorios Completos',
    description: 'Analise vendas por periodo, descubra os produtos mais vendidos e tome decisoes baseadas em dados.',
  },
  {
    icon: CreditCard,
    title: 'Controle de Crediario',
    description: 'Gerencie vendas a prazo, acompanhe parcelas e receba alertas de vencimentos para nunca perder cobrancas.',
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
            Funcionalidades completas para gerenciar sua joalheria do inicio ao fim
          </p>
        </div>

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

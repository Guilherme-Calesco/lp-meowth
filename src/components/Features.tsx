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
import { PhoneMockup } from './PhoneMockup'

const features = [
  {
    icon: Package,
    title: 'Cadastro de Produtos',
    description: 'Organize seu catálogo completo por categoria. Adicione fotos, preços e controle seu estoque de forma simples e eficiente.',
  },
  {
    icon: ShoppingCart,
    title: 'Registro de Vendas',
    description: 'Registre cada venda com facilidade. Múltiplos itens, descontos personalizados e todas as formas de pagamento: dinheiro, PIX, cartão ou crediário.',
  },
  {
    icon: Users,
    title: 'Cadastro de Clientes',
    description: 'Mantenha o cadastro completo dos seus clientes com telefone, endereço e histórico de compras. Nunca mais esqueça um cliente.',
  },
  {
    icon: LayoutDashboard,
    title: 'Painel de Controle',
    description: 'Acompanhe suas vendas do dia, do mês e valores a receber. Tudo em tempo real na palma da sua mão.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios de Vendas',
    description: 'Descubra quais produtos mais vendem, qual seu lucro por período e tome decisões baseadas em dados reais do seu negócio.',
  },
  {
    icon: CreditCard,
    title: 'Controle de Crediário',
    description: 'Venda a prazo com segurança. Controle parcelas, receba alertas de vencimento e nunca mais perca uma cobrança.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-miaza-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Funcionalidades completas para seu negócio
          </h2>
          <p className="section-subtitle">
            Gerencie produtos, vendas, clientes e crie sua vitrine virtual. Tudo o que você precisa para profissionalizar sua revenda ou artesanato.
          </p>
        </div>

        {/* Vitrine - Destaque Principal */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-miaza-600 to-miaza-700 rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-miaza-500/20 rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Texto */}
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                  <Share2 className="text-white" size={32} />
                </div>

                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium">
                    Vitrine Digital
                  </h3>
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    <Sparkles size={12} />
                    NOVO
                  </span>
                </div>
                <p className="text-miaza-100 text-lg leading-relaxed">
                  Crie sua vitrine virtual personalizada com suas melhores peças e compartilhe o link
                  no WhatsApp, Instagram ou grupos de vendas. Suas clientes visualizam os produtos com fotos e preços, escolhem o que querem e entram em contato direto com você!
                </p>
              </div>

              {/* Screenshot */}
              <div className="flex justify-center md:justify-end">
                <div className="max-w-[240px]">
                  <PhoneMockup
                    imageSrc="/appvitrine (2).webp"
                    alt="Vitrine Digital MIAZA - Compartilhe seus produtos no WhatsApp"
                    lazy={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outras Funcionalidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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

        {/* Veja o App em Ação */}
        <div className="mt-16 pt-16 border-t border-miaza-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-miaza-900 mb-3">
              Veja o App em Ação
            </h3>
            <p className="text-lg text-miaza-700 max-w-2xl mx-auto">
              Interface simples e intuitiva, desenvolvida pensando em você
            </p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <PhoneMockup
              imageSrc="/appprodutos.webp"
              alt="Gerenciamento de Produtos MIAZA"
              caption="Organize seus produtos por categorias com fotos e controle de estoque"
              lazy={true}
            />
            <PhoneMockup
              imageSrc="/appmenu.webp"
              alt="Menu de Navegação MIAZA"
              caption="Navegue rapidamente entre todas as funcionalidades do sistema"
              lazy={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

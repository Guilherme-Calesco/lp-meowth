import { Cloud, Smartphone, Shield, Users, Zap, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Cloud,
    title: 'Acesso Online',
    description: 'Acesse do celular, tablet ou computador. Seus dados sempre disponíveis, em qualquer lugar.',
  },
  {
    icon: Smartphone,
    title: 'Fácil de Usar',
    description: 'Interface simples e intuitiva. Comece a usar em minutos, sem precisar de treinamento.',
  },
  {
    icon: Shield,
    title: 'Dados Seguros',
    description: 'Seus dados protegidos com criptografia e backups automáticos diários.',
  },
  {
    icon: Users,
    title: 'Até 3 Vendedores',
    description: 'Adicione até 3 vendedores adicionais para ajudar nas vendas. Perfeito para equipes pequenas.',
  },
  {
    icon: Zap,
    title: 'Sempre Atualizado',
    description: 'Novas funcionalidades e melhorias constantes incluídas no plano, sem pagar a mais.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte via WhatsApp',
    description: 'Equipe pronta para ajudar você pelo WhatsApp. Tire dúvidas e resolva problemas rapidamente.',
  },
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-miaza-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white text-center mb-4">
            Por que revendedores e artesãos escolhem o MIAZA?
          </h2>
          <p className="text-lg text-miaza-300 text-center max-w-2xl mx-auto">
            Sistema desenvolvido especialmente para quem trabalha com revenda ou artesanato
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-miaza-800/50 backdrop-blur rounded-xl p-6 border border-miaza-700"
            >
              <div className="w-10 h-10 bg-miaza-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-miaza-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

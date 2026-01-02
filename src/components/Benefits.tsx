import { Cloud, Smartphone, Shield, Users, Zap, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Cloud,
    title: 'Na Nuvem',
    description: 'Acesse de qualquer lugar, a qualquer hora. Seus dados sempre disponiveis.',
  },
  {
    icon: Smartphone,
    title: 'Interface Intuitiva',
    description: 'Design moderno e facil de usar. Sem treinamentos complicados.',
  },
  {
    icon: Shield,
    title: 'Dados Seguros',
    description: 'Criptografia de ponta e backups automaticos para sua tranquilidade.',
  },
  {
    icon: Users,
    title: 'Multi-usuarios',
    description: 'Adicione quantos vendedores precisar sem custo adicional.',
  },
  {
    icon: Zap,
    title: 'Sempre Atualizado',
    description: 'Novas funcionalidades e melhorias constantes sem pagar a mais.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Humanizado',
    description: 'Equipe pronta para ajudar voce a tirar o maximo do sistema.',
  },
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-miaza-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white text-center mb-4">
            Por que escolher o MIAZA?
          </h2>
          <p className="text-lg text-miaza-300 text-center max-w-2xl mx-auto">
            Muito mais que um sistema, uma parceria para o sucesso do seu negocio
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

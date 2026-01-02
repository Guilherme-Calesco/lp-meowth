import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function Problem() {
  const problems = [
    'Anotacoes em caderninhos que se perdem',
    'Dificuldade em lembrar quem deve o que',
    'Cobrancas perdidas e clientes inadimplentes',
    'Falta de controle sobre suas vendas e lucros',
  ]

  const solutions = [
    'Tudo organizado no celular ou computador',
    'Historico completo de cada cliente',
    'Alertas de vencimento e gestao de crediario',
    'Dashboard com suas vendas e resultados',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Chega de dor de cabeca com anotacoes
          </h2>
          <p className="section-subtitle">
            Sabemos como e dificil controlar vendas, clientes e cobrancas sem uma ferramenta adequada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <div className="bg-red-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-serif font-medium text-red-800 mb-6 flex items-center gap-2">
              <AlertCircle className="text-red-500" />
              Sem MIAZA
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">
                    X
                  </span>
                  <span className="text-red-900">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-miaza-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-serif font-medium text-miaza-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-miaza-600" />
              Com MIAZA
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-miaza-200 text-miaza-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-miaza-900">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

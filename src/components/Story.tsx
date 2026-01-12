import { Linkedin, Instagram } from 'lucide-react'

export function Story() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">A história do Miaza</h2>
        <p className="section-subtitle">
          De uma necessidade real para uma solução que transforma negócios
        </p>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Foto */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-miaza-100 shadow-lg">
                <img
                  src="/RH000281.JPG"
                  alt="Guilherme Calesco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-miaza-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                Fundadores
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-miaza-900 mb-3">
                Guilherme Calesco
              </h3>
              <p className="text-miaza-700 leading-relaxed">
                Engenheiro de software e CTO, atuando em tecnologia desde 2008. Desenvolve soluções
                práticas para diversos mercados, criando softwares SaaS, CRMs e plataformas de
                automação que integram Inteligência Artificial, WhatsApp e infraestrutura em nuvem
                para gerar eficiência, escala e resultados reais de negócio.
              </p>
            </div>

            <div className="bg-miaza-50 rounded-xl p-5 border border-miaza-100">
              <p className="text-miaza-800 leading-relaxed">
                <span className="font-semibold text-miaza-600">O Miaza nasceu de uma necessidade real:</span>{' '}
                ajudar a gestão das vendas de uma loja de semijoias da minha namorada. O que começou
                como uma solução caseira rapidamente mostrou seu potencial. Clientes e amigos começaram
                a perguntar sobre o sistema, e a demanda crescente transformou um projeto pessoal em
                um produto completo. Hoje, o Miaza ajuda empreendedores a organizarem suas vendas com
                a mesma simplicidade e eficiência que conquistou os primeiros usuários.
              </p>
            </div>

            {/* Links sociais */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/guicalesco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/miazajoias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">@miazajoias</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

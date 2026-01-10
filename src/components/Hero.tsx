import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'

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

        {/* App Screenshot */}
        <div className="mt-16 relative animate-fade-in">
          <PhoneMockup
            imageSrc="/apphome.webp"
            alt="Dashboard MIAZA - Acompanhe suas vendas em tempo real"
            lazy={false}
            className="scale-90 md:scale-100 transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>
  )
}

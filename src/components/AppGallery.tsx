import { useState } from 'react'
import { PhoneMockup } from './PhoneMockup'

const screenshots = [
  {
    imageSrc: '/apphome.webp',
    alt: 'Dashboard MIAZA',
    caption: 'Dashboard com métricas em tempo real',
  },
  {
    imageSrc: '/appvitrine.webp',
    alt: 'Vitrine Virtual MIAZA',
    caption: 'Vitrine virtual para compartilhar no WhatsApp',
  },
  {
    imageSrc: '/appprodutos.webp',
    alt: 'Produtos MIAZA',
    caption: 'Gerenciamento completo de produtos',
  },
  {
    imageSrc: '/appmenu.webp',
    alt: 'Menu MIAZA',
    caption: 'Navegação intuitiva e rápida',
  },
  {
    imageSrc: '/appvitrine (2).webp',
    alt: 'Personalização de Vitrine MIAZA',
    caption: 'Personalize sua vitrine',
  },
]

export function AppGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const container = document.getElementById('gallery-container')
    if (container) {
      const itemWidth = container.scrollWidth / screenshots.length
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      })
    }
    setActiveIndex(index)
  }

  const handleScroll = () => {
    const container = document.getElementById('gallery-container')
    if (container) {
      const itemWidth = container.scrollWidth / screenshots.length
      const newIndex = Math.round(container.scrollLeft / itemWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-miaza-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
            Conheça o MIAZA por Dentro
          </h2>
          <p className="text-lg text-miaza-200 max-w-2xl mx-auto">
            Navegue pelas telas do aplicativo e veja como é fácil gerenciar seu negócio
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Container com scroll horizontal */}
          <div
            id="gallery-container"
            className="scroll-snap-x hide-scrollbar overflow-x-auto"
            onScroll={handleScroll}
          >
            <div className="flex gap-8 px-4 md:px-8 py-8">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="scroll-snap-center flex-shrink-0 w-full sm:w-auto"
                >
                  <PhoneMockup
                    imageSrc={screenshot.imageSrc}
                    alt={screenshot.alt}
                    caption={screenshot.caption}
                    lazy={true}
                    className="text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-miaza-400 w-8'
                    : 'bg-miaza-600 hover:bg-miaza-500'
                }`}
                aria-label={`Ver screenshot ${index + 1}`}
              />
            ))}
          </div>

          {/* Instrução de swipe mobile */}
          <p className="text-center text-sm text-miaza-400 mt-6 md:hidden">
            ← Deslize para ver mais →
          </p>
        </div>
      </div>
    </section>
  )
}

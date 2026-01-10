interface PhoneMockupProps {
  imageSrc: string
  alt: string
  caption?: string
  lazy?: boolean
  className?: string
}

export function PhoneMockup({ imageSrc, alt, caption, lazy = false, className = '' }: PhoneMockupProps) {
  // Determinar as fontes baseadas no nome do arquivo
  const isWebP = imageSrc.includes('.webp')
  const baseName = imageSrc.replace('.webp', '').replace('.png', '')

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-full max-w-[280px] mx-auto">
        {/* Phone Shadow and Border */}
        <div className="relative bg-miaza-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-white rounded-[2rem] overflow-hidden">
            {/* Notch (opcional - estilo iPhone) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-miaza-900 rounded-b-2xl z-10"></div>

            {/* Image with responsive sources */}
            {isWebP ? (
              <picture>
                <source
                  srcSet={`${baseName}-mobile.webp`}
                  media="(max-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${baseName}-tablet.webp`}
                  media="(max-width: 1024px)"
                  type="image/webp"
                />
                <source
                  srcSet={imageSrc}
                  type="image/webp"
                />
                <img
                  src={`${baseName}.png`}
                  alt={alt}
                  loading={lazy ? 'lazy' : 'eager'}
                  className="w-full h-auto aspect-[9/19.5] object-cover"
                />
              </picture>
            ) : (
              <img
                src={imageSrc}
                alt={alt}
                loading={lazy ? 'lazy' : 'eager'}
                className="w-full h-auto aspect-[9/19.5] object-cover"
              />
            )}
          </div>
        </div>
      </div>

      {/* Caption (opcional) */}
      {caption && (
        <p className="text-sm md:text-base text-miaza-700 text-center max-w-xs">
          {caption}
        </p>
      )}
    </div>
  )
}

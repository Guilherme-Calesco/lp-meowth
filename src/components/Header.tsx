import { useState } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'

const SYSTEM_URL = 'https://miaza.caveltech.com.br/'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/logo_horizontal.jpg" alt="MIAZA" className="h-10 w-auto rounded" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-miaza-700 hover:text-miaza-900 transition-colors">
              Funcionalidades
            </a>
            <a href="#precos" className="text-miaza-700 hover:text-miaza-900 transition-colors">
              Precos
            </a>
            <a href="#faq" className="text-miaza-700 hover:text-miaza-900 transition-colors">
              FAQ
            </a>
            <a
              href={SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Acessar Sistema
              <ExternalLink size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-miaza-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-miaza-100">
            <div className="flex flex-col gap-4">
              <a
                href="#funcionalidades"
                className="text-miaza-700 hover:text-miaza-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                href="#precos"
                className="text-miaza-700 hover:text-miaza-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Precos
              </a>
              <a
                href="#faq"
                className="text-miaza-700 hover:text-miaza-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href={SYSTEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Acessar Sistema
                <ExternalLink size={16} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

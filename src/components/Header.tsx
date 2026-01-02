import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="MIAZA" className="h-10 w-auto" />
            <span className="text-xl font-serif font-medium text-miaza-800">MIAZA</span>
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
            <a href="#contato" className="btn-primary">
              Comecar Agora
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
                href="#contato"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Comecar Agora
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

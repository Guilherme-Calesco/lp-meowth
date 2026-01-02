import { Mail, Phone, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-miaza-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="MIAZA" className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-serif font-medium">MIAZA</span>
            </div>
            <p className="text-miaza-400 mb-4 max-w-md">
              Sistema completo de gestao para joalherias. Simplifique seu negocio e foque no que realmente importa: seus clientes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-miaza-800 hover:bg-miaza-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-miaza-800 hover:bg-miaza-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#funcionalidades" className="text-miaza-400 hover:text-white transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#precos" className="text-miaza-400 hover:text-white transition-colors">
                  Precos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-miaza-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-miaza-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@miaza.com.br"
                  className="text-miaza-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  contato@miaza.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-miaza-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-miaza-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-miaza-500 text-sm">
            {currentYear} MIAZA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-miaza-500 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-miaza-500 hover:text-white transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

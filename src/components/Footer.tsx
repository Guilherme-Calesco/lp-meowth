import { Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react'

const SYSTEM_URL = 'https://miaza.caveltech.com.br/'
const WHATSAPP_URL = 'https://wa.me/5514998120558'
const EMAIL = 'guilherme.carod@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/miazajoias/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/guicalesco/'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-miaza-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo_horizontal.jpg" alt="MIAZA" className="h-12 w-auto rounded" />
            </div>
            <p className="text-miaza-400 mb-4 max-w-md">
              Sistema de gestão para revendedoras de semijoias, bijuterias e acessórios.
              Gerencie produtos, vendas, clientes e crie sua vitrine virtual. De R$ 69,90 por apenas R$ 29,90/mês.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-miaza-800 hover:bg-miaza-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-miaza-800 hover:bg-miaza-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
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
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="text-miaza-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={SYSTEM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-miaza-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Acessar Sistema
                  <ExternalLink size={14} />
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
                  href={`mailto:${EMAIL}`}
                  className="text-miaza-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-miaza-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (14) 99812-0558
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

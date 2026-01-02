import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona o periodo de teste?',
    answer: 'Voce tem 7 dias gratuitos para testar todas as funcionalidades do MIAZA. Durante esse periodo, voce tem acesso completo ao sistema sem nenhum compromisso. Se nao gostar, e so cancelar.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Nao temos fidelidade ou multas. Voce pode cancelar sua assinatura a qualquer momento diretamente pelo sistema ou entrando em contato conosco.',
  },
  {
    question: 'Quantos usuarios posso ter?',
    answer: 'O MIAZA permite usuarios ilimitados sem custo adicional. Voce pode adicionar vendedores, gerentes e outros colaboradores sem se preocupar com taxas extras.',
  },
  {
    question: 'Meus dados estao seguros?',
    answer: 'Absolutamente! Utilizamos criptografia de ponta a ponta e fazemos backups automaticos diarios. Seus dados estao protegidos em servidores seguros na nuvem.',
  },
  {
    question: 'Preciso instalar alguma coisa?',
    answer: 'Nao! O MIAZA funciona 100% online no seu navegador. Basta acessar o sistema de qualquer computador, tablet ou celular com acesso a internet.',
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Oferecemos suporte via WhatsApp e email em horario comercial. Nossa equipe esta pronta para ajudar com duvidas, configuracoes e qualquer problema que voce tiver.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-miaza-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Perguntas Frequentes
          </h2>
          <p className="section-subtitle">
            Tire suas duvidas sobre o MIAZA
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-miaza-900">{faq.question}</span>
                <ChevronDown
                  className={`text-miaza-500 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-miaza-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

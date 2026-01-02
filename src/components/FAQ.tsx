import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona o teste gratis de 7 dias?',
    answer: 'Voce tem 7 dias gratuitos para testar todas as funcionalidades do MIAZA, incluindo a vitrine virtual e os relatorios. Durante esse periodo, voce tem acesso completo ao sistema sem precisar cadastrar cartao de credito. Se nao gostar, e so nao continuar.',
  },
  {
    question: 'O que esta incluso nos R$ 29,90/mes?',
    answer: 'Tudo! Cadastro de produtos, registro de vendas, gestao de clientes, vitrine virtual para compartilhar no WhatsApp, relatorios completos, controle de crediario e suporte via WhatsApp. Sem taxas extras ou surpresas.',
  },
  {
    question: 'Quantas vendedoras posso adicionar?',
    answer: 'O MIAZA permite adicionar ate 3 vendedoras adicionais alem do usuario principal. Cada uma tera seu proprio acesso para registrar vendas e gerenciar clientes.',
  },
  {
    question: 'Como funciona a vitrine virtual?',
    answer: 'Voce seleciona os produtos que deseja mostrar, o sistema gera um link unico da sua vitrine que pode ser compartilhado no WhatsApp, Instagram ou grupos. Suas clientes visualizam os produtos com fotos e precos e entram em contato para comprar.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Nao temos fidelidade ou multas. Voce pode cancelar sua assinatura a qualquer momento diretamente pelo sistema ou entrando em contato conosco pelo WhatsApp.',
  },
  {
    question: 'Preciso instalar alguma coisa?',
    answer: 'Nao! O MIAZA funciona 100% online no seu navegador. Basta acessar o sistema de qualquer computador, tablet ou celular com acesso a internet. Seus dados ficam salvos na nuvem com backup automatico.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-miaza-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Duvidas sobre o sistema para revendedoras?
          </h2>
          <p className="section-subtitle">
            Respondemos as perguntas mais frequentes sobre o MIAZA
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

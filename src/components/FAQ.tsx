'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Vad är ett värdepapperslån?',
      answer: 'Ett värdepapperslån är en kredit där du använder dina aktier, fonder eller andra värdepapper som säkerhet. Du behåller ägandet av dina värdepapper och kan fortsätta ta del av eventuell värdeökning och utdelningar, samtidigt som du får tillgång till kapital.',
    },
    {
      question: 'Vilka kan ansöka om värdepapperslån?',
      answer: 'Du som är myndig, har en svensk adress och äger noterade värdepapper kan ansöka. Vi gör alltid en individuell bedömning av din ansökan baserat på ditt innehav och din ekonomiska situation.',
    },
    {
      question: 'Hur mycket kan jag låna?',
      answer: 'Hur mycket du kan låna beror på värdet och typen av dina värdepapper. Belåningsgraden varierar typiskt mellan 30-70% beroende på värdepapprets karaktär. Storbolagsaktier har generellt högre belåningsgrad än småbolag.',
    },
    {
      question: 'Vad händer om mina värdepapper sjunker i värde?',
      answer: 'Om värdet på dina värdepapper sjunker kan din belåningsgrad överstiga gränsvärdet. I så fall kontaktar vi dig och ber dig antingen minska lånet, ställa ytterligare säkerhet, eller sätta in mer pengar. Om situationen inte åtgärdas kan vi behöva sälja värdepapper för att återställa belåningsgraden.',
    },
    {
      question: 'Kan jag använda pengarna till vad jag vill?',
      answer: 'Ja, du bestämmer själv hur du vill använda lånade medel. Vanliga användningsområden är nya investeringar, renovering, bilköp eller andra större utgifter.',
    },
    {
      question: 'Hur snabbt får jag pengarna?',
      answer: 'Efter godkänd kreditprövning och signerat avtal får du normalt tillgång till pengarna inom 1-2 bankdagar.',
    },
    {
      question: 'Kan jag betala tillbaka lånet när som helst?',
      answer: 'Ja, du kan när som helst betala tillbaka hela eller delar av lånet utan någon extra kostnad. Räntan beräknas endast på utestående belopp.',
    },
    {
      question: 'Påverkar värdepapperslånet min kreditvärdighet?',
      answer: 'Vi gör en sedvanlig kreditupplysning vid ansökan. Själva lånet rapporteras till kreditupplysningsföretag, men eftersom det är säkerställt med värdepapper påverkar det generellt kreditvärdigheten mindre än blancolån.',
    },
    {
      question: 'Vad kostar det om jag inte använder krediten?',
      answer: 'Det kostar ingenting att ha en beviljad men oanvänd kredit. Du betalar endast ränta på det belopp du faktiskt har lånat.',
    },
    {
      question: 'Behöver jag flytta mina värdepapper till Moank?',
      answer: 'Nej, du behöver inte flytta dina värdepapper. Vi samarbetar med flera depåhållare och kan ofta arrangera pant i befintlig depå.',
    },
  ]

  return (
    <section id="faq" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Vanliga frågor
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Har du frågor? Här hittar du svar på de vanligaste frågorna om värdepapperslån.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Hittar du inte svar på din fråga?{' '}
            <a href="#contact" className="text-emerald-600 font-medium hover:text-emerald-700">
              Kontakta oss
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

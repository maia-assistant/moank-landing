export default function HowItWorksB() {
  const steps = [
    {
      number: '01',
      title: 'Kontakta oss',
      description: 'Fyll i kontaktformuläret eller ring oss. Vi återkommer inom kort för att diskutera dina behov och möjligheter.',
    },
    {
      number: '02',
      title: 'Skicka underlag',
      description: 'Vi hjälper dig sammanställa nödvändigt underlag – depåutdrag, legitimation och övriga dokument som behövs.',
    },
    {
      number: '03',
      title: 'Kreditprövning',
      description: 'Vi gör en kreditprövning och värderar dina värdepapper. Du får besked om din kreditlimit och villkor.',
    },
    {
      number: '04',
      title: 'Signering & utbetalning',
      description: 'Signera avtalet digitalt med BankID. Efter signering får du tillgång till din kredit och kan ta ut pengar.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Så fungerar det
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Att ansöka om värdepapperslån hos Moank är enkelt. Här är stegen i processen.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00B2A9]/50 to-transparent -translate-x-4" />
              )}
              
              <div className="relative">
                <div className="w-16 h-16 bg-[#00B2A9] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Vilka värdepapper kan belånas?
              </h3>
              <p className="mt-4 text-gray-400">
                Vi accepterar de flesta noterade värdepapper som säkerhet. Belåningsvärdet varierar 
                beroende på värdepapprets karaktär och likviditet.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Svenska och nordiska aktier
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ETF:er och fonder
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Internationella blue chip-aktier
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Obligationer och räntebärande papper
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10">
              <h4 className="font-semibold text-white">Typiska belåningsgrader</h4>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Storbolagsaktier (Large Cap)</span>
                    <span className="font-medium text-white">upp till 70%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00B2A9] rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Mellanstora bolag (Mid Cap)</span>
                    <span className="font-medium text-white">upp till 50%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00B2A9] rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Fonder & ETF:er</span>
                    <span className="font-medium text-white">upp till 60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00B2A9] rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Småbolag (Small Cap)</span>
                    <span className="font-medium text-white">upp till 30%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00B2A9] rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                * Belåningsgraden kan variera beroende på individuell bedömning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

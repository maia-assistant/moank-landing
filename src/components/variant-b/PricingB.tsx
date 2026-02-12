export default function PricingB() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Transparent prissättning
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Vår ränta baseras på ditt lånebelopp och belåningsgrad. 
            Ingen uppläggningsavgift, inga dolda kostnader.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[#111111] rounded-3xl border border-white/10 overflow-hidden">
            <div className="bg-gradient-to-r from-[#00B2A9] to-[#008F89] p-8 text-center text-white">
              <p className="text-white/80 font-medium">Ränta från</p>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-5xl sm:text-6xl font-bold">4,5</span>
                <span className="text-2xl">%</span>
              </div>
              <p className="mt-2 text-white/80">per år (effektiv ränta)</p>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Räkneexempel</h3>
              
              <div className="bg-white/5 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lånebelopp</span>
                  <span className="font-semibold text-white">100 000 kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ränta</span>
                  <span className="font-semibold text-white">4,5% per år</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lånetid</span>
                  <span className="font-semibold text-white">1 år</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Räntekostnad</span>
                    <span className="font-semibold text-white">4 500 kr</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400">Totalt att betala</span>
                    <span className="font-bold text-lg text-[#00B2A9]">104 500 kr</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Ingen uppläggningsavgift</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Ingen kostnad för oanvänd kredit</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Återbetala när du vill utan avgift</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#00B2A9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Möjlighet till ränteavdrag (30%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning box */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-amber-400">Tänk på</h4>
                <p className="mt-1 text-sm text-amber-300/80">
                  Att låna kostar pengar. Om du inte kan betala tillbaka skulden i tid riskerar du en 
                  betalningsanmärkning. Det kan leda till svårigheter att få hyra bostad, teckna 
                  abonnemang och få nya lån. För stöd, vänd dig till budget- och skuldrådgivningen i 
                  din kommun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FeaturesB() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Behåll dina investeringar',
      description: 'Låna utan att sälja dina aktier eller fonder. Dina investeringar fortsätter att arbeta för dig medan du får tillgång till likviditet.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexibel användning',
      description: 'Använd pengarna till vad du vill – nya investeringar, renovering, eller andra behov. Du bestämmer själv.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trygg och reglerad',
      description: 'Moank är ett svenskt konsumentkreditinstitut under Finansinspektionens tillsyn. Din trygghet är vår prioritet.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Snabb process',
      description: 'Enkel ansökan med snabb handläggning. Vi strävar efter att ge dig besked inom 24 timmar på vardagar.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Transparent prissättning',
      description: 'Inga dolda avgifter. Du betalar endast ränta på det belopp du faktiskt använder, ingenting annat.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Ingen kostnad att ha krediten',
      description: 'Det kostar ingenting att ha en beviljad kreditlimit. Du betalar endast när du faktiskt använder den.',
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Varför välja värdepapperslån?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Värdepapperslån ger dig möjlighet att frigöra kapital utan att sälja dina investeringar. 
            Perfekt för dig som vill behålla din portfölj och samtidigt få tillgång till likviditet.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00B2A9]/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#00B2A9]/10 text-[#00B2A9] rounded-xl flex items-center justify-center group-hover:bg-[#00B2A9]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

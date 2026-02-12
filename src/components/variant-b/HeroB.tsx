export default function HeroB() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00B2A9]/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Partner badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="text-sm text-gray-400">I samarbete med</span>
            <span className="font-semibold text-white">PAM Capital</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Värdepapperslån med{' '}
            <span className="text-[#00B2A9]">
              konkurrenskraftig ränta
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Låna pengar med dina investeringar som säkerhet. Behåll dina positioner 
            och få tillgång till kapital – utan att behöva sälja.
          </p>

          {/* USP points */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Ränta från 4,5%</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Snabb handläggning</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00B2A9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Ingen avgift att ha krediten</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00B2A9] text-white font-semibold rounded-xl hover:bg-[#00A099] transition-all"
            >
              Kontakta oss
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all"
            >
              Läs mer
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">4,5%</div>
            <div className="text-sm text-gray-500 mt-1">Ränta från</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">50%</div>
            <div className="text-sm text-gray-500 mt-1">Max belåning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">24h</div>
            <div className="text-sm text-gray-500 mt-1">Snabb handläggning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">0 kr</div>
            <div className="text-sm text-gray-500 mt-1">Uppläggningsavgift</div>
          </div>
        </div>
      </div>
    </section>
  )
}

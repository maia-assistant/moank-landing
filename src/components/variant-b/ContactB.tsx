export default function ContactB() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Kontakta oss
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Har du frågor om värdepapperslån eller vill komma igång? 
              Fyll i formuläret så kontaktar vi dig inom kort.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B2A9]/10 text-[#00B2A9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Telefon</h3>
                  <p className="mt-1 text-gray-300">08-520 059 55</p>
                  <p className="text-sm text-gray-500">Vardagar 09:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B2A9]/10 text-[#00B2A9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">E-post</h3>
                  <p className="mt-1 text-gray-300">info@moank.se</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00B2A9]/10 text-[#00B2A9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Adress</h3>
                  <p className="mt-1 text-gray-300">
                    Moank AB<br />
                    Box 3652, 103 59 Stockholm
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500 mb-4">Reglerat & tryggt</p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">FI-reglerat</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">GDPR</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">BankID</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Begär offert eller mer information
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    Förnamn
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all"
                    placeholder="Anna"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Efternamn
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all"
                    placeholder="Andersson"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  E-postadress
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all"
                  placeholder="anna@exempel.se"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all"
                  placeholder="070-123 45 67"
                />
              </div>

              <div>
                <label htmlFor="portfolioValue" className="block text-sm font-medium text-gray-300 mb-1">
                  Uppskattat depåvärde
                </label>
                <select
                  id="portfolioValue"
                  name="portfolioValue"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all"
                >
                  <option value="" className="bg-[#111111]">Välj...</option>
                  <option value="500k-1m" className="bg-[#111111]">500 000 - 1 000 000 kr</option>
                  <option value="1m-2m" className="bg-[#111111]">1 - 2 miljoner kr</option>
                  <option value="2m-5m" className="bg-[#111111]">2 - 5 miljoner kr</option>
                  <option value="5m+" className="bg-[#111111]">Över 5 miljoner kr</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Meddelande (valfritt)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00B2A9] focus:ring-2 focus:ring-[#00B2A9]/20 outline-none transition-all resize-none"
                  placeholder="Berätta gärna om ditt behov..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#00B2A9] focus:ring-[#00B2A9]"
                />
                <label htmlFor="consent" className="text-sm text-gray-400">
                  Jag godkänner att Moank kontaktar mig och behandlar mina personuppgifter enligt{' '}
                  <a href="#" className="text-[#00B2A9] hover:underline">integritetspolicyn</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#00B2A9] text-white font-semibold rounded-xl hover:bg-[#00A099] transition-colors"
              >
                Skicka förfrågan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

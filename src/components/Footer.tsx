export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-semibold text-xl text-white">Moank</span>
            </div>
            <p className="mt-4 text-sm">
              Moank är ett svenskt konsumentkreditinstitut under Finansinspektionens tillsyn.
              Vi erbjuder värdepapperslån med konkurrenskraftiga villkor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Fördelar</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Ränta</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Så fungerar det</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#documents" className="hover:text-white transition-colors">Dokument</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dokument</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Produkt- och riskinformation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allmänna villkor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEKKI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integritetspolicy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Telefon: 08-XXX XX XX</li>
              <li>E-post: info@moank.se</li>
              <li className="pt-2">
                Vardagar 09:00 - 17:00
              </li>
            </ul>
          </div>
        </div>

        {/* Partner info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              I samarbete med <span className="text-white font-medium">PAM Capital</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>FI-reglerat konsumentkreditinstitut</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Moank AB. Alla rättigheter förbehållna.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
              <a href="#" className="hover:text-white transition-colors">Villkor</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Documents() {
  const documents = [
    {
      title: 'Produkt- och riskinformation',
      description: 'Viktig information om produkten och associerade risker',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: '#',
    },
    {
      title: 'Allmänna villkor',
      description: 'Fullständiga villkor för värdepapperslån',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: '#',
    },
    {
      title: 'SEKKI',
      description: 'Standardiserad europeisk konsumentkreditinformation',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      href: '#',
    },
    {
      title: 'Information om behandling av personuppgifter',
      description: 'Hur vi hanterar dina personuppgifter enligt GDPR',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      href: '#',
    },
  ]

  return (
    <section id="documents" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Dokument & information
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Här hittar du all viktig information och dokumentation om våra värdepapperslån.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-white text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-emerald-100 transition-colors">
                {doc.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {doc.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {doc.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-emerald-600">
                  Ladda ner PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Vänligen läs igenom all dokumentation noggrant innan du ansöker om värdepapperslån.
          </p>
        </div>
      </div>
    </section>
  )
}

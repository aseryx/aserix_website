function Partners() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Access Real-World Health Data. </span>
                <span className="text-blue-400">Ethically At Scale</span>
              </h1>
              
              <div className="space-y-6 pt-8">
                <p className="text-lg text-gray-700 max-w-xl">
                  Get consented, longitudinal health data from thousands of individuals - wearables, labs, genetics, EMRs with proof of consent.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button type="button" className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                    Join as a Research Partner
                  </button>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-medium">Join 100+ Members & Partners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Connecting Line */}
                <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <path 
                    d="M 0 250 Q 150 250 250 100" 
                    stroke="#9CA3AF" 
                    strokeWidth="2" 
                    fill="none"
                    className="opacity-50"
                  />
                </svg>

                {/* Stacked Cards */}
                <div className="relative" style={{ paddingTop: '40px' }}>
                  {/* Match Card - Back */}
                  <div className="absolute top-0 right-0 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300" style={{ zIndex: 1 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Match</span>
                    </div>
                  </div>
                  
                  {/* Lab med Card - Middle */}
                  <div className="absolute top-12 right-16 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-12 hover:rotate-0 transition-transform duration-300" style={{ zIndex: 2 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Lab med</span>
                    </div>
                  </div>
                  
                  {/* Biometrics Card - Front */}
                  <div className="absolute top-24 right-32 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-[18deg] hover:rotate-0 transition-transform duration-300" style={{ zIndex: 3 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Biometrics</span>
                    </div>
                  </div>

                  {/* Spacer to maintain layout */}
                  <div className="w-44 h-96"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Quality Data</h3>
              <p className="text-gray-600">
                Access verified, high-quality health data from consenting participants with complete transparency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Fast Access</h3>
              <p className="text-gray-600">
                Streamlined data access process gets you from approval to analysis in record time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Full Compliance</h3>
              <p className="text-gray-600">
                HIPAA-compliant infrastructure with complete audit trails and consent management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Partnership Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                  <p className="text-gray-600">
                    Tell us about your research goals and data requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ethics Review</h3>
                  <p className="text-gray-600">
                    Our team reviews your proposal to ensure ethical standards are met.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Agreement & Setup</h3>
                  <p className="text-gray-600">
                    Sign data use agreements and configure your secure data access.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Access & Analyze</h3>
                  <p className="text-gray-600">
                    Begin accessing data and conducting your research with ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Research?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading institutions and companies advancing health research.
          </p>
          <button type="button" className="bg-gray-900 text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-800 transition text-lg">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Partners

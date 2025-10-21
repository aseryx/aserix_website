function Members() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Take Control. Get Paid. It's Your Health Print.
              </h1>
              
              <div className="space-y-6 pt-8">
                <p className="text-lg text-gray-700 max-w-xl">
                  Join thousands putting their health data to work - earning money while advancing medical research and lifestyle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button type="button" className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                    Join as a Member
                  </button>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
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
                  {/* Med Rec Card - Back */}
                  <div className="absolute top-0 right-0 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300" style={{ zIndex: 1 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Med Rec</span>
                    </div>
                  </div>
                  
                  {/* Bio Card - Middle */}
                  <div className="absolute top-12 right-16 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-12 hover:rotate-0 transition-transform duration-300" style={{ zIndex: 2 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Bio</span>
                    </div>
                  </div>
                  
                  {/* Labs Card - Front */}
                  <div className="absolute top-24 right-32 w-44 h-56 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 transform rotate-[18deg] hover:rotate-0 transition-transform duration-300" style={{ zIndex: 3 }}>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-xl font-semibold text-gray-700">Labs</span>
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

      {/* How It Works */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your secure account in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Data</h3>
              <p className="text-gray-600">Connect wearables or upload health records</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Partners</h3>
              <p className="text-gray-600">Select research studies to participate in</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn & Learn</h3>
              <p className="text-gray-600">Get paid and gain insights from your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 100+ members who are already earning from their health data.
          </p>
          <button type="button" className="bg-gray-900 text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-800 transition text-lg">
            Create Your Account
          </button>
        </div>
      </section>
    </div>
  )
}

export default Members

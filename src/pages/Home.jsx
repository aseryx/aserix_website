import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    { question: "What's included in beta?", answer: "Beta includes full access to member features, data upload capabilities, and basic analytics tools." },
    { question: "Can I cancel anytime?", answer: "Yes, you can cancel your membership at any time with no penalties or fees." },
    { question: "Do I need a wallet to use it?", answer: "No wallet is required. You can access all features with a standard account." },
    { question: "How much does it cost?", answer: "Pricing varies based on your membership tier. Contact us for detailed pricing information." },
    { question: "When is the official Launch?", answer: "The official launch is planned for Q2 2026. Beta users will have early access." },
    { question: "How secure is my data?", answer: "We use enterprise-grade encryption and comply with all major data protection regulations including HIPAA." }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="text-gray-900">Your Health Data. </span>
              <span className="text-blue-400 block mt-2">Earn From it</span>
              <span className="text-blue-400 block">Control it</span>
              <span className="text-blue-400 block">Gain Insights</span>
              <span className="text-blue-400 block">All in One Place</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/members"
              className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Join as a Member
            </Link>
            <Link
              to="/partners"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition"
            >
              Join as a Research Partner
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <span>Join 100+ Members & Partners</span>
          </div>
        </div>

        {/* Abstract geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-[400px]" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,280 T1200,240 L1200,400 L0,400 Z" fill="#f9fafb" opacity="0.5"/>
            <path d="M0,320 Q400,220 800,300 T1200,260 L1200,400 L0,400 Z" fill="#f3f4f6" opacity="0.3"/>
          </svg>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gray-200 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Manifesto</h2>
          <div className="border border-gray-300 rounded-lg p-12 min-h-[300px] flex items-center justify-center">
            <p className="text-gray-600 italic text-lg">
              Empowering individuals with control over their health data while enabling 
              groundbreaking research. Together, we're building a future where your data 
              works for you—generating insights, driving innovation, and creating value 
              that flows back to those who matter most: you.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-6">Expand/Collapse Manifesto</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked<br />Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0 ml-4">
                    <span className="text-gray-400 text-xl leading-none">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

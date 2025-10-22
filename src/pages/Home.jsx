import { useState, useEffect } from 'react';
import newVideo from '../public/new.mp4';
import ava1Img from '../public/avatar1.jpg';
import ava2Img from '../public/avatar2.jpg';
import ava3Img from '../public/avatar3.jpg';

function Home() {
  // Rotating words for the descriptive text
  const rotatingWords = ['Profitable', 'Controlled', 'Insightful', 'Secured', 'All in One Place'];
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [manifestoExpanded, setManifestoExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Handle word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      question: "What's included in beta?",
      answer: "Beta members get early access to our data marketplace, personalized health insights, and the ability to license your data to approved research partners."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! You have full control over your membership and data. Cancel anytime with no fees or penalties."
    },
    {
      question: "Do I need a wallet to use it?",
      answer: "No wallet required! We handle all transactions securely through traditional payment methods and crypto options."
    },
    {
      question: "How much does it cost?",
      answer: "Membership is free! You earn money when you license your data to research partners. We take a small platform fee."
    },
    {
      question: "When is the official Launch?",
      answer: "We're launching Q1 2026. Beta members get exclusive benefits and early access to all features."
    },
    {
      question: "How secure is my data?",
      answer: "Bank-level encryption, HIPAA compliance, and blockchain verification ensure your data is always secure and under your control."
    }
  ];

  return (
    <div className="relative w-full site-bg overflow-hidden">
      {/* Hero Container with White Border */}
      <div className="relative h-screen max-width overflow-hidden rounded-2xl md:rounded-3xl border-4 md:border-8 border-[#f7861e]/50 shadow-2xl flex flex-col m-2 md:m-3">
        {/* Hero Background Image - Replace with your actual image */}
        <div className="absolute inset-0 z-0">
          <video
            src={newVideo}
            autoPlay
            playsInline
            // muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>


        {/* Main Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-between py-4">
          {/* Top Section - Headline and Rotating Words */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full pt-20 md:pt-40">
            <div className="max-w-2xl">
              {/* New Badge */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                  New
                </span>
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  Data Marketplace 2.0 is out now
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6">
                Your Health.
              </h1>

              {/* Rotating Words with Animation */}
              <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#f7861e] leading-tight h-12 md:h-16 relative overflow-hidden">
                {rotatingWords.map((word, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === rotatingIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      }`}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - CTA and Social Proof */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full pb-8 md:pb-12">
            <div className="max-w-2xl">
              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-4 md:mb-6 max-w-xl">
                Your health information is worth thousands. Take control, license it securely, and earn every time it's used.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
                <a
                  href="/members"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-[#fc5f2b] text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-100 text-sm md:text-base text-center"
                >
                  Join as a Member
                </a>
                <a
                  href="/partners"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold hover:text-[#f7861e] transition-all duration-300 hover:scale-105 active:scale-100 text-sm md:text-base text-center"
                >
                  Join as a Research Partner
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex -space-x-2">
                  <img
                    src={ava1Img}
                    alt="Member"
                    className="w-7 md:w-9 h-7 md:h-9 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                  <img
                    src={ava2Img}
                    alt="Member"
                    className="w-7 md:w-9 h-7 md:h-9 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                  <img
                    src={ava3Img}
                    alt="Member"
                    className="w-7 md:w-9 h-7 md:h-9 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                </div>
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  Join 100+ Members & Partners
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* Mobile Layout */}

      </div>

      {/* Manifesto Section */}
      <div className="relative w-full px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Manifesto
          </h2>

          <div className="bg-gradient-to-r from-[#f7861e]/40 to-[#f7861e]/50 bg-[200%_100%] rounded-3xl border-8 border-white shadow-2xl p-8 md:p-12">
            <div className={`overflow-hidden transition-all duration-500 ${manifestoExpanded ? 'max-h-[2000px]' : 'max-h-[200px]'}`}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your health data is valuable. Every test, every scan, every measurement—it's worth thousands to researchers and pharmaceutical companies. Yet you see none of that value.
              </p>

              {manifestoExpanded && (
                <>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We believe health data should work for everyone. That means you should control it, profit from it, and use it to understand your own health better.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Aseryx is building the infrastructure for a fair health data economy. A place where your information creates value for you, advances medical research, and helps millions of people make better health decisions.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This is about ownership. This is about transparency. This is about turning your health journey into an asset that works for you.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    Welcome to the future of health data.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setManifestoExpanded(!manifestoExpanded)}
                className="px-8 py-3 bg-[#fc5f2b] text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                {manifestoExpanded ? 'Collapse Manifesto' : 'Expand Manifesto'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative w-fullpx-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 text-center mb-2 uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 bg-[#fc5f2b] rounded-full flex items-center justify-center transition-transform duration-300 ${expandedFaq === index ? 'rotate-45' : ''}`}>
                    <span className="text-white font-bold text-lg leading-none">+</span>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
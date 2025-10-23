import { useState, useEffect } from 'react';

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
      <div className="relative h-[97vh] max-width overflow-hidden rounded-2xl md:rounded-3xl border-4 md:border-8 border-[#f7861e]/50 shadow-2xl flex flex-col m-2 md:m-3">
        {/* Hero Background Image - Replace with your actual image */}
        <div className="absolute inset-0 z-0">
          <video
            src="/new.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
            ref={(video) => {
              if (video) {
                video.playbackRate = 0.7;
              }
            }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>


        {/* Main Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center py-8">
          {/* Centered Content */}
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              {/* New Badge */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20">
                  ✨ New
                </div>
                <span className="text-white/80 text-sm font-light">
                  Data Marketplace 2.0
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="xl:text-5xl font-semibold text-white leading-[0.9] tracking-tight mb-6">
              Make Your Health Data
              </h1>

              {/* Rotating Words with Animation */}
              <div className="xl:text-7xl font-bold text-[#f7861e] leading-[0.9] h-16 md:h-20 xl:h-24 relative overflow-hidden mb-8">
                {rotatingWords.map((word, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === rotatingIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                      }`}
                  >
                    {word}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Your health data is fragmented across hospitals, labs, and insurers. We bring it all together in one secure place. You control who sees it. You earn every time it's shared.              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-6 md:px-8 w-full">
            <div className="text-center">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/members"
                  className="px-8 py-4 bg-[#fc5f2b] text-white rounded-2xl font-semibold hover:bg-[#e54a1f] transition-all duration-300 hover:scale-105 active:scale-100 text-base shadow-2xl hover:shadow-[#fc5f2b]/25"
                >
                  Join as a Member
                </a>
                <a
                  href="/partners"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-100 text-base"
                >
                  Join as a Research Partner
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="/avatar1.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                  <img
                    src="/avatar2.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                  <img
                    src="/avatar3.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
                  />
                </div>
                <span className="text-white/80 text-sm font-light">
                  Join 100+ Members & Partners
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* Mobile Layout */}

      </div>

      {/* Manifesto Section */}
      <div className="relative w-full px-6 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="xl:text-5xl font-semibold text-gray-900 mb-4">
              Manifesto
            </h2>
            <div className="w-24 h-1 bg-[#f7861e] mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#3d2520] rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
            <div className={`transition-all duration-700 ease-in-out ${manifestoExpanded ? 'max-h-[2000px]' : 'max-h-[300px]'}`}>
              <div className="p-12 md:p-16">
                <p className="text-gray-200 leading-relaxed mb-8 font-light text-md">
                  Your health data is valuable. Every test, every scan, every measurement—it's worth thousands to researchers and pharmaceutical companies. Yet you see none of that value.
                </p>

                {manifestoExpanded && (
                  <div className="space-y-8">
                    <p className="text-gray-200 leading-relaxed font-light text-md">
                      We believe health data should work for everyone. That means you should control it, profit from it, and use it to understand your own health better.
                    </p>

                    <p className="text-gray-200 leading-relaxed font-light text-md">
                      Aseryx is building the infrastructure for a fair health data economy. A place where your information creates value for you, advances medical research, and helps millions of people make better health decisions.
                    </p>

                    <p className="font-light text-md text-gray-200 leading-relaxed">
                      This is about ownership. This is about transparency. This is about turning your health journey into an asset that works for you.
                    </p>

                    <p className="text-2xl text-white font-semibold">
                      Welcome to the future of health data.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center pb-8">
              <button
                onClick={() => setManifestoExpanded(!manifestoExpanded)}
                className="px-8 py-4 bg-[#fc5f2b] text-white rounded-2xl font-semibold hover:bg-[#e54a1f] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {manifestoExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative w-full px-6 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Orange Container */}
          <div className="bg-gradient-to-br from-[#fc5f2b] to-[#f7861e] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-white/80 mb-4 uppercase tracking-wider">
                FAQ
              </p>
              <h2 className="xl:text-5xl font-semibold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-md font-medium text-white pr-6 leading-tight">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 ${expandedFaq === index ? 'rotate-45 bg-white/30' : 'hover:bg-white/30'}`}>
                      <span className="text-white font-light text-md leading-none">+</span>
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFaq === index ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/90 leading-relaxed text-md font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
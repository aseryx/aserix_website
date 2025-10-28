import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MembersMobile() {
  const [activeCard, setActiveCard] = useState(0);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const dataCards = [
    { metric: '2,847', unit: 'records', title: 'Data Points Owned', category: 'Data Portfolio', description: 'Your complete health data collection including lab results, medical records, and wearable data.', dataPoints: [2100, 2450, 2847], dates: ['Jan 10', 'Jun 11', 'Jan 12'], gradient: 'from-blue-400/20 to-cyan-400/20' },
    { metric: '$1,240', unit: 'value', title: 'Data Worth', category: 'Monetization', description: 'Estimated market value of your health data based on current research demand and data quality.', dataPoints: [850, 1020, 1240], dates: ['Feb 5', 'May 8', 'Aug 10'], gradient: 'from-green-400/20 to-emerald-400/20' },
    { metric: '12', unit: 'requests', title: 'Access Approved', category: 'Data Control', description: 'Research requests you have approved this month, earning you fair compensation for data sharing.', dataPoints: [8, 10, 12], dates: ['Mar 1', 'Jun 15', 'Sep 20'], gradient: 'from-purple-400/20 to-pink-400/20' },
    { metric: '$340', unit: 'earned', title: 'Total Earnings', category: 'Revenue', description: 'Total amount earned from licensing your health data to ethical research partners.', dataPoints: [180, 260, 340], dates: ['Apr 12', 'Jul 18', 'Oct 5'], gradient: 'from-orange-400/20 to-red-400/20' },
    { metric: '94%', unit: 'complete', title: 'Data Quality', category: 'Portfolio Health', description: 'Completeness and accuracy score of your health data portfolio for research value.', dataPoints: [78, 86, 94], dates: ['May 3', 'Aug 7', 'Nov 12'], gradient: 'from-indigo-400/20 to-purple-400/20' },
    { metric: '24', unit: 'ng/dL', title: 'Vitamin D', category: 'Nutrition & Wellness', description: 'Your vitamin D levels tracked across lab results and supplements, impacting immune system and bone health.', dataPoints: [22, 20, 24], dates: ['Jan 10', 'Jun 11', 'Jan 12'], gradient: 'from-teal-400/20 to-cyan-400/20' },
    { metric: '98', unit: 'mg/dL', title: 'Blood Glucose', category: 'Metabolic Health', description: 'Your blood sugar levels monitored across all health records, showing metabolic health trends over time.', dataPoints: [95, 102, 98], dates: ['Feb 5', 'May 8', 'Aug 10'], gradient: 'from-amber-400/20 to-orange-400/20' }
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveCard((p) => (p + 1) % dataCards.length), 4000);
    return () => clearInterval(interval);
  }, [dataCards.length]);

  const MiniChart = ({ dataPoints, dates }) => {
    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    const range = max - min || 1;
    const points = dataPoints.map((value, i) => {
      const x = (i / (dataPoints.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 60 - 20;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative w-full h-20 mt-4">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points={points} fill="none" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          {dataPoints.map((v, i) => {
            const x = (i / (dataPoints.length - 1)) * 100;
            const y = 100 - ((v - min) / range) * 60 - 20;
            return <circle key={i} cx={x} cy={y} r="2" fill="white" vectorEffect="non-scaling-stroke" />;
          })}
        </svg>
        <div className="flex justify-between mt-2 text-xs text-white/70">
          {dates.map((d, i) => <span key={i}>{d}</span>)}
        </div>
      </div>
    );
  };

  return (
    <div className="site-bg">
      {/* Hero Container */}
      <div className="glass-hero border-4 md:border-8 min-h-[97vh] border-[#f7861e]/50">

        {/* Main Content - Mobile Optimized Layout */}
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col gap-8 p-4 sm:p-8 items-center w-full max-w-7xl">

            {/* Section 1: Header and Title */}
            <div className="w-full">
              <div className="space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-[#f7861e]/10 text-[#f7861e] text-xs sm:text-sm font-medium rounded-full border border-[#f7861e]/20">
                    For Members
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-light">Unified Health Data</span>
                </div>
                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                  Your Health Data
                </h1>
                <div className="text-4xl sm:text-5xl font-bold text-[#f7861e] leading-[0.9] h-12 sm:h-16 relative overflow-hidden mb-6">
                  <h1>
                    Unified
                  </h1>
                </div>
              </div>
            </div>

            {/* Section 2: Image with Overlay Cards */}
            <div className="relative w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 relative">
                <img
                  src="/test.jpg"
                  alt="Health data dashboard"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
                  }}
                />

                {/* Data Cards Overlay - Sequential Display */}
                <div className="absolute inset-0">
                  {dataCards.map((card, index) => {
                    const isActive = index === activeCard;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? 'opacity-90 z-10' : 'opacity-0 z-0'
                          }`}
                      >
                        <div className={`bg-gradient-to-br ${card.gradient} rounded-2xl border border-white/30 shadow-xl p-5 bg-opacity-90 h-full flex flex-col`}>
                          <div className="mb-4">
                            <div className="text-xs text-white/60 font-medium uppercase tracking-wide mb-1">
                              {card.category}
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                              {card.metric}
                              <span className="text-sm sm:text-lg font-normal text-white/80 ml-1">{card.unit}</span>
                            </div>
                            <div className="text-base sm:text-lg text-white/90 font-semibold">{card.title}</div>
                          </div>

                          <MiniChart dataPoints={card.dataPoints} dates={card.dates} />

                          <div className="mt-auto">
                            <p className="text-sm text-white/80 leading-relaxed font-light">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section 3: Description, CTA, and Feature Card */}
            <div className="w-full">
              <div className="space-y-6">
                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-light">
                  Hospitals, labs, insurers - your health data is everywhere. We unify it, secure it, and help you monetize it fairly. You approve every request.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => setShowWaitlistModal(true)}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#fc5f2b] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#e54a1f] transition-all duration-300 hover:scale-105 active:scale-100 text-sm sm:text-base shadow-2xl hover:shadow-[#fc5f2b]/25"
                  >
                    Join Member Waitlist
                  </button>
                </div>

                {/* Feature Card */}
                <div className="mt-8 sm:mt-10">
                  <Link to="/#manifesto" className="group block bg-gradient-to-br from-gray-900 via-gray-800 to-[#3d2520] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100" aria-label="Read our manifesto about data ownership and privacy">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f7861e] to-[#fc5f2b] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Read Our manifesto</h3>
                        <p className="text-white leading-relaxed text-sm sm:text-base">
                        For decades, our health data has been fragmented, controlled, and used without our knowledge or consent.
                        </p>
                      </div>
                      <div className="flex items-center text-[#f7861e] group-hover:text-[#fc5f2b] transition-all duration-300 group-hover:translate-x-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current sm:w-6 sm:h-6">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-4xl h-[90vh] sm:h-[80vh] bg-white/90 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Tally Embed */}
            <div className="w-full h-full flex flex-col">
              <div className="p-3 sm:p-4 bg-gray-50 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Join the Member Waitlist</h3>
                <p className="text-xs sm:text-sm text-gray-600">Be among the first to own and monetize your health data</p>
              </div>
              <iframe
                src="https://tally.so/r/mVRjjM?transparentBackground=1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Join the waitlist"
                className="flex-1"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MembersMobile;

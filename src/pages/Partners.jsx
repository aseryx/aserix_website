import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnersMobile from './PartnersMobile';

function Partners() {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rotatingWords = ['Ethically Unified', 'At Scale', 'Research-Ready'];

  useEffect(() => {
    const interval = setInterval(() => setRotatingIndex((p) => (p + 1) % rotatingWords.length), 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Render mobile component if on mobile
  if (isMobile) {
    return <PartnersMobile />;
  }


  return (
    <div className="site-bg">
      <div className="glass-hero border-4 md:border-8 min-h-[97vh] items-center border-[#f7861e]/50">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 p-4 sm:p-8 md:p-12 lg:p-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-[#f7861e]/10 text-[#f7861e] text-xs sm:text-sm font-medium rounded-full border border-[#f7861e]/20">
                For Research Partners
              </span>
              <span className="text-gray-500 text-xs sm:text-sm font-light">Ethical Data Access</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-[0.9] tracking-tight">
              Access Real-World Data
            </h1>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f7861e] leading-[0.9] h-12 sm:h-16 md:h-20 xl:h-24 relative overflow-hidden'>
              <span className="font-semibold">{rotatingWords[rotatingIndex]}</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-light">
              Access unified, longitudinal health datasets from thousands of consenting members. No fragmented records. No compliance headaches. Just research-ready data that accelerates discoveries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setShowWaitlistModal(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#fc5f2b] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#e54a1f] transition-all duration-300 hover:scale-105 active:scale-100 text-sm sm:text-base shadow-2xl hover:shadow-[#fc5f2b]/25"
              >
                Join Partner waitlist
              </button>
            </div>

            {/* Manifesto Card */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <Link to="/#manifesto" className="group block bg-gradient-to-br from-gray-900 via-gray-800 to-[#3d2520] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100" aria-label="Read our manifesto about data ownership and privacy">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f7861e] to-[#fc5f2b] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Read Our manifesto</h3>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    Get paid fairly for your health data contributions to research.
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

          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#fc5f2b] to-[#f7861e]-bg rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 relative w-full max-w-md md:max-w-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <video
                  src="/partners.mp4"
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
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <div className="relative w-full h-full p-4 sm:p-6 lg:p-8 z-10 flex items-center justify-center">
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
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">🔬 Join the Partner Waitlist</h3>
                <p className="text-xs sm:text-sm text-gray-600">Access unified health datasets from consenting members for ethical research</p>
              </div>
              <iframe
                src="https://tally.so/r/n9LXp4?transparentBackground=1"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="🔬 Partner Waitlist"
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

export default Partners;
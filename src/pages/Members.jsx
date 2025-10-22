import { useState } from 'react';
import { Link } from 'react-router-dom';

function Members() {
  return (
    <div className="bg-orange-100">
      {/* Hero Container */}
      <div className="glass-hero border-4 md:border-8 border-[#f7861e]/50">
        
        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center min-h-screen">
          
          {/* Left Section - Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-black/20 backdrop-blur-md text-white/80 text-xs font-semibold rounded-full border border-white/30">
                For Members
              </span>
              <span className="text-black/20 text-xs md:text-sm font-medium">Unified Health Data</span>
            </div>
            {/* Headline */}
            <h1 className="heading-2">
              Health is Wealth
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-xl">
              Crafted for empowerment. Designed for fairness. Discover a platform that brings value and control to every corner of your health data.
            </p>

            {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
                <a
                  href="#join-waitlist"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-[#fc5f2b] text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-100 text-sm md:text-base text-center"
                >
                  Join waitlist
                </a>
    
          </div>

            {/* Feature Card */}
            <Link to="/#manifesto" className="btn-card-link  bg-gradient-to-r from-[#f7861e]/40 to-[#f7861e]/50 bg-[200%_100%] group" aria-label="Read our manifesto about data ownership and privacy">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl"></span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Earn While You Share</h3>
                  <p className="text-sm text-gray-600">
                    Get paid fairly for your health data contributions to research.
                  </p>
                </div>
              </div>

              {/* Arrow to indicate this is a button/link */}
              <span className="ml-4 flex items-center text-[#fc5f2b] group-hover:text-gray-700 transition-transform transform group-hover:translate-x-1" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Section - Image in Rounded Square */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <img
                src="/test.jpg"
                alt="Health data dashboard"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
                }}
              />
              
              {/* Badge on Image */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-900">Data Ownership</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Members;
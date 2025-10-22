import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import testImg from '../public/test.jpg';

function Partners() {
  const [activeCard, setActiveCard] = useState(0);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  const rotatingWords = ['Ethically', 'At Scale', 'Securely', 'Transparently', 'Compliantly'];

  const dataCards = [
    { metric: '24', unit: 'ng/dL', title: 'Vitamin D', description: 'Checks for deficiencies, which can impact the immune system, thyroid, bones, teeth, muscles, and brain.', dataPoints: [22, 20, 24], dates: ['Jan 10', 'Jun 11', 'Jan 12'], gradient: 'from-blue-400/20 to-cyan-400/20' },
    { metric: '98', unit: 'mg/dL', title: 'Blood Glucose', description: 'Monitors blood sugar levels to assess diabetes risk and metabolic health.', dataPoints: [95, 102, 98], dates: ['Feb 5', 'May 8', 'Aug 10'], gradient: 'from-green-400/20 to-emerald-400/20' },
    { metric: '72', unit: 'bpm', title: 'Resting Heart Rate', description: 'Tracks cardiovascular fitness and overall heart health over time.', dataPoints: [75, 70, 72], dates: ['Mar 1', 'Jun 15', 'Sep 20'], gradient: 'from-purple-400/20 to-pink-400/20' },
    { metric: '120/80', unit: 'mmHg', title: 'Blood Pressure', description: 'Monitors hypertension risk and cardiovascular health indicators.', dataPoints: [118, 122, 120], dates: ['Apr 12', 'Jul 18', 'Oct 5'], gradient: 'from-orange-400/20 to-red-400/20' },
    { metric: '8.2', unit: 'hrs', title: 'Sleep Duration', description: 'Analyzes sleep patterns to optimize recovery and cognitive performance.', dataPoints: [7.5, 8.0, 8.2], dates: ['May 3', 'Aug 7', 'Nov 12'], gradient: 'from-indigo-400/20 to-purple-400/20' }
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveCard((p) => (p + 1) % dataCards.length), 4000);
    return () => clearInterval(interval);
  }, [dataCards.length]);

  useEffect(() => {
    const interval = setInterval(() => setRotatingIndex((p) => (p + 1) % rotatingWords.length), 2500);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

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
      <div className="glass-hero border-4 md:border-8 border-[#f7861e]/50">
        <div className="grid lg:grid-cols-2  gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center min-h-screen">
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-pill">For Research Partners</span>
              <span className="muted-white text-xs md:text-sm font-medium">Ethical Data Access</span>
            </div>

            <h1 className="heading-2">
              Access Real-World Data
            </h1> 
            <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold text-[#f7861e] leading-tight h-12 md:h-16 relative overflow-hidden'>
              <span className="ml-2 font-semibold">{rotatingWords[rotatingIndex]}</span>
            </h2>
            
            

            <p className="text-lg text-gray-700 max-w-xl">
              Partner with us to ethically access curated, high-quality health datasets and accelerate your research.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
                <a
                  href="#join-waitlist"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-[#fc5f2b] text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-100 text-sm md:text-base text-center"
                >
                  Join as a Partner
                </a>
    
          </div>

            {/* Manifesto Card */}
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

          <div className="relative flex items-center justify-center">
            <div className="glass-panel relative w-full max-w-md md:max-w-lg">
              <img src={testImg} alt="dashboard background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" aria-hidden="true" />
              <div className="w-full h-[500px] lg:h-[600px]">
                <div className="relative w-full h-full p-6 z-10">
                  {dataCards.map((card, index) => {
                    const position = (index - activeCard + dataCards.length) % dataCards.length;
                    const isActive = position === 0;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? 'z-30' : position === 1 ? 'z-20' : 'z-10'}`}
                        style={{
                          transform: `translateX(${position * 18}px) translateY(${position * 12}px) rotate(${position * 3}deg) scale(${1 - position * 0.07})`,
                          opacity: position < 3 ? 1 - position * 0.28 : 0
                        }}
                      >
                        <div className={`card bg-gradient-to-br ${card.gradient}`}>
                          <div className="mb-4">
                            <div className="text-5xl md:text-6xl font-bold text-white mb-1">
                              {card.metric}
                              <span className="text-2xl font-normal text-white/80 ml-2">{card.unit}</span>
                            </div>
                            <div className="text-lg text-white/90 font-medium">{card.title}</div>
                          </div>

                          <MiniChart dataPoints={card.dataPoints} dates={card.dates} />

                          <div className="mt-auto">
                            <p className="text-sm text-white/80 leading-relaxed">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Partners;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import RiskBand from '../components/common/RiskBand.jsx';
import FaqItem from '../components/common/FaqItem.jsx';
import BLOG_POSTS from '../data/blog/index.js';
import { formatDate } from '../utils/formatDate.js';
// Removed unused imports per locked Home copy
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';
const ROTATING_TEXTS = [];


/* -------------------------------------------------------
   USE CASE CATEGORIES (removed per locked copy)
   ------------------------------------------------------- */

/* -------------------------------------------------------
   APPRAISAL CERTIFICATE COMPONENT (IMPORTED)
   ------------------------------------------------------- */

/* -------------------------------------------------------
   LANDING PAGE
   ------------------------------------------------------- */

const LANDING_FAQS = [
  { question: 'Do I need a buyer first?', answer: 'Yes. Without a buyer for a defined use, there is nothing to license.', delay: 100 },
  { question: 'Is the quality number the price?', answer: 'No. You set the price. The number describes the locked copy.', delay: 200 },
  { question: 'Can I pull access mid-term?', answer: 'No. Access runs for the term you sold. Then it expires.', delay: 300 },
  { question: 'Does this put me on a public catalog?', answer: 'Proving a quality check still lists that result on Exchange today. The walkthrough is the private license, not a storefront.', delay: 400 },
  { question: 'Who is this for?', answer: 'Owners who already have a buyer. Vertical is color, not the filter.', delay: 500 },
];

const LandingPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  usePageMeta({ ...PAGE_META['/'], path: '/' });

  useEffect(() => {
    if (ROTATING_TEXTS.length === 0) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 grid-bg overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,77,0.06),transparent_50%)]" />
                    <img
                        src="/hero-bg-new.jpg"
                        alt=""
                        className="absolute top-0 right-0 w-full md:w-[70%] h-full object-cover object-top md:object-[center_20%] grayscale opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
                        style={{ maskImage: 'linear-gradient(to right, transparent 5%, black 35%), linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 35%), linear-gradient(to bottom, black 80%, transparent 100%)', maskComposite: 'intersect', WebkitMaskComposite: 'source-in' }}
                        loading="eager"
                        fetchPriority="high"
                    />
                    <ParticlesBackground />
                </div>

                {/* Hero content -- left-aligned */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-left">

                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100 opacity-0 max-w-4xl" style={{ animationFillMode: 'forwards' }}>
                        Data licensing for owners with a buyer.
                    </h1>

                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-gray-400 leading-relaxed mb-10 max-w-3xl animate-fade-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
                        Pick the file or the tables. Lock a copy. Get paid. Open access for a set term.
                    </p>

                    <div className="animate-fade-up delay-300 opacity-0 flex flex-wrap gap-4" style={{ animationFillMode: 'forwards' }}>
                        <a
                            href={TALLY.appraisal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-medium tracking-wide text-sm uppercase hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-[#F9F8F6] dark:focus:ring-offset-[#0a0a0a]"
                        >
                            Open a license
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#how-it-works"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#E5E5E5] dark:border-[#333] text-[#1A1A1A] dark:text-white font-medium tracking-wide text-sm uppercase hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            See how it works
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="animate-fade-up delay-400 opacity-0 mt-8 flex items-center gap-3 text-[#6B7280] dark:text-gray-500" style={{ animationFillMode: 'forwards' }}>
                        <span className="text-xs font-mono tracking-wider">A buyer</span>
                        <span className="w-px h-3 bg-[#D1D5DB] dark:bg-gray-700" />
                        <span className="text-xs font-mono tracking-wider">File or tables</span>
                        <span className="w-px h-3 bg-[#D1D5DB] dark:bg-gray-700" />
                        <span className="text-xs font-mono tracking-wider">Term that ends</span>
                    </div>
                </div>
            </section>

            <RiskBand
                items={[
                    'A buyer',
                    'Custody said by step',
                    'Term ends',
                ]}
            />

            {/* ===== THE PRIVACY PARADOX (removed per locked copy) ===== */}

            {/* ===== SECTION 4: HOW IT WORKS ===== */}
            <section id="how-it-works" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">How it works</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                            How it works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <ScrollReveal delay={100}>
                            <div className="group h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden relative">
                                <div className="p-6 md:p-8 flex-1">
                                    <p className="font-mono text-xs text-[#6B7280] dark:text-gray-500 mb-4 uppercase tracking-wider">01 / Pick</p>
                                    <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">Pick</h3>
                                    <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">
                                        Upload a file or choose tables and columns. Not the whole warehouse.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="group h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] card-oasis-alt overflow-hidden relative">
                                <div className="p-6 md:p-8 flex-1">
                                    <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">02 / Lock</p>
                                    <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">Lock</h3>
                                    <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">
                                        Lock that copy before money moves. Where data sits depends on the step. That is shown before you commit.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <div className="group h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden relative">
                                <div className="p-6 md:p-8 flex-1">
                                    <p className="font-mono text-xs text-[#6B7280] dark:text-gray-500 mb-4 uppercase tracking-wider">03 / Open</p>
                                    <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A] dark:text-white mb-3">Open</h3>
                                    <p className="text-[#6B7280] dark:text-gray-400 text-sm leading-relaxed">
                                        Set a price. Get paid. Open access for 3, 6, 9, or 12 months. When the term ends, access ends.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ===== DATA APPRAISAL (removed per locked copy) ===== */}

            {/* ===== KEY BENEFITS (removed per locked copy) ===== */}

            {/* ===== USE CASES (removed per locked copy) ===== */}

            {/* ===== WHO THIS IS FOR ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-8 md:mb-12">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase">Who this is for</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                            Rights holders with a real buyer.
                        </h2>
                    </div>
                    <div className="space-y-6 text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        <p>Founder-led or editor-led. Lightly regulated. Able to hand over a file or point at a database. Vertical is color, not the filter.</p>
                        <p><span className="font-medium">Not this quarter:</span> No buyer. Score-hunting with nothing to sell. Brokerage that finds demand. Hospital or insurance beachhead.</p>
                    </div>
                </div>
            </section>

            {/* ===== HONESTY ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-8 md:mb-12">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase">Honesty</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                            Custody by step. Quality is optional.
                        </h2>
                    </div>
                    <div className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
                        <p>Scan stays on your machine. Vault stores an encrypted copy. Some paths move samples. A quality check can attach to the locked copy. It is not what the buyer came for. The number inside it is not a price.</p>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            {/* ===== FAQ ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">FAQ</p>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                            Common <span className="italic text-[#6B7280] dark:text-gray-400">questions</span>
                        </h2>
                    </div>

                    <div className="border-t-2 border-[var(--text-primary)] dark:border-[#333]">
                        {LANDING_FAQS.map((faq) => (
                            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} delay={faq.delay} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-4xl mx-auto relative z-10 text-center section-divider pt-12 md:pt-16">
                    <ScrollReveal>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                            Ready when the buyer is real.
                        </h2>
                        <p className="text-[#6B7280] dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto"></p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={TALLY.appraisal}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-medium hover:bg-white transition-colors text-sm uppercase tracking-wide"
                            >
                                Open a license
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== LATEST ARTICLE ===== */}
            <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
                        <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Latest Article</p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
                            From our <span className="text-[#6B7280] dark:text-gray-400">blog</span>
                        </h2>
                    </div>

                    {BLOG_POSTS.filter((p) => p.featured).map((post) => (
                            <ScrollReveal key={post.slug}>
                                <Link to={`/blog/${post.slug}`} className="group block bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden">
                                    <div className="p-8 md:p-12">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">{formatDate(post.date)}</span>
                                            <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                                            <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">{post.readTime}</span>
                                            <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                                            <span className="font-mono text-xs text-brand-orange uppercase tracking-wider">{post.category}</span>
                                        </div>

                                        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 text-[#1A1A1A] dark:text-white group-hover:text-brand-orange transition-colors duration-300 max-w-4xl">
                                            {post.title}
                                        </h3>

                                        <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                                            {post.excerpt}
                                        </p>

                                        <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all">
                                            Read article
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </ScrollReveal>
                    ))}
                </div>
            </section>

    </PageLayout>
  );
};

export default LandingPage;

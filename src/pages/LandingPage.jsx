import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import HeroVideoBackground from '../components/common/HeroVideoBackground.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import RiskBand from '../components/common/RiskBand.jsx';
import FaqItem from '../components/common/FaqItem.jsx';
import ProductPlaceholder from '../components/common/ProductPlaceholder.jsx';
import LicenseProductSurface from '../components/common/LicenseProductSurface.jsx';
import BLOG_POSTS from '../data/blog/index.js';
import { formatDate } from '../utils/formatDate.js';
import { GeometricPrism } from '../components/common/GeometricIllustrations.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';

const LANDING_FAQS = [
  {
    question: 'Do I need a buyer first?',
    answer: 'Yes. Without a buyer for a defined use, there is nothing to license.',
    delay: 100,
  },
  {
    question: 'Is the quality number the price?',
    answer: 'No. You set the price. The number describes the locked copy.',
    delay: 200,
  },
  {
    question: 'Can I pull access mid-term?',
    answer: 'No. Access runs for the term you sold. Then it expires.',
    delay: 300,
  },
  {
    question: 'Does this put me on a public catalog?',
    answer:
      'Proving a quality check still lists that result on Exchange today. The walkthrough is the private license, not a storefront.',
    delay: 400,
  },
  {
    question: 'Who is this for?',
    answer: 'Owners who already have a buyer. Vertical is color, not the filter.',
    delay: 500,
  },
];

const PATH_FEATURES = [
  {
    label: '01 · Pick',
    title: 'Pick',
    body: 'Upload a file or choose tables and columns. Not the whole warehouse.',
    productLabel: 'Product · Pick',
    productCaption: 'Selection still · drop a screenshot here',
    reverse: false,
    withMock: true,
  },
  {
    label: '02 · Lock',
    title: 'Lock',
    body: 'Lock that copy before money moves. Where data sits depends on the step. That is shown before you commit.',
    productLabel: 'Product · Lock',
    productCaption: 'Vault still · drop a screenshot here',
    reverse: true,
    withMock: false,
  },
  {
    label: '03 · Open',
    title: 'Open',
    body: 'Set a price. Get paid. Open access for 3, 6, 9, or 12 months. When the term ends, access ends.',
    productLabel: 'Product · Open',
    productCaption: 'Access still · drop a screenshot here',
    reverse: false,
    withMock: false,
  },
];

const LandingPage = () => {
  usePageMeta({ ...PAGE_META['/'], path: '/' });

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 grid-bg overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Experiment: MP4 hero background (branch experiment/video-hero-background) */}
          <HeroVideoBackground src="/hero-bg.mp4" />
          {/* Theme scrim — keep copy readable on the left; let more tape show on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F6]/88 via-[#F9F8F6]/60 to-[#F9F8F6]/25 dark:from-[#0a0a0a]/88 dark:via-[#0a0a0a]/45 dark:to-transparent" />
          <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_80%_30%,rgba(235,94,40,0.08),transparent_55%)]" />
          <ParticlesBackground />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-left">
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100 opacity-0 max-w-4xl"
            style={{ animationFillMode: 'forwards' }}
          >
            Data licensing for owners with a buyer.
          </h1>

          <p
            className="text-lg md:text-xl text-[#4B5563] dark:text-gray-200 leading-relaxed mb-10 max-w-xl animate-fade-up delay-200 opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            Pick the file or the tables. Lock a copy. Get paid. Open access for a set term.
          </p>

          <div
            className="animate-fade-up delay-300 opacity-0 flex flex-wrap gap-4"
            style={{ animationFillMode: 'forwards' }}
          >
            <a
              href={TALLY.appraisal}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-orange text-black font-medium tracking-wide text-sm uppercase hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-[#F9F8F6] dark:focus:ring-offset-[#0a0a0a]"
            >
              Open a license
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-[#E5E5E5] dark:border-[#333] text-[#1A1A1A] dark:text-white font-medium tracking-wide text-sm uppercase hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              See how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            className="animate-fade-up delay-400 opacity-0 mt-8 flex flex-wrap items-center gap-3 text-[#4B5563] dark:text-gray-300"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="text-xs tracking-wide">A buyer</span>
            <span className="w-px h-3 bg-[#9CA3AF] dark:bg-gray-500" />
            <span className="text-xs tracking-wide">File or tables</span>
            <span className="w-px h-3 bg-[#9CA3AF] dark:bg-gray-500" />
            <span className="text-xs tracking-wide">Term that ends</span>
          </div>
        </div>
      </section>

      <RiskBand items={['A buyer', 'Custody said by step', 'Term ends']} />

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-20 md:py-28 lg:py-36 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-16 md:mb-24 max-w-2xl">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">How it works</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              How it works
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {PATH_FEATURES.map((feature) => (
              <ScrollReveal key={feature.label}>
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className={`lg:col-span-4 ${feature.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">
                      {feature.label}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] dark:text-white mb-4 leading-tight tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] dark:text-gray-400 text-base leading-relaxed max-w-md">
                      {feature.body}
                    </p>
                  </div>
                  <div className={`lg:col-span-8 ${feature.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProductPlaceholder
                      label={feature.productLabel}
                      caption={feature.productCaption}
                      aspect="video"
                    >
                      {feature.withMock ? (
                        <LicenseProductSurface className="max-w-none shadow-none border-0 bg-transparent dark:bg-transparent" />
                      ) : null}
                    </ProductPlaceholder>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO THIS IS FOR ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-6 section-divider pt-8 md:pt-12">
              <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Who this is for</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                Rights holders with a real buyer.
              </h2>
              <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Founder-led or editor-led. Lightly regulated. Able to hand over a file or point at a database.
                Vertical is color, not the filter.
              </p>
            </div>
            <div className="lg:col-span-6 section-divider pt-8 md:pt-12">
              <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Not this quarter</p>
              <ul className="space-y-4 text-[#6B7280] dark:text-gray-400 text-base leading-relaxed">
                <li className="border-b border-[var(--border-color)] pb-4">No buyer.</li>
                <li className="border-b border-[var(--border-color)] pb-4">Score-hunting with nothing to sell.</li>
                <li className="border-b border-[var(--border-color)] pb-4">Brokerage that finds demand.</li>
                <li className="pb-2">Hospital or insurance beachhead.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HONESTY ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="group flex flex-col lg:flex-row bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-[#E8E4DE] dark:border-[#1F2937]">
              <div className="lg:w-[36%] flex items-center justify-center p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-[#E8E4DE] dark:border-[#1F2937]">
                <GeometricPrism className="w-28 h-28 md:w-40 md:h-40 text-brand-orange group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 p-6 md:p-10 lg:p-12">
                <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">Honesty</p>
                <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] dark:text-white mb-6">
                  Custody by step. Quality is optional.
                </h3>
                <p className="text-base text-[#6B7280] dark:text-gray-400 leading-relaxed max-w-2xl">
                  Scan stays on your machine. Vault stores an encrypted copy. Some paths move samples. A quality
                  check can attach to the locked copy. It is not what the buyer came for. The number inside it is
                  not a price.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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

      {/* ===== LOUD FINAL CTA ===== */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-brand-orange text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-10">
            Built for the deal you already have.
          </h2>
          <a
            href={TALLY.appraisal}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-black text-white font-medium hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wide"
          >
            Open a license
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ===== NOTES ===== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Latest article</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
              From the <span className="text-[#6B7280] dark:text-gray-400">blog</span>
            </h2>
          </div>

          {BLOG_POSTS.filter((p) => p.featured).map((post) => (
            <ScrollReveal key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                    <span className="font-mono text-xs text-[#6B7280] dark:text-gray-500">{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#6B7280] dark:bg-gray-500" />
                    <span className="font-mono text-xs text-brand-orange uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 text-[#1A1A1A] dark:text-white group-hover:text-brand-orange transition-colors duration-300 max-w-4xl">
                    {post.title}
                  </h3>

                  <p className="text-[#6B7280] dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all">
                    Read
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

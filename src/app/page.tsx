"use client";

import { useState, useEffect } from "react";
import {
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  BarChart3,
  Megaphone,
  Lightbulb,
  Crown,
  Heart,
  Play,
} from "lucide-react";

const clientLogos = [
  "Guitar Center",
  "PennyMac",
  "Instructure",
  "Arena",
  "Adobe",
  "Procurify",
  "First Lite",
  "Litter Robot",
  "KPMG",
  "ConocoPhillips",
  "Scotts Miracle-Gro",
  "Xactware",
];

const stats = [
  { value: "4.8", label: "Average rating from 350+ reviews on Clutch" },
  { value: "90+", label: "Clients with us for 4 years or more" },
  { value: "160+", label: "Employees aligned with our mission" },
  { value: "#145", label: "On the Inc. 500" },
  { value: "$450M+", label: "In annual ad-spend managed for clients" },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    text: "Disruptive transformed our entire marketing approach. Within 6 months, our ROI increased by 340%. They truly understand performance marketing.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "CEO, StartupXYZ",
    text: "Finally an agency that delivers on their promises. The free audit alone saved us $50K in wasted ad spend. Can't recommend them enough.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP Marketing, RetailPlus",
    text: "We've been with Disruptive for 5 years now. They've consistently helped us grow year over year. Their team feels like an extension of ours.",
    rating: 5,
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Free Marketing Audit",
    desc: "We analyze your current marketing efforts and identify wasted spend.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    desc: "We build a tailored roadmap aligned with your business goals.",
  },
  {
    step: "03",
    title: "Expert Execution",
    desc: "Our team implements and optimizes campaigns across all channels.",
  },
  {
    step: "04",
    title: "Guaranteed Results",
    desc: "See measurable growth in 90 days—or you don't pay.",
  },
];

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Authenticity",
    desc: "We believe in genuine connections between brands and their audiences.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Top Talent",
    desc: "Our team consists of the best minds in digital marketing.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategy",
    desc: "Data-driven strategies that align with your business objectives.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Breakthroughs",
    desc: "We push boundaries to deliver extraordinary results.",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Exclusivity",
    desc: "We only work with brands we believe in and can truly help.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Disruptive Digital
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "About", "Results", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-[#e94560] ${
                    scrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#audit"
                className="cta-button text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                Get Free Audit
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {["Services", "About", "Results", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-[#e94560] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#audit"
                className="block cta-button text-white px-6 py-3 rounded-full text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Audit
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#e94560] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0f3460] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-white/90 text-sm">
                TOP REVIEWED AGENCY IN THE USA | FREE AUDIT
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Most Marketing Budgets Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] to-pink-400">
                Wasted
              </span>
              —Let&apos;s Fix That
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              After thousands of audits, we&apos;ve found that{" "}
              <strong className="text-white">76% of marketing spend goes to waste</strong>.
              We&apos;ll show you where yours is leaking—and how to fix it fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="cta-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Get Your Free Marketing Audit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#results"
                className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                See Our Results
              </a>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white/80 text-sm">
                Loved by Business Owners & Marketers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50 border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </div>
        <div className="relative">
          <div className="logo-track animate-scroll-left">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-lg px-8 py-4 shadow-sm border border-gray-100"
              >
                <span className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" id="results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              WHAT MARKETERS SAY ABOUT{" "}
              <span className="gradient-text">DISRUPTIVE</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card rounded-2xl p-6 text-center card-hover border border-gray-100">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk-Free Guarantee */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e94560]/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-[#e94560]" />
                <span className="text-[#e94560] text-sm font-semibold">
                  RISK-FREE GUARANTEE
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Get Results in 90 Days—
                <span className="text-[#e94560]">Or You Don&apos;t Pay</span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Most Agencies Guess. We Audit, Prove, and Guarantee.</strong>
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Our free marketing audit is your first step to identifying wasted
                spend and missed opportunities. Whether you hire us or not,
                you&apos;ll walk away with a clear roadmap to grow faster and smarter.
                For qualifying brands, we guarantee measurable growth within 90
                days—or your money back.
              </p>

              <a
                href="#audit"
                className="cta-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
              >
                GET YOUR FREE MARKETING AUDIT
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">
                    AVG. RATING OF 4.8/5.0 STARS ON CLUTCH!
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  HUNDREDS OF CLUTCH REVIEWS
                </h3>

                <div className="space-y-4">
                  {reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-xl p-4 border border-white/5"
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-300 mb-2 italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <p className="text-xs text-gray-500">
                        — {review.name}, {review.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Values Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-[#e94560] font-semibold uppercase tracking-wider mb-4">
              OVER $450+ MILLION IN ANNUAL MANAGED AD SPEND
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              THE <span className="gradient-text">#1 MOST REVIEWED</span> DIGITAL
              MARKETING AGENCY
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Disruptive Advertising has been rated as the best performance
              marketing agency for authentic brands and marketers. We elevate the
              way business is done by pairing empowered marketers with win-win-win
              minded people and brands they believe in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center card-hover border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Spots */}
      <section className="py-20 bg-gradient-to-r from-[#e94560] to-[#c73659] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">LIMITED AVAILABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            We&apos;re Only Taking On 10 New Clients This Month
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            After 10,000+ audits and $1B+ managed in ad spend, we know what
            works—and what wastes your budget. If you&apos;re ready to grow
            again, start with a no-strings-attached audit.
          </p>

          <a
            href="#audit"
            className="bg-white text-[#e94560] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Get Your Free Marketing Audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              NEW CLIENT <span className="gradient-text">TIMELINE</span> TO
              SUCCESS
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-[#e94560]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What&apos;s Slowing Down Your{" "}
                <span className="gradient-text">Growth</span>?
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                76% of marketing budgets get wasted—we&apos;ll help you find
                where yours is leaking fast. Our audit gives you a clear picture
                of what&apos;s working, what&apos;s not, and where to optimize.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Identify wasted ad spend across all channels",
                  "Get a clear roadmap for improvement",
                  "Receive actionable recommendations",
                  "No strings attached—keep the audit either way",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#e94560] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#audit"
                className="cta-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
              >
                Get Your Free Marketing Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Analytics",
                  desc: "Deep dive into your data",
                },
                {
                  icon: <Megaphone className="w-8 h-8" />,
                  title: "Advertising",
                  desc: "Paid media optimization",
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Strategy",
                  desc: "Custom growth roadmap",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Growth",
                  desc: "Scalable results",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 card-hover border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Business Owners & Marketers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              THE PERFECT DIGITAL MARKETING AGENCY FOR{" "}
              <span className="gradient-text">BUSINESS OWNERS</span> AND{" "}
              <span className="gradient-text">MARKETERS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Business Owners */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e94560] to-[#c73659] rounded-2xl flex items-center justify-center text-white mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Business Owners
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "GROW YOUR BUSINESS",
                    desc: "Receive a winning strategy and get your revenue growth back on track",
                  },
                  {
                    title: "DRIVE IMMEDIATE IMPACT",
                    desc: "Get results that solve the immediate pain of current marketing challenges",
                  },
                  {
                    title: "STOP MANAGING MARKETERS",
                    desc: "Let us hire, develop, and retain top talent you can trust",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#e94560] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Marketers */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Marketers
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "IMPROVE YOUR PERFORMANCE",
                    desc: "Elevate your marketing strategy and start hitting numbers NOW",
                  },
                  {
                    title: "LOOK GREAT IN YOUR ORG",
                    desc: "We're the strategic partner that will help you win again and again",
                  },
                  {
                    title: "FOCUS ON WHAT YOU DO BEST",
                    desc: "We surround you with a team of complementary experts and resources",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0f3460] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient text-white" id="audit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            We&apos;ve Helped 1000&apos;s Of Marketers Achieve Their Goals
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            At Disruptive Advertising, we envision a world where only authentic
            brands and marketers win. Start with a free audit today.
          </p>
          <a
            href="#"
            className="cta-button text-white px-10 py-5 rounded-full text-xl font-bold inline-flex items-center gap-3 animate-pulse-glow"
          >
            GET YOUR FREE MARKETING AUDIT
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#e94560] to-[#0f3460] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Disruptive Digital</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Disruptive Advertising is the best performance marketing agency
                for authentic brands and marketers. We align your business goals
                to the right marketing strategy and provide the people, tools and
                technology to deliver breakthrough results.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    PPC Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    SEO Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    Email Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e94560] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Disruptive Digital. All rights reserved. This is a clone
              created for educational purposes.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-500 hover:text-[#e94560] transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

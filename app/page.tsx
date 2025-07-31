"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowRight, CheckCircle, Cloud, Plug, Target, Settings, Zap, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-200"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900 relative">
                Ensuredit
                <div className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-medium transition-colors relative group">
                Platform
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-emerald-500 transition-all duration-300"></div>
              </Link>
              <Link
                href="/solutions"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                Solutions
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                About Us
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                Resources
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                Contact
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/demo"
                className="text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg font-medium transition-colors"
              >
                Schedule Demo
              </Link>
              <Button className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
              <nav className="flex flex-col space-y-1 p-4">
                <Link href="/" className="text-blue-600 py-2 font-medium">
                  Platform
                </Link>
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  Solutions
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  About Us
                </Link>
                <Link href="/resources" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  Resources
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  Contact
                </Link>
                <div className="pt-4 space-y-2">
                  <Link href="/demo" className="block text-blue-600 py-2 font-medium">
                    Schedule Demo
                  </Link>
                  <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-600">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/8 to-transparent rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-full px-4 py-2 text-sm font-semibold text-emerald-700">
                  <TrendingUp className="w-4 h-4 mr-2 text-emerald-600" />
                  Processing $400M+ Annually | Expanding to 25+ Global Markets
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The Global Infrastructure for{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Next-Generation Insurance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Built to power the future of global insurance. Processing $400M+ annually across 4M+ policies and
                  scaling rapidly into emerging markets worldwide.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">Enterprise-Grade Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">Multi-Market Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">99.99% Platform Reliability</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    Schedule Enterprise Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
                  >
                    Explore Global Platform
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-900">$400M+</div>
                  <div className="text-sm text-gray-600 font-medium">Annual GWP Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">4M+</div>
                  <div className="text-sm text-gray-600 font-medium">Policies Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Markets & Expanding</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                      E
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Global Expansion Hub</div>
                      <div className="text-sm text-gray-500">Real-time Growth Metrics</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">$33M</div>
                      <div className="text-xs text-gray-600 font-medium">Monthly GWP</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">330K</div>
                      <div className="text-xs text-gray-600 font-medium">Monthly Policies</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">180+</div>
                      <div className="text-xs text-gray-600 font-medium">Global Partners</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">99.99%</div>
                      <div className="text-xs text-gray-600 font-medium">Platform Uptime</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-8">
            Trusted by India's Leading Insurance Companies
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {/* Acko Logo */}
            <div className="flex justify-center items-center p-4 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/acko-logo.png"
                alt="Acko Insurance"
                width={120}
                height={40}
                className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* ICICI Lombard Logo */}
            <div className="flex justify-center items-center p-4 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/icici-lombard-logo.png"
                alt="ICICI Lombard General Insurance"
                width={140}
                height={40}
                className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Text-based partners for remaining slots */}
            {["HDFC ERGO", "Bajaj Allianz", "TATA AIG", "+ 175 Partners"].map((partner, index) => (
              <div
                key={index}
                className="p-4 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-semibold text-gray-600 text-sm">{partner}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-blue-700 font-semibold">Expanding into Southeast Asia, Middle East & Africa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Global Insurance Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three interconnected platforms built for rapid global expansion and multi-market operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Embedded Insurance */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  🔗
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Embedded Insurance Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  API-first infrastructure enabling instant insurance integration across any digital touchpoint. Built
                  for global scale and multi-market deployment.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Single API, unlimited global integrations",
                    "Multi-market regulatory compliance",
                    "Real-time quote & bind capabilities",
                    "Enterprise-grade security & performance",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/embedded-insurance"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Platform <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Retail Insurance */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  🏪
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Distribution Network</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive marketplace connecting 180+ carriers across expanding global markets. Complete
                  distribution management for rapid scale.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "180+ carrier partnerships globally",
                    "2,500+ products across all categories",
                    "Multi-currency & multi-regulatory",
                    "End-to-end distribution management",
                    "Real-time settlement & reporting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/retail-distribution"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Network <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Strategic Analytics */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Analytics Engine</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI-powered market intelligence processing global insurance data. Drive expansion decisions with
                  real-time market insights.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI-driven market intelligence",
                    "Multi-market trend analysis",
                    "Proprietary 3X-D analytics framework",
                    "Real-time risk & opportunity mapping",
                    "Global expansion planning tools",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/strategic-analytics"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Intelligence <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built for Global Scale & Expansion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise infrastructure designed to power rapid expansion across emerging and established markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                icon: Cloud,
                title: "Multi-Cloud",
                description: "Global deployment across AWS, Azure with automatic failover and 99.99% uptime",
              },
              {
                icon: Plug,
                title: "Universal APIs",
                description: "Single integration supporting unlimited markets with localized compliance",
              },
              {
                icon: Globe,
                title: "Global Ready",
                description: "Multi-currency, multi-language, multi-regulatory compliance out of the box",
              },
              {
                icon: Settings,
                title: "Auto-Scaling",
                description: "Infrastructure that grows automatically with your global expansion",
              },
              {
                icon: Target,
                title: "Enterprise SLA",
                description: "Mission-critical reliability with 24/7 global support and monitoring",
              },
              {
                icon: Zap,
                title: "Real-time",
                description: "Instant processing and settlement across all time zones and markets",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:bg-slate-50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-slate-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-500 group-hover:border-transparent transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Globally?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join the platform processing $400M+ annually and expanding into 25+ global markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Schedule Enterprise Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
              >
                Contact Global Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold relative">
                  Ensuredit
                  <div className="absolute -bottom-1 left-0 w-8 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-400">
                The global infrastructure powering next-generation insurance technology for rapid market expansion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/solutions/embedded-insurance" className="hover:text-white transition-colors">
                    Embedded Platform
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/retail-distribution" className="hover:text-white transition-colors">
                    Global Distribution
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/strategic-analytics" className="hover:text-white transition-colors">
                    Analytics Engine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise Platform
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ensuredit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

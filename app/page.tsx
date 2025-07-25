"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowRight, CheckCircle, Cloud, Plug, Target, Settings, Zap } from "lucide-react"
import Link from "next/link"

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
              <a
                href="#demo"
                className="text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg font-medium transition-colors"
              >
                View Demo
              </a>
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
                  <a href="#demo" className="block text-blue-600 py-2 font-medium">
                    View Demo
                  </a>
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Scale Your Insurance Business with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Powerful Digital Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From embedded insurance to retail distribution and strategic analytics - everything you need to
                  innovate, connect, and excel.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">50+ Insurance Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">300+ Global Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">AWS Cloud Native</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                >
                  Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
                >
                  Explore Solutions
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-900">700+</div>
                  <div className="text-sm text-gray-600 font-medium">Insurance Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">98.5%</div>
                  <div className="text-sm text-gray-600 font-medium">Platform Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">2.3s</div>
                  <div className="text-sm text-gray-600 font-medium">Avg Response Time</div>
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
                      <div className="font-semibold text-gray-900">Ensuredit Dashboard</div>
                      <div className="text-sm text-gray-500">Real-time Analytics</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">₹2.4Cr</div>
                      <div className="text-xs text-gray-600 font-medium">Monthly Premium</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">15,234</div>
                      <div className="text-xs text-gray-600 font-medium">Active Policies</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">47</div>
                      <div className="text-xs text-gray-600 font-medium">Partner Insurers</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">94%</div>
                      <div className="text-xs text-gray-600 font-medium">Customer Satisfaction</div>
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
            {["ICICI Lombard", "HDFC ERGO", "Bajaj Allianz", "TATA AIG", "Reliance General", "+ 45 More"].map(
              (partner, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="font-semibold text-gray-600 text-sm">{partner}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Three Powerful Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete insurance technology platform designed to accelerate your business growth across all touchpoints
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Embedded / Affinity Insurance</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamlessly integrate insurance into your existing ecosystem to protect customers and generate
                  additional revenue streams.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Single point API for world-class customer experience",
                    "Native journeys within your apps and platforms",
                    "Widest industry support across sectors",
                    "Group and affinity products from global partners",
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
                  Learn More <ArrowRight className="w-4 h-4" />
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Insurance Distribution</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete digital platform to grow and acquire consumers with access to 50+ insurers and 700+ products
                  across all categories.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "50+ integrated insurance partners",
                    "700+ products across Motor, Health, Life & More",
                    "End-to-end sales journey management",
                    "Claims and commission management",
                    "Comprehensive MIS and reporting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            {/* Strategic Analytics */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI/ML augmented Analytics as a Service providing deep market insights, especially for the automotive
                  sector.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "RTO level sales data analytics",
                    "Automotive and economic data hub",
                    "500+ visualization options",
                    "Proprietary 3X-D framework",
                    "Machine learning-powered insights",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enterprise-Grade Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and seamless integration with everything you need to succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Native",
                description: "Hosted on Amazon Web Services for unlimited scalability and 99.9% uptime reliability",
              },
              {
                icon: Plug,
                title: "Open API",
                description: "Easily add functionality, capabilities, and products with our flexible REST API",
              },
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Successfully deployed with 300+ clients globally across multiple markets",
              },
              {
                icon: Settings,
                title: "Highly Customizable",
                description: "Flexible workflows and automations tailored to your specific business needs",
              },
              {
                icon: Target,
                title: "All-in-One Platform",
                description: "Manage your entire insurance distribution lifecycle from one unified dashboard",
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "Go to market in days, not months, with our streamlined implementation process",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Insurance Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join 300+ companies already scaling with Ensuredit's comprehensive platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
            >
              Contact Sales
            </Button>
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
                Professional insurance technology platform for teams and businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/solutions/embedded-insurance" className="hover:text-white transition-colors">
                    Embedded Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/retail-distribution" className="hover:text-white transition-colors">
                    Retail Distribution
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/strategic-analytics" className="hover:text-white transition-colors">
                    Strategic Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Integration
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

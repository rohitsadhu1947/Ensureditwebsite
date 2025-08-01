"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Plug,
  Settings,
  Rocket,
  CreditCard,
  ShoppingCart,
  Plane,
  Home,
  Car,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

export default function EmbeddedInsurancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const useCases = [
    {
      icon: CreditCard,
      title: "Fintech & Banking",
      description:
        "Boost customer lifetime value with embedded financial protection.",
      benefits: [
        "Credit card protection insurance",
        "Credit shield/Loan protection insurance",
        "Device protection for mobile banking",
        "Hopsi-Cash + EMI Protect + Health Bundles",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description:
        "Turn checkout into a profit center with instant product protection.",
      benefits: [
        "Product warranty extensions",
        "Shipping protection insurance",
        "Electronics & gadget protection",
        "Return guarantee insurance",
      ],
    },
    {
      icon: Plane,
      title: "Travel & Mobility",
      description:
        "Embed protection. Secure journeys. Increase revenue.",
      benefits: [
        "Trip cancellation protection",
        "Ride-sharing insurance coverage",
        "Parametric travel insurance",
        "Flight delay compensation CFAR/CFMR",
      ],
    },
    {
      icon: Home,
      title: "Real Estate & PropTech",
      description:
        "Make every property transaction a protected, profitable experience.",
      benefits: [
        "Home buyer protection insurance",
        "Tenant security deposit alternatives",
        "Property management insurance",
        "Home warranty coverage",
      ],
    },
    {
      icon: Car,
      title: "Automotive & Fleet",
      description:
        "Complete vehicle protection built into your automotive platform.",
      benefits: [
        "Extended vehicle warranties",
        "Gap insurance coverage",
        "Fleet protection insurance",
        "Roadside assistance programs",
      ],
    },
    {
      icon: Briefcase,
      title: "B2B & Enterprise",
      description:
        "Complete business protection built into your enterprise platform.",
      benefits: [
        "Professional liability insurance",
        "Cybersecurity protection",
        "Business interruption coverage",
        "Employment practices liability",
      ],
    },
  ]

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
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                Platform
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
              <Link href="/solutions" className="text-blue-600 font-medium transition-colors relative group">
                Solutions
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-emerald-500 transition-all duration-300"></div>
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
                <Link href="/" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  Platform
                </Link>
                <Link href="/solutions" className="text-blue-600 py-2 font-medium">
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

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Embedded Insurance Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Seamlessly integrate insurance into your customer journey to protect customers and generate new revenue
            streams through our API-first platform
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">Single API</div>
              <div className="text-lg opacity-80">Integration Point</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-80">Industry Verticals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80">Real-time Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Embedded Insurance Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple integration, powerful results - protect your customers at the point of need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                icon: Plug,
                title: "API Integration",
                description:
                  "Integrate our RESTful API into your existing platform with comprehensive documentation and developer support. Single integration, multiple insurance products.",
              },
              {
                number: "2",
                icon: Settings,
                title: "Configure Products",
                description:
                  "Choose from our extensive catalog of insurance products or work with us to create custom coverage that fits your customer needs perfectly.",
              },
              {
                number: "3",
                icon: Rocket,
                title: "Go Live",
                description:
                  "Launch insurance offerings within your customer journey. From quote to claims, everything happens seamlessly within your branded experience.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="relative bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <CardContent className="pt-12 pb-8 px-8 text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industry Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embedded insurance solutions tailored for every business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-slate-50 border-l-4 border-l-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple API Integration</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Our developer-friendly API makes it easy to integrate insurance capabilities into any application.
                  With comprehensive documentation, SDKs, and 24/7 support, you can be up and running in days, not
                  months.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "RESTful API with JSON responses",
                  "Real-time webhooks for instant notifications",
                  "Sandbox environment for testing",
                  "Multi-language SDKs and code examples",
                  "Comprehensive API documentation",
                  "24/7 developer support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg">
                  View API Docs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Get API Key
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="space-y-2">
                <div className="text-gray-400">// Create insurance quote</div>
                <div>
                  <span className="text-pink-400">POST</span> /api/v1/embedded/quote
                </div>
                <div>{"{"}</div>
                <div className="ml-4">
                  <span className="text-green-400">"product_type"</span>:{" "}
                  <span className="text-green-400">"device_protection"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"item_value"</span>: <span className="text-yellow-400">50000</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"customer_id"</span>:{" "}
                  <span className="text-green-400">"customer_123"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"coverage_duration"</span>:{" "}
                  <span className="text-green-400">"12_months"</span>
                </div>
                <div>{"}"}</div>
                <div className="pt-4 text-gray-400">// Response</div>
                <div>{"{"}</div>
                <div className="ml-4">
                  <span className="text-green-400">"quote_id"</span>:{" "}
                  <span className="text-green-400">"ENS_EMB_2025_001"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"premium"</span>: <span className="text-yellow-400">2500</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"coverage_start"</span>:{" "}
                  <span className="text-green-400">"immediate"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"policy_url"</span>:{" "}
                  <span className="text-green-400">"https://api.ensuredit.com/policy/..."</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Embed Insurance?</h2>
          <p className="text-xl mb-10 opacity-90">
            Start protecting your customers and generating new revenue with embedded insurance solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Schedule Integration Call
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
              >
                Explore More Solutions
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

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ArrowRight, CheckCircle, Code, Zap, Shield, Globe, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function EmbeddedInsurancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Embedded Insurance Platform</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Insurance Integration Made{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Simple
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Seamlessly embed insurance products into your platform with our powerful API. Protect your customers
                  and generate new revenue streams without the complexity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    Schedule Integration Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
                  >
                    Explore More Solutions
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-900">5 min</div>
                  <div className="text-sm text-gray-600 font-medium">Integration Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">99.9%</div>
                  <div className="text-sm text-gray-600 font-medium">API Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Insurance Products</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                      API
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Live Integration</div>
                      <div className="text-sm text-gray-500">Real-time Insurance API</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">POST /api/v1/quote</div>
                      <div className="text-lg font-bold text-emerald-500">Response: 200ms</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Coverage Amount</div>
                      <div className="text-lg font-bold text-blue-600">₹5,00,000</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Premium</div>
                      <div className="text-lg font-bold text-blue-600">₹2,499/year</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Embed Insurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features to integrate insurance seamlessly into your platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Simple API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  RESTful APIs with comprehensive documentation. Get started in minutes with our SDKs and code samples.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Instant quotes, real-time policy binding, and immediate certificate generation for seamless user
                  experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Multi-Product Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access to 50+ insurance products across motor, health, travel, and specialty insurance categories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Global Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built-in compliance for multiple markets with automatic regulatory updates and local requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Continuous system monitoring with 99.9% uptime SLA and proactive issue resolution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>White-label Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fully customizable interface that matches your brand. Your customers see your brand, not ours.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across industries are using embedded insurance to protect customers and grow revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">E-commerce Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Protect customer purchases with shipping insurance, product warranties, and return protection.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Shipping and delivery protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Extended warranties
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Return and refund protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Fintech Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Embed insurance into financial products like loans, credit cards, and investment platforms.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Credit protection insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Investment protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Personal accident coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Travel & Mobility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Offer travel insurance, ride protection, and mobility coverage at the point of booking.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Trip cancellation coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Ride-sharing protection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Medical emergency coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">SaaS Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Protect your customers' businesses with cyber insurance, professional liability, and business
                  interruption coverage.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Cyber liability insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Professional indemnity
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Business interruption
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embed Insurance?</h2>
          <p className="text-xl mb-10 opacity-90">
            Start protecting your customers and generating new revenue streams in just 5 minutes
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
                Explore All Solutions
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

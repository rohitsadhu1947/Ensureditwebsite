"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ArrowRight, Building, Users, TrendingUp, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function RetailDistributionPage() {
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
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Retail Distribution Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Complete Insurance{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Marketplace
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Access 50+ insurance partners and 700+ products through one unified platform. Grow your business with
                  comprehensive distribution management tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    Schedule Platform Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
                  >
                    Explore All Solutions
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-900">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Insurance Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">700+</div>
                  <div className="text-sm text-gray-600 font-medium">Products Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support Available</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                      📊
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Distribution Dashboard</div>
                      <div className="text-sm text-gray-500">Real-time Performance</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Monthly Sales</div>
                      <div className="text-2xl font-bold text-emerald-500">₹45.2L</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Active Policies</div>
                      <div className="text-2xl font-bold text-blue-600">2,847</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Commission Earned</div>
                      <div className="text-2xl font-bold text-purple-600">₹6.8L</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Distribution Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your insurance distribution business from one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Multi-Insurer Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with 50+ leading insurance companies through a single platform. Compare products and pricing
                  instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete CRM with lead tracking, customer profiles, policy management, and renewal reminders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Detailed analytics and reporting on sales performance, commission tracking, and business growth
                  metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Claims Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  End-to-end claims management with status tracking, document management, and customer communication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Multi-Channel Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sell through multiple channels - web, mobile, agents, and partners with unified management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Automated Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Streamline operations with automated underwriting, policy issuance, and renewal processes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">700+ Insurance Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major insurance categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚗
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Insurance</h3>
                <p className="text-gray-600 mb-4">Car, bike, and commercial vehicle insurance from top insurers</p>
                <Badge variant="secondary">200+ Products</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏥
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Insurance</h3>
                <p className="text-gray-600 mb-4">Individual, family, and group health insurance plans</p>
                <Badge variant="secondary">180+ Products</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✈️
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Travel Insurance</h3>
                <p className="text-gray-600 mb-4">Domestic and international travel protection plans</p>
                <Badge variant="secondary">120+ Products</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏠
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Insurance</h3>
                <p className="text-gray-600 mb-4">Home, commercial property, and asset protection</p>
                <Badge variant="secondary">200+ Products</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our partners are growing their insurance distribution business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">300%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Growth</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Regional broker increased sales by 300% within 6 months of using our platform
                </p>
                <Badge variant="outline">Insurance Broker</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fintech company reduced operational costs by 50% while expanding product offerings
                </p>
                <Badge variant="outline">Fintech Company</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">24hrs</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Go-to-Market</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Startup launched insurance products in just 24 hours using our platform
                </p>
                <Badge variant="outline">InsurTech Startup</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Distribution?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join hundreds of successful distributors already growing their business with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Schedule Platform Demo
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

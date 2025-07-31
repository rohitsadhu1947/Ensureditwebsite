"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ArrowRight, BarChart3, Brain, Target, TrendingUp, Database, Zap } from "lucide-react"
import Link from "next/link"

export default function StrategicAnalyticsPage() {
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
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                  Strategic Analytics Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  AI-Powered Insurance{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Intelligence
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business decisions with comprehensive market analytics, especially designed for the
                  automotive sector. Get deep insights with our proprietary 3X-D analytics framework.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    Schedule Analytics Demo <ArrowRight className="ml-2 h-5 w-5" />
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
                  <div className="text-3xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Visualizations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">RTO</div>
                  <div className="text-sm text-gray-600 font-medium">Level Analytics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">AI/ML</div>
                  <div className="text-sm text-gray-600 font-medium">Powered Insights</div>
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
                      <div className="font-semibold text-gray-900">Analytics Dashboard</div>
                      <div className="text-sm text-gray-500">Real-time Market Intelligence</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Market Growth</div>
                      <div className="text-2xl font-bold text-emerald-500">+23.4%</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Risk Score</div>
                      <div className="text-2xl font-bold text-blue-600">7.2/10</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-gray-600 mb-2">Opportunity Index</div>
                      <div className="text-2xl font-bold text-purple-600">High</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Analytics & Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics platform with AI/ML capabilities designed for strategic decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>RTO Level Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Granular analytics at Regional Transport Office level for precise market understanding and opportunity
                  identification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>AI/ML Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Machine learning algorithms analyze patterns and predict trends to provide actionable business
                  intelligence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>3X-D Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Proprietary analytics framework providing three-dimensional analysis for comprehensive market
                  understanding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time market trends, competitive analysis, and growth opportunities across automotive insurance
                  segments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Automotive Data Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Comprehensive automotive industry data including vehicle registrations, sales trends, and market
                  dynamics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Live data processing and instant insights generation for time-sensitive business decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">500+ Visualizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics across multiple dimensions and categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚗
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vehicle Analytics</h3>
                <p className="text-gray-600 mb-4">Registration trends, sales data, and market penetration analysis</p>
                <Badge variant="secondary">150+ Charts</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  📍
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Geographic Intelligence</h3>
                <p className="text-gray-600 mb-4">State, district, and RTO level market analysis and opportunities</p>
                <Badge variant="secondary">120+ Maps</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Trends</h3>
                <p className="text-gray-600 mb-4">Historical trends, forecasting, and predictive analytics</p>
                <Badge variant="secondary">130+ Trends</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                <p className="text-gray-600 mb-4">Risk scoring, claim patterns, and underwriting insights</p>
                <Badge variant="secondary">100+ Models</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Strategic Decisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses use our analytics platform for data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Insurance Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Optimize pricing strategies, identify growth markets, and improve underwriting decisions with
                  comprehensive market intelligence.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Market penetration analysis</li>
                  <li>• Competitive benchmarking</li>
                  <li>• Risk assessment modeling</li>
                  <li>• Growth opportunity identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Automotive OEMs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Understand market dynamics, plan product launches, and optimize distribution strategies with detailed
                  automotive analytics.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sales trend analysis</li>
                  <li>• Market share tracking</li>
                  <li>• Regional performance insights</li>
                  <li>• Product planning support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Financial Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Make informed lending decisions, assess portfolio risks, and identify new business opportunities in
                  the automotive finance sector.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Credit risk assessment</li>
                  <li>• Portfolio optimization</li>
                  <li>• Market opportunity analysis</li>
                  <li>• Regulatory compliance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Consulting Firms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Provide data-driven recommendations to clients with comprehensive market research and analytical
                  insights.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Market research reports</li>
                  <li>• Strategic planning support</li>
                  <li>• Industry benchmarking</li>
                  <li>• Custom analytics solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Data-Driven Decisions?</h2>
          <p className="text-xl mb-10 opacity-90">
            Transform your business strategy with AI-powered analytics and comprehensive market intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Schedule Analytics Demo
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

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, BarChart3, TrendingUp, Brain, Target, Zap, Shield, Clock, Database } from "lucide-react"
import Link from "next/link"

export default function StrategicAnalyticsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("automotive")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const dataPoints = [
    {
      number: "250M+",
      label: "Vehicles Analyzed",
      description: "Comprehensive vehicle data with attributes",
    },
    {
      number: "500+",
      label: "Visualization Options",
      description: "Interactive charts and dashboards",
    },
    {
      number: "PIN Code",
      label: "Level Granularity",
      description: "Census data to the most granular level",
    },
    {
      number: "99.9%",
      label: "Data Accuracy",
      description: "ML-powered data cleaning and validation",
    },
  ]

  const keyFeatures = [
    {
      icon: Database,
      title: "Comprehensive Data Integration",
      description:
        "Access to 200M+ vehicle records, census data, financial analytics, and market intelligence all in one unified platform.",
      benefits: ["Automotive sales data", "Financial credit data", "Demographic insights", "Market trends"],
    },
    {
      icon: Brain,
      title: "AI/ML-Powered Analytics",
      description:
        "Proprietary 3X-D framework leverages machine learning models to clean data and generate actionable insights.",
      benefits: ["Automated data cleaning", "Predictive modeling", "Anomaly detection", "Trend forecasting"],
    },
    {
      icon: TrendingUp,
      title: "Advanced Forecasting",
      description:
        "Market reality-rooted forecasts that go beyond simple time series analysis to predict future trends.",
      benefits: ["Market trend prediction", "Demand forecasting", "Risk assessment", "Opportunity identification"],
    },
    {
      icon: BarChart3,
      title: "Interactive Visualizations",
      description:
        "500+ visualization options with customizable dashboards for clear, actionable visual representation.",
      benefits: ["Real-time dashboards", "Custom charts", "Export capabilities", "Interactive reports"],
    },
  ]

  const industries = [
    {
      id: "automotive",
      title: "Automotive Sector",
      description: "Deep insights into vehicle sales, market trends, and consumer behavior",
      features: [
        "Vehicle sales analytics at RTO level",
        "Make, model, and variant performance tracking",
        "Fuel type trend analysis",
        "Market share insights",
        "Consumer preference mapping",
      ],
      stats: "200M+ Vehicles",
    },
    {
      id: "insurance",
      title: "Insurance Industry",
      description: "Risk assessment, market penetration, and product performance analytics",
      features: [
        "Risk profiling and assessment",
        "Market penetration analysis",
        "Product performance metrics",
        "Claims trend analysis",
        "Competitive intelligence",
      ],
      stats: "50+ Insurers",
    },
    {
      id: "financial",
      title: "Financial Services",
      description: "Credit analytics, loan disbursement trends, and financial market insights",
      features: [
        "Credit data analysis",
        "Loan disbursement tracking",
        "Default prediction models",
        "Market opportunity identification",
        "Portfolio risk analysis",
      ],
      stats: "₹500Cr+ Analyzed",
    },
  ]

  const useCases = [
    {
      title: "Market Entry Strategy",
      description: "Identify optimal markets for product launches and expansion",
      results: "40% improvement in market entry success rates",
    },
    {
      title: "Sales Forecasting",
      description: "Predict future sales trends with high accuracy",
      results: "85% forecast accuracy achieved",
    },
    {
      title: "Competitive Intelligence",
      description: "Monitor competitor performance and market positioning",
      results: "Real-time competitive insights",
    },
    {
      title: "Risk Assessment",
      description: "Evaluate market risks and opportunities",
      results: "30% reduction in investment risks",
    },
  ]

  const platformBenefits = [
    {
      icon: Zap,
      title: "Time-Saving Automation",
      description: "Automated data cleaning and processing eliminates manual effort",
      impact: "80% reduction in data preparation time",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security measures protect sensitive business data",
      impact: "Bank-grade security standards",
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Live data updates and instant insights for quick decision-making",
      impact: "Sub-second query response times",
    },
    {
      icon: Target,
      title: "Scalable Architecture",
      description: "Cloud-native platform that grows with your business needs",
      impact: "Handles petabytes of data",
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <span className="w-4 h-4 mr-2">⭐</span>
                  Strategic Analytics Platform
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your AI-Powered Strategic{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Analytics
                  </span>{" "}
                  Engine
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                  Transform raw data into strategic insights with our AI/ML-powered analytics platform. Make confident,
                  data-driven decisions with comprehensive market intelligence across automotive, insurance, and
                  financial sectors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    <span className="mr-2">▶</span>
                    Watch Demo
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
                >
                  Request Trial
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {dataPoints.map((point, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{point.number}</div>
                    <div className="text-sm opacity-80 font-medium">{point.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Strategic Analytics</div>
                        <div className="text-sm text-gray-500">Real-time Insights</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Vehicle Sales Trend</span>
                        <span className="text-green-500 font-bold">↗ +23.5%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Market Penetration</span>
                        <span className="text-blue-500 font-bold">87.2%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Forecast Accuracy</span>
                        <span className="text-emerald-500 font-bold">94.8%</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-2">Data Sources Active</div>
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered tools designed to transform your data into actionable business
              intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <span className="w-4 h-4 text-emerald-500 flex-shrink-0">✓</span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized analytics solutions tailored for automotive, insurance, and financial services sectors
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === industry.id
                      ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>
          </div>
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`${activeTab === industry.id ? "block" : "hidden"} transition-all duration-500`}
            >
              <Card className="bg-white shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="text-3xl font-bold text-orange-500">{industry.stats}</div>
                        <div className="h-6 w-px bg-slate-300"></div>
                        <div className="text-gray-600">Data Points</div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">{industry.description}</p>
                      <div className="space-y-4">
                        {industry.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0">▶</span>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-5xl">📈</span>
                        </div>
                        <div className="text-2xl font-bold mb-2">Advanced Analytics</div>
                        <div className="opacity-90">Real-time insights and forecasting</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies leverage Strategic Analytics to drive strategic decisions and business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-3">
                    <div className="text-orange-600 font-semibold text-sm">{useCase.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Strategic Analytics?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade analytics platform built for scale, security, and performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:bg-white p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-white border-2 border-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 group-hover:border-transparent transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-orange-600 font-semibold text-sm bg-orange-50 rounded-lg py-2 px-3">
                  {benefit.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Analytics?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join leading companies using Strategic Analytics to make data-driven decisions and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Schedule Demo
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
            >
              Start Free Trial
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

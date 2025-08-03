"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  CheckCircle,
  Target,
  Zap,
  DollarSign,
  Shield,
  BarChart3,
  Users,
  Car,
  Heart,
  Briefcase,
  Plane,
  Home,
  Crosshair,
  User,
  FileText,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RetailDistributionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Target,
      title: "Sales & Lead Management",
      description:
        "Comprehensive CRM with lead tracking, opportunity management, and automated follow-ups to maximize conversion rates.",
      benefits: [
        "Lead capture and scoring",
        "Automated workflow management",
        "Sales pipeline tracking",
        "Performance analytics",
      ],
    },
    {
      icon: Zap,
      title: "Quote & Policy Management",
      description:
        "Instant quotes from multiple insurers with comparison tools, policy binding, and digital document management.",
      benefits: [
        "Real-time quote comparison",
        "One-click policy binding",
        "Digital policy documents",
        "Renewal management",
      ],
    },
    {
      icon: DollarSign,
      title: "Commission & Payments",
      description:
        "Automated commission calculations, payment processing, and detailed financial reporting with tax management.",
      benefits: [
        "Automated commission tracking",
        "Instant payment processing",
        "Tax calculation and reporting",
        "Financial dashboard",
      ],
    },
    {
      icon: Shield,
      title: "Claims Processing",
      description:
        "Streamlined claims management with digital submission, real-time tracking, and automated settlement processes.",
      benefits: [
        "Digital claims submission",
        "Real-time status tracking",
        "Document management",
        "Settlement automation",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive business intelligence with performance metrics, trend analysis, and actionable insights.",
      benefits: ["Real-time dashboards", "Performance metrics", "Trend analysis", "Custom reports"],
    },
    {
      icon: Users,
      title: "Customer Portal",
      description: "Self-service customer portal with policy management, claims tracking, and renewal capabilities.",
      benefits: ["Policy self-service", "Claims submission portal", "Document downloads", "Renewal notifications"],
    },
  ]

  const productCategories = [
    {
      icon: Car,
      title: "Motor Insurance",
      count: "60+",
      label: "Products Available",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      count: "75+",
      label: "Products Available",
    },
    {
      icon: Briefcase,
      title: "Life Insurance",
      count: "50+",
      label: "Products Available",
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      count: "15+",
      label: "Products Available",
    },
    {
      icon: Home,
      title: "Property Insurance",
      count: "10+",
      label: "Products Available",
    },
    {
      icon: Crosshair,
      title: "Specialized Coverage",
      count: "40+",
      label: "Products Available",
    },
  ]

  const processSteps = [
    {
      number: "1",
      icon: User,
      title: "Lead Capture",
      description:
        "Capture leads through multiple channels including web forms, phone calls, walk-ins, and partner referrals. Automated lead scoring and assignment.",
    },
    {
      number: "2",
      icon: DollarSign,
      title: "Quote Generation",
      description:
        "Generate instant quotes from multiple insurers with side-by-side comparison. Customers can easily compare coverage and pricing options.",
    },
    {
      number: "3",
      icon: FileText,
      title: "Policy Binding",
      description:
        "One-click policy binding with digital documentation, payment processing, and immediate policy issuance with email delivery.",
    },
    {
      number: "4",
      icon: RotateCcw,
      title: "Ongoing Management",
      description:
        "Automated renewals, claims support, policy modifications, and customer service through integrated customer portal and support tools.",
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
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/ensuredit-logo-full.png"
                  alt="Ensuredit"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
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
      <section className="pt-24 pb-16 bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Retail Insurance Distribution Platform
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Complete digital platform to scale customer acquisition with access to 70+ insurers and 250+ products across
            Motor, Health, Life and specialized coverage
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">70+</div>
              <div className="text-lg opacity-80">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
              <div className="text-lg opacity-80">Product Catalog</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">All-in-One</div>
              <div className="text-lg opacity-80">Platform Solution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-80">Support & Claims</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Distribution Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful insurance distribution business in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              250+ Insurance Products Across All Categories
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Access largest catalog of insurance products from 70+ leading insurers globally
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-50 border-l-4 border-l-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-0"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">{category.count}</div>
                  <div className="text-gray-600 text-sm">{category.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Our Platform Works</h2>
            <p className="text-xl text-gray-600">Simple, streamlined process from lead to policy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="relative bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Our Distribution Platform?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Built specifically for insurance distributors, our platform combines industry expertise with
                  cutting-edge technology to help you scale your business efficiently.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Increase Revenue",
                    description:
                      "Access to 250+ products means more opportunities to match customer needs and earn commissions.",
                  },
                  {
                    title: "Reduce Operational Costs",
                    description:
                      "Automated processes and digital workflows reduce manual work and operational overhead.",
                  },
                  {
                    title: "Improve Customer Experience",
                    description:
                      "Fast quotes, instant policy binding, and self-service portals enhance customer satisfaction.",
                  },
                  {
                    title: "Scale Your Business",
                    description:
                      "Cloud-based platform grows with your business, supporting unlimited agents and customers.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Schedule Platform Demo
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View Pricing Plans
                </Button>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Distribution Dashboard</div>
                    <div className="text-sm text-gray-500">Real-time Performance</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">₹12.5 Cr</div>
                    <div className="text-xs text-gray-600 font-medium">Monthly Premium</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">18,470</div>
                    <div className="text-xs text-gray-600 font-medium">Policies Sold</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">₹85L</div>
                    <div className="text-xs text-gray-600 font-medium">Commission Earned</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">98%</div>
                    <div className="text-xs text-gray-600 font-medium">Customer Satisfaction</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Motor Insurance</span>
                    <span className="font-semibold text-gray-900">45%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full w-[45%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Health Insurance</span>
                    <span className="font-semibold text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full w-[30%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Life Insurance</span>
                    <span className="font-semibold text-gray-900">25%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Distribution Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join leading insurance distributors using our platform to grow revenue and improve customer satisfaction
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
                <Image
                  src="/images/ensuredit-logo-full.png"
                  alt="Ensuredit"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
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

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("platform")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
    product: "platform",
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request submitted:", formData)
    setFormSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        role: "",
        message: "",
        product: "platform",
      })
    }, 5000)
  }

  const products = [
    {
      id: "platform",
      name: "Complete Platform",
      description: "See all Ensuredit solutions in action",
      features: ["Embedded Insurance", "Retail Distribution", "Strategic Analytics", "API Integration"],
    },
    {
      id: "embedded",
      name: "Embedded Insurance",
      description: "Learn how to integrate insurance into your customer journey",
      features: ["API Integration", "Product Catalog", "Real-time Quotes", "Claims Management"],
    },
    {
      id: "retail",
      name: "Retail Distribution",
      description: "Explore our comprehensive distribution platform",
      features: ["Agent Management", "Policy Administration", "Commission Tracking", "Analytics Dashboard"],
    },
    {
      id: "analytics",
      name: "Strategic Analytics",
      description: "Discover AI-powered insights with Strategic Analytics",
      features: ["Data Visualization", "Predictive Analytics", "Market Intelligence", "Custom Reports"],
    },
  ]

  const demoOptions = [
    {
      title: "Live Demo Session",
      duration: "30 minutes",
      description: "Join a personalized demo session with our product experts",
      icon: "🎥",
      popular: true,
    },
    {
      title: "Self-Guided Tour",
      duration: "15 minutes",
      description: "Explore our platform at your own pace with guided tutorials",
      icon: "🚀",
      popular: false,
    },
    {
      title: "Custom Presentation",
      duration: "45 minutes",
      description: "Get a tailored demo focused on your specific use case",
      icon: "🎯",
      popular: false,
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
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Get Started
                </Button>
              </Link>
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
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-600">Get Started</Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">See Ensuredit in Action</h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience how our insurance technology platform can transform your business. Choose the demo format that
            works best for you.
          </p>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Demo Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the demo format that best fits your schedule and learning style
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {demoOptions.map((option, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white ${
                  option.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <div className="text-blue-600 font-semibold mb-4">{option.duration}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  <Button
                    className={`w-full ${
                      option.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    } text-white`}
                    onClick={() => setSelectedProduct(option.title.toLowerCase().replace(" ", "-"))}
                  >
                    Choose This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Would You Like to See?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us which part of our platform interests you most
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  selectedProduct === product.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Demo</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          {formSubmitted ? (
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest in Ensuredit. Our team will contact you within 24 hours to schedule your
                  personalized demo.
                </p>
                <p className="text-sm text-gray-500">
                  In the meantime, feel free to explore our resources or contact us directly if you have any questions.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-gray-700">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO/Technology Leader</option>
                      <option value="product">Product Manager</option>
                      <option value="business">Business Development</option>
                      <option value="sales">Sales/Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Tell us about your use case
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What specific challenges are you looking to solve? What's your timeline for implementation?"
                      className="min-h-[120px] w-full"
                    />
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Selected Demo Focus:</h4>
                    <p className="text-gray-600">
                      {products.find((p) => p.id === selectedProduct)?.name} -{" "}
                      {products.find((p) => p.id === selectedProduct)?.description}
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
                  >
                    Schedule My Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Here's what happens after you request a demo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. We'll Contact You</h3>
              <p className="text-gray-600">
                Our team will reach out within 24 hours to schedule a time that works for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Tailored Demo</h3>
              <p className="text-gray-600">
                We'll customize the demo to focus on your specific use case and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Next Steps</h3>
              <p className="text-gray-600">We'll discuss implementation timelines, pricing, and how to get started</p>
            </div>
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

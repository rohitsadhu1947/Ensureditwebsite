"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Target, Eye, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const missionCards = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To democratize access to insurance technology by providing comprehensive, API-first solutions that enable any business to offer insurance products seamlessly to their customers.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To become the global infrastructure layer for insurance, powering embedded protection for billions of customers across all digital touchpoints worldwide.",
    },
    {
      icon: Zap,
      title: "Impact",
      description:
        "Creating a world where insurance protection is accessible, affordable, and automatically available whenever and wherever people need it most.",
    },
  ]

  const teamValues = [
    {
      title: "Innovation First",
      description:
        "We constantly push the boundaries of what's possible in insurance technology, embracing new ideas and cutting-edge solutions.",
    },
    {
      title: "Customer Obsession",
      description:
        "Every decision we make is driven by our commitment to delivering exceptional value and experiences for our clients and their customers.",
    },
    {
      title: "Global Mindset",
      description:
        "While rooted in India, we think globally, building solutions that scale across markets, cultures, and regulatory environments.",
    },
    {
      title: "Transparency & Trust",
      description:
        "We believe in open communication, ethical business practices, and building long-term partnerships based on mutual trust.",
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Platform Foundation",
      description:
        "Launched Ensuredit with core insurance distribution platform, onboarding first 10 insurance partners and establishing API-first architecture.",
    },
    {
      year: "2021",
      title: "Product Expansion",
      description: "Expanded to 25+ insurance partners, and enabled multi product categories.",
    },
    {
      year: "2022",
      title: "Closed Funding Round",
      description:
        "Closed our pre-series A Funding round of $4.2 Mn with global embedded insurance leader as lead investor",
    },
    {
      year: "2023",
      title: "Embedded Solution",
      description:
        "Launched our embedded insurance stack, and gained recognition as India's leading insurtech platform.",
    },
    {
      year: "2024",
      title: "Platform Evolution",
      description:
        "Launched comprehensive API suite, reached 50+ insurance partners, and established 200+ product catalog across all major insurance categories.",
    },
    {
      year: "2024",
      title: "International Expansion",
      description:
        "Expanded platform capabilities globally, enhanced AI/ML analytics, and positioned for next phase of international growth.",
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
              <Link
                href="/solutions"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                Solutions
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-5 transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="text-blue-600 font-medium transition-colors relative group">
                About Us
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-emerald-500 transition-all duration-300"></div>
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
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                  Solutions
                </Link>
                <Link href="/about" className="text-blue-600 py-2 font-medium">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Building the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Future of Insurance
            </span>{" "}
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            Ensuredit is India's leading insurance technology platform, empowering businesses to innovate, connect, and
            excel in the digital insurance landscape.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">2019</div>
              <div className="text-gray-600 font-medium">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">$400mn +</div>
              <div className="text-gray-600 font-medium">Premium Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">70+</div>
              <div className="text-gray-600 font-medium">Insurance Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ensuredit was born from a simple observation: the insurance industry was ripe for digital
                transformation, but existing solutions were fragmented, complex, and didn't serve the growing needs of
                modern businesses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founders, with deep experience in both insurance and technology, saw an opportunity to build a
                comprehensive platform that would bridge the gap between traditional insurance and the digital economy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be India's most trusted insurance technology platform, serving over 300 clients
                globally and processing more than $400 million in premium annually through our innovative solutions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                🚀
              </div>
              <blockquote className="text-xl italic text-gray-900 mb-4">
                "We believe insurance should be invisible to the end user but invaluable when they need it most."
              </blockquote>
              <cite className="text-blue-600 font-semibold">- Ensuredit Leadership Team</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming how insurance is bought, sold, and experienced in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team & Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to revolutionizing insurance technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-500 mb-2">75+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-500 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Global Support</div>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Employee Satisfaction</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 border-l-4 border-l-emerald-500 p-6 rounded-r-xl hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  <div className="w-full md:w-5/12">
                    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg my-4 md:my-0 relative z-10">
                    {item.year}
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-10 opacity-90">
            Be part of the team transforming insurance technology for businesses worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
            >
              View Open Positions
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
              >
                Partner With Us
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

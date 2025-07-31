"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X, Users, Target, Award, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building the Future of Insurance Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize insurance access globally through innovative technology and strategic
              partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Markets Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.9%</div>
              <div className="text-gray-600">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make insurance accessible, affordable, and seamless for everyone, everywhere. We believe that
                protection should be a fundamental right, not a privilege.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through cutting-edge technology and strategic partnerships, we're breaking down barriers and creating
                new possibilities in the insurance ecosystem.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global infrastructure that powers the next generation of insurance innovation, enabling
                seamless protection across all digital touchpoints worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every decision we make is driven by what's best for our customers and their end users. We obsess over
                  user experience and customer success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We continuously push boundaries and challenge the status quo. Innovation isn't just what we do—it's
                  who we are.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We operate with transparency, honesty, and ethical practices in all our relationships and business
                  dealings.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in insurance technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ankit Kumar</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Former McKinsey consultant with 15+ years in fintech and insurance. Led digital transformation
                  initiatives at major insurers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">RS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rahul Sharma</h3>
                <p className="text-blue-600 font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Ex-Google engineer with expertise in scalable systems. Built technology platforms serving millions of
                  users globally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">PM</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Mehta</h3>
                <p className="text-blue-600 font-medium mb-3">VP of Business Development</p>
                <p className="text-gray-600 text-sm">
                  Insurance industry veteran with 20+ years experience. Former executive at leading insurance companies
                  across Asia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our innovation and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">InsurTech Innovation Award</h3>
              <p className="text-sm text-gray-600">2024 - Asia InsurTech Summit</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Best API Platform</h3>
              <p className="text-sm text-gray-600">2023 - FinTech Awards India</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Startup of the Year</h3>
              <p className="text-sm text-gray-600">2023 - TechCrunch Disrupt</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Digital Excellence</h3>
              <p className="text-sm text-gray-600">2022 - Insurance Innovation Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join our mission to transform the insurance industry through technology and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-4"
              >
                Partner With Us
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
              >
                Schedule Demo
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

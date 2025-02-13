import React from 'react';
import { Bot, Building2, Globe2, LineChart, Mail, Users, Shield, Zap, Brain, Cpu, Network, Code2, ChevronRight, Award, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Seema Software Solutions" className="h-12" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-blue-700">Solutions</a>
            <a href="#features" className="text-gray-600 hover:text-blue-700">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-700">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-700">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with AI-Powered Automation
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Join 200+ enterprise customers worldwide who trust Seema Software Solutions to integrate AI 
              and automate their business processes, increasing productivity by up to 300% and reducing operational costs by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="mr-2">Get Started Today</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#solutions" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 transition-all duration-200 bg-white border-2 border-blue-700 rounded-xl hover:bg-blue-50 hover:text-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="mr-2">Explore Solutions</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">200+</p>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">300%</p>
              <p className="text-gray-600">Productivity Increase</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">60%</p>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-700">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our AI Solutions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive AI integration and automation solutions designed to transform your business operations
            and drive unprecedented growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Bot className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-600 mb-4">Seamlessly integrate cutting-edge AI technologies into your existing business processes.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Computer Vision Solutions
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Predictive Analytics
                </li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <LineChart className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-600 mb-4">Automate repetitive tasks and workflows to increase efficiency and reduce human error.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Workflow Automation
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Document Processing
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Data Entry Automation
                </li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Globe2 className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
              <p className="text-gray-600 mb-4">Deploy solutions that scale globally while maintaining peak performance.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Cloud Infrastructure
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  Global Deployment
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                  24/7 Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with enterprise-grade reliability to deliver
            powerful AI solutions for your business.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Brain className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Learning</h3>
              <p className="text-gray-600">Adaptive AI systems that learn from your business data</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Military-grade encryption and security protocols</p>
            </div>
            <div className="text-center p-6">
              <Cpu className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Edge Computing</h3>
              <p className="text-gray-600">Optimized performance with edge processing</p>
            </div>
            <div className="text-center p-6">
              <Network className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Integration</h3>
              <p className="text-gray-600">Seamless integration with existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Seema</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Building2 className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise-Ready Solutions</h3>
                <p className="text-gray-600">Built for scale with enterprise-grade security and reliability. Our solutions are trusted by Fortune 500 companies.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trusted by 200+ Companies</h3>
                <p className="text-gray-600">A proven track record of success with global enterprises across various industries and sectors.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Code2 className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
                <p className="text-gray-600">Tailored solutions designed to meet your specific business needs and requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-700 mr-2" />
                <p className="font-semibold">Global Financial Services</p>
              </div>
              <p className="text-gray-600 mb-4">
                "Seema's AI solutions have transformed our data processing capabilities, reducing processing time by 75% and improving accuracy significantly."
              </p>
              <p className="text-sm text-gray-500">- CTO, Leading Investment Bank</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-700 mr-2" />
                <p className="font-semibold">E-commerce Giant</p>
              </div>
              <p className="text-gray-600 mb-4">
                "The automation solutions provided by Seema have helped us scale our operations globally while maintaining exceptional customer service standards."
              </p>
              <p className="text-sm text-gray-500">- VP of Operations, Global Retail</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-blue-700 mr-2" />
                <p className="font-semibold">Healthcare Innovation</p>
              </div>
              <p className="text-gray-600 mb-4">
                "Implementing Seema's AI solutions has revolutionized our patient care systems, leading to better outcomes and reduced costs."
              </p>
              <p className="text-sm text-gray-500">- Director of Innovation, Healthcare Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Global Presence</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Empowering businesses across continents with innovative AI solutions and 24/7 support
          </p>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
              alt="Global Network" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-60 rounded-lg flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-white text-2xl font-semibold max-w-2xl mb-4">
                  Trusted by Leading Companies Worldwide
                </p>
                <p className="text-blue-100 max-w-xl mx-auto">
                  With offices in major tech hubs and clients across 30+ countries, we deliver enterprise-grade AI solutions globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with AI? Our team of experts is here to help you get started.
            </p>
            <div className="flex items-center justify-center space-x-2 text-xl text-blue-700">
              <Mail className="w-6 h-6" />
              <a href="mailto:office@seemasolutions.net" className="hover:underline">
                office@seemasolutions.net
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.svg" alt="Seema Software Solutions" className="h-12 brightness-0 invert mb-4" />
              <p className="text-gray-400">
                Leading provider of AI-powered automation solutions for enterprises worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">AI Integration</a></li>
                <li><a href="#" className="hover:text-white">Process Automation</a></li>
                <li><a href="#" className="hover:text-white">Global Scale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Seema Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
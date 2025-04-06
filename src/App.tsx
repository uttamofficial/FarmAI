import homepageImage from './assets/homepage.png';
import { Sprout, Notebook as Robot, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">FarmAI</span>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">Community</a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">Market Prices</a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="#" className="ml-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                AI-Powered<br />Sustainable Farming
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your farming practices with our advanced AI technology.
                Get real-time insights, optimize resources, and grow smarter for a
                sustainable future.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                  <Robot className="h-5 w-5 mr-2" />
                  Start Growing Smarter
                </button>
                <button className="flex items-center px-6 py-3 border border-gray-300 rounded-md hover:border-gray-400 transition-colors">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={homepageImage} // Use the imported image
                alt="AI Robot in greenhouse"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
    <h1 className="text-4xl font-bold text-center mb-4">Key Features</h1>
    <h1 className="text-xl  text-center mb-10">Advanced tools for modern farming</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Robot className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600">Advanced machine learning algorithms provide real-time analysis and recommendations for optimal crop management.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">Implement eco-friendly farming techniques that reduce resource consumption while maximizing yield.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-gray-600">Automate routine tasks and monitoring with intelligent systems that adapt to your farm's needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Sprout className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-semibold">FarmAI</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing agriculture through artificial intelligence and sustainable practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">123 Innovation Drive, AgTech Valley, CA 94025</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">contact@farmai.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 FarmAI. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

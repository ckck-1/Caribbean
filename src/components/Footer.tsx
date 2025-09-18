import React from 'react';
import { MapPin, Mail, Phone, TrendingUp, FileText, DollarSign, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B3C5D] to-[#1a5f8a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00A8C6] to-[#FF6B35] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-['Montserrat']">Caribbean Ventures</h3>
                <p className="text-white/70 text-sm font-['Lato']">Punta Cana Consulting</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed font-['Lato'] max-w-md">
              Strategic, financial, and administrative solutions designed for your success in the heart of the Caribbean.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00A8C6]" />
                <span className="text-white/80 font-['Lato']">Bávaro, Punta Cana, Dominican Republic</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00A8C6]" />
                <a href="mailto:contact@caribbean.ventures" className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']">
                  contact@caribbean.ventures
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00A8C6]" />
                <span className="text-white/80 font-['Lato']">+1 (809) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-3 text-white/80 hover:text-[#00A8C6] transition-colors group font-['Lato']"
                >
                  <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Business Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-3 text-white/80 hover:text-[#00A8C6] transition-colors group font-['Lato']"
                >
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Admin & Accounting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-3 text-white/80 hover:text-[#00A8C6] transition-colors group font-['Lato']"
                >
                  <DollarSign className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Financial Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-['Montserrat']">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#00A8C6] transition-colors font-['Lato']">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-['Lato']">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A8C6] transition-all duration-300 group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A8C6] transition-all duration-300 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A8C6] transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A8C6] transition-all duration-300 group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-['Lato']">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-white/10 rounded-l-full border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#00A8C6] font-['Lato']"
                />
                <button className="bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] px-6 py-2 rounded-r-full hover:shadow-lg transition-all duration-300 font-['Lato']">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-['Lato']">
              © {currentYear} Caribbean Ventures. All rights reserved.
            </p>
            <p className="text-white/60 text-sm font-['Lato']">
              Designed with ❤️ in the Dominican Republic
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#00A8C6]/5 rounded-full float-animation pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#FF6B35]/5 rounded-full float-animation-delayed pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
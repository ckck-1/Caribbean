import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00A8C6] to-[#FF6B35] rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0B3C5D] font-['Montserrat']">
                  Caribbean Ventures
                </h1>
                <p className="text-xs text-gray-600 font-['Lato']">Punta Cana Consulting</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-['Lato'] font-medium"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#00A8C6]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-[#00A8C6] transition-colors font-['Lato'] font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-['Lato'] font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
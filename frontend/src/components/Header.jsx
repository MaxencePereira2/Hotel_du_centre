import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Container } from './ui/container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Hôtel du Centre</h1>
              <p className="text-sm text-gray-600">Champeix</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('presentation')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Présentation
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Réserver
            </Button>
          </nav>

          {/* Contact rapide Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>04 73 96 35 08</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Champeix</span>
            </div>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('presentation')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Présentation
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                Contact
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Réserver
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
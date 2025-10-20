import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warmBrown text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-gold" />
              <h3 className="text-2xl font-serif font-semibold">Old Fashioned</h3>
            </div>
            <p className="text-cream/80 mb-6 max-w-md">
              Bringing Joliet breakfast back with locally-sourced ingredients, 
              family recipes, and the warmth of old-fashioned hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ofph88/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/1pancakehouse/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-cream/80 hover:text-gold transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-cream/80 hover:text-gold transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="text-cream/80 hover:text-gold transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cream/80 hover:text-gold transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-cream/80">
              <p>2022 W Jefferson St</p>
              <p>Joliet, IL 60435</p>
              <p className="mt-4">(815) 741-4666</p>
              <p>OFPH2022@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2025 Old Fashioned. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
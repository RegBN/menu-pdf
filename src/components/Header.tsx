import React, { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-cream shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-warmBrown" />
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-warmBrown">
              Old Fashioned Pancake House
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-warmBrown hover:text-gold transition-colors duration-200"
            >
              Home
            </button>
            <a 
              href="assets/WebMenu2.pdf"
              className="text-warmBrown hover:text-gold transition-colors duration-200"
            >
              Menu
            </a>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-warmBrown hover:text-gold transition-colors duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-warmBrown hover:text-gold transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Order Online Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.toasttab.com/local/order/old-fashioned-pancake-house/r-98ffc1bb-fbf8-4aff-9014-f96fce4626b9?diningOption=takeout&rwg_token=AAiGsobpg7_FEV9_O6Jx4hjHaQ_eHSnshpga-klrB8XhobA3iXouXCgEjVlGMnKfhOi87WZySch2lV_JwytnKMu4ZzpBj7gPHw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-golden text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-medium transition-all duration-200 hover:shadow-md transform hover:scale-105 text-sm md:text-base"
            >
              Order Online
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-warmBrown"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream border-t border-warmBrown/10 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-warmBrown hover:text-gold transition-colors duration-200 text-left"
              >
                Home
              </button>
              <a 
                href="#"
                className="text-warmBrown hover:text-gold transition-colors duration-200 text-left"
              >
                Menu
              </a>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-warmBrown hover:text-gold transition-colors duration-200 text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-warmBrown hover:text-gold transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Delicious breakfast plate with eggs benedict at Old Fashion Café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-20">
        <div className="max-w-4xl mx-auto px-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight">
            Bringing Joliet<br />
            <span className="text-gold">Breakfast Back</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 px-4 sm:px-0">
            Family-owned and locally loved, Old Fashioned Pancake House serves fresh breakfast and lunch. 
            Experience the warmth of traditional comfort food in the heart of Joliet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
             <a  
              href="assets/WebMenu2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-golden text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>View Menu</span>
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="https://www.toasttab.com/local/order/old-fashioned-pancake-house/r-98ffc1bb-fbf8-4aff-9014-f96fce4626b9?diningOption=takeout&rwg_token=AAiGsobpg7_FEV9_O6Jx4hjHaQ_eHSnshpga-klrB8XhobA3iXouXCgEjVlGMnKfhOi87WZySch2lV_JwytnKMu4ZzpBj7gPHw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-warmBrown text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <ShoppingBag size={20} />
              <span>Order Online</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
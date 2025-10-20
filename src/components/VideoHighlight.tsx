import React from 'react';
import { ShoppingBag } from 'lucide-react';

const VideoHighlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-warmBrown mb-6">
              A Journey Through Classic American Brunch
            </h2>
            <p className="text-lg text-warmBrown/80 mb-8 leading-relaxed">
              From our signature eggs benedict to fluffy buttermilk pancakes, 
              each dish tells a story of tradition and craftsmanship. Watch how we 
              transform simple, quality ingredients into extraordinary breakfast experiences 
              that have made Old Fashioned a Joliet favorite.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-warmBrown font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span className="text-warmBrown font-medium">Made to Order</span>
              </div>
            </div>
            
            {/* Order Online Button */}
            <div className="flex justify-center">
              <a 
                href="https://www.toasttab.com/local/order/old-fashioned-pancake-house/r-98ffc1bb-fbf8-4aff-9014-f96fce4626b9?diningOption=takeout&rwg_token=AAiGsobpg7_FEV9_O6Jx4hjHaQ_eHSnshpga-klrB8XhobA3iXouXCgEjVlGMnKfhOi87WZySch2lV_JwytnKMu4ZzpBj7gPHw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-golden text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center space-x-3 group"
              >
                <ShoppingBag className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Place an Order Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
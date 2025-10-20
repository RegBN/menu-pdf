import React, { useEffect, useRef, useState } from 'react';
import { Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-warmBrown mb-6">
              We're Better the Old Fashioned Way
            </h2>
            <p className="text-lg md:text-xl text-warmBrown/80 max-w-3xl mx-auto leading-relaxed">
              Family owned since 1988, the Old Fashioned Pancake House has been one of Joliet's most popular restaurants for great food at a great value. Owner Jim Zografos has put together one of the most efficient kitchens you'll ever find. Service is always friendly and the food is plentiful and arrives in a hurry!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-warmBrown mb-3">Healthy Ingredients</h3>
              <p className="text-warmBrown/70">
                We craft every dish using wholesome, fresh ingredients 
                promoting wellness while supporting our Joliet community.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-warmBrown mb-3">Made with Care</h3>
              <p className="text-warmBrown/70">
                Every dish is prepared with care using traditional recipes and techniques 
                passed down through generations.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-warmBrown mb-3">Family Owned</h3>
              <p className="text-warmBrown/70">
                As a family-owned establishment, we treat every guest like part of our own family, 
                ensuring a warm and welcoming experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
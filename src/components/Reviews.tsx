import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Mrs. Orozco",
      rating: 5,
      text: "Me and my family started going there. We have about three months that we found this place. I could say it's a very cozy relax place you placing your order and within like 15 minutes it comes out very good service. All the waitresses always smiling. Nice personality.",
      date: "1 year ago"
    },
    {
      name: "Whin Zipper",
      rating: 5,
      text: "I absolutely love this place! Me & my boyfriend, friends, and family all frequent here for great breakfast or lunch. They have an awesome selection of pancakes (of courses) skillets, french toast, salads, soups and more. Such a cozy environment with some of the best wait staff in Joliet. A true gem!! Thank you OFPH for always consistently providing great fresh food and wonderful service!.",
      date: "3 month ago"
    },
    {
      name: "Jesse Morris",
      rating: 5,
      text: "Wow how did I not know about this restaurant??? Mind blown!!! Tracy the waitress was very pleasant and the food was outstanding. The manager or owner seated us and he was also very polite and accommodating. He personally brought a rose to the my wife because it's Mothers Day weekend. We will be back.",
      date: "A month ago"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-warmBrown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-warmBrown mb-6">
            Loved by Locals
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-gold fill-current" />
              ))}
            </div>
            <span className="text-warmBrown font-semibold text-lg">4.9/5</span>
            <span className="text-warmBrown/70">• 200+ Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-gold/30 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-warmBrown/80 mb-6 leading-relaxed text-sm font-bold flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-warmBrown/10">
                <div>
                  <p className="font-semibold text-warmBrown text-sm">{review.name}</p>
                  <p className="text-xs text-warmBrown/60">Google Review</p>
                </div>
                <span className="text-xs text-warmBrown/60">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?sca_esv=a2d3658fd380a756&rlz=1C5CHFA_enUS1065US1065&sxsrf=AE3TifOK8zT5qXd3qywEsnTOHLwvnxz3MQ:1749660872908&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s1elf_8Dk-el63aRn1-UYaGVe_I4eKUh6e19gzHVnFass41c4THBnGfigmjgDumRYTlcR19nzwZkSD9COcoorL1qnMZZuig9vyuIWpdkzJpnc7IOtQ%3D%3D&q=Old+Fashioned+Pancake+House+Reviews&sa=X&ved=2ahUKEwiDn7rW6umNAxV0jYkEHZ62NRkQ0bkNegQIMxAE&biw=1440&bih=778&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-golden text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 inline-block"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
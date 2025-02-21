import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "This AI legal assistant helped me understand my rights as a tenant quickly and clearly.",
    author: "Sarah M.",
    role: "Small Business Owner"
  },
  {
    text: "Incredibly useful for basic legal guidance. Saved me time and money on simple legal matters.",
    author: "James P.",
    role: "Startup Founder"
  },
  {
    text: "The contract templates are comprehensive and easy to understand. A great resource for my business.",
    author: "Michael R.",
    role: "Tech Entrepreneur"
  },
  {
    text: "Found an excellent lawyer through the platform. The matching process was smooth and efficient.",
    author: "Lisa K.",
    role: "Real Estate Developer"
  },
  {
    text: "The AI responses are clear, accurate, and incredibly helpful for initial legal guidance.",
    author: "David C.",
    role: "Restaurant Owner"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={currentIndex + index} 
                className="bg-gray-50 p-8 rounded-xl transform transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index 
                    ? 'bg-blue-600 w-4' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
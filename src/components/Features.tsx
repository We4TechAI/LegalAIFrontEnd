import React, { useState } from 'react';
import { Scale, Shield, MessageSquare, Clock, DollarSign, Brain, Globe, FileText, Lock } from 'lucide-react';

const features = [
  {
    title: 'Instant Legal Answers',
    description: 'Get immediate responses to your legal questions 24/7, without waiting for appointments',
    icon: Scale
  },
  {
    title: 'Bank-Level Security',
    description: 'Your conversations are protected with enterprise-grade encryption and security measures',
    icon: Shield
  },
  {
    title: 'User-Friendly Interface',
    description: 'Simple, intuitive chat experience designed for non-legal professionals',
    icon: MessageSquare
  },
  {
    title: '24/7 Availability',
    description: 'Access legal guidance any time of day, any day of the week',
    icon: Clock
  },
  {
    title: 'Cost-Effective',
    description: 'Save significantly on legal consultation fees with our AI-powered solution',
    icon: DollarSign
  },
  {
    title: 'Local Legal Knowledge',
    description: 'Up-to-date with local laws and regulations across different jurisdictions',
    icon: Globe
  },
  {
    title: 'Advanced AI Technology',
    description: 'Powered by state-of-the-art language models trained on legal documents',
    icon: Brain
  },
  {
    title: 'Document Analysis',
    description: 'Quick analysis of legal documents and contracts with key points highlighted',
    icon: FileText
  },
  {
    title: 'Privacy First',
    description: 'Your data is never shared or stored without your explicit consent',
    icon: Lock
  }
];

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= features.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? features.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleFeatures = features.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Powerful Features</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the future of legal assistance with our comprehensive suite of features
        </p>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleFeatures.map((feature, index) => (
              <div 
                key={currentIndex + index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous features"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next features"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
                aria-label={`Go to feature page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
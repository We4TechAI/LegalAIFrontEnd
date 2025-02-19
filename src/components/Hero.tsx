import React from 'react';

interface HeroProps {
  onStartChat: () => void;
}

export function Hero({ onStartChat }: HeroProps) {
  return (
    <div 
      className="pt-16 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your AI-Powered Legal Assistant
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get instant legal insights and guidance through our advanced AI chatbot. Simple, accessible, and always available.
          </p>
          <button 
            onClick={onStartChat}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Your Legal Chat Now
          </button>
        </div>
      </div>
    </div>
  );
}
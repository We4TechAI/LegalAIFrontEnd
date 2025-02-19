import React from 'react';
import { Scale } from 'lucide-react';

interface NavigationProps {
  onStartChat: () => void;
}

export function Navigation({ onStartChat }: NavigationProps) {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LegalAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">Use Cases</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          </div>
          <button 
            onClick={onStartChat}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Chat
          </button>
        </div>
      </div>
    </nav>
  );
}
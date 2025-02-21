import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const useCases = [
  {
    title: 'Tenant Rights',
    description: 'Understand your rights and responsibilities as a tenant',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500',
    path: '/tenant-rights'
  },
  {
    title: 'Contract Drafting',
    description: 'Get help with basic contract templates and understanding',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500',
    path: '/contract-drafting'
  },
  {
    title: 'Find My Lawyer',
    description: 'Search and connect with experienced lawyers in your area',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=500',
    path: '/find-lawyer'
  }
];

export function UseCases() {
  const navigate = useNavigate();

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <button 
                  className="text-blue-600 font-semibold flex items-center hover:text-blue-700"
                  onClick={() => navigate(useCase.path)}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
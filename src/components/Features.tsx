import React from 'react';
import { Scale, Shield, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Instant Legal Answers',
    description: 'Get immediate responses to your legal questions',
    icon: Scale
  },
  {
    title: 'Secure & Private',
    description: 'Your conversations are completely confidential',
    icon: Shield
  },
  {
    title: 'Easy Interface',
    description: 'Simple, intuitive chat experience',
    icon: MessageSquare
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
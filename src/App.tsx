import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onStartChat={() => setShowChat(true)} />
      <Hero onStartChat={() => setShowChat(true)} />
      <Features />
      <UseCases />
      <Testimonials />
      <Footer />
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default App;
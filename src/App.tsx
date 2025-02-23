import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { ContractDrafting } from './components/ContractDrafting';
import { FindLawyer } from './components/FindLawyer';
import { LegalNews } from './components/LegalNews';
import { LegalResearch } from './components/LegalResearch';
import { ClientIntake } from './components/ClientIntake';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/contract-drafting" element={<ContractDrafting />} />
          <Route path="/find-lawyer" element={<FindLawyer />} />
          <Route path="/legal-news" element={<LegalNews />} />
          <Route path="/legal-research" element={<LegalResearch />} />
          <Route path="/client-intake" element={<ClientIntake />} />
          <Route path="/" element={
            <>
              <Navigation onStartChat={() => setShowChat(true)} />
              <Hero onStartChat={() => setShowChat(true)} />
              <Features />
              <UseCases />
              <Testimonials />
              <Footer />
            </>
          } />
        </Routes>
        {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      </div>
    </Router>
  );
}

export default App
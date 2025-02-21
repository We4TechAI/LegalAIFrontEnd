import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const contracts = [
  {
    title: "General Contractor Agreement",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    description: "This agreement is between the general contractor (GC) and the owner/developer. The GC agrees to perform certain services for the developer, including construction management, design, supervision, inspection, and completion of the project."
  },
  {
    title: "Subcontractor Agreement",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    description: "A subcontractor is a business entity who enters into a contract with the GC to perform some portion of the GC's duties under the original contract. A subcontractor does not have any contractual relationship with the developer."
  },
  {
    title: "Construction Management Services Agreement",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    description: "The construction manager (CM) is hired by the developer to oversee the entire project. The CM manages the project from start to finish and ensures that the project is completed according to plan."
  },
  {
    title: "Design/Build Agreement",
    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&q=80&w=800",
    description: "In this type of agreement, the developer hires a professional architect or engineer to create a set of plans for the project. The developer then hires a contractor to build the project according to the plans."
  },
  {
    title: "Owner Representative Agreement",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
    description: "An owner representative is someone who represents the interests of the owner in the project. An owner representative is often a real estate agent who helps sell the property."
  },
  {
    title: "Lease Agreement",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: "A lease is a written document that outlines the rights and responsibilities of both parties involved in the transaction. The landlord gives the tenant permission to use his or her land."
  },
  {
    title: "License Agreement",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    description: "A license is similar to a lease agreement. However, instead of giving the tenant permission to use the land, the landlord gives the tenant permission for a specific product or service."
  },
  {
    title: "Non-Disclosure Agreement (NDA)",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    description: "A non-disclosure agreement (NDA) is a type of contract between two parties where one party agrees not to disclose information about the other party without permission."
  },
  {
    title: "Confidentiality Agreement (CA)",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    description: "A confidentiality agreement (CA) is similar to an NDA except that it does not require disclosure of confidential information. A CA may be used to protect proprietary information."
  },
  {
    title: "Patent License Agreement (PLA)",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=800",
    description: "Patent licenses are contracts that allow patent holders to grant others the right to use their patents. Patents are granted by the United States Patent and Trademark Office (USPTO)."
  },
  {
    title: "Software License Agreement (SLA)",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    description: "Software license agreements are contracts that give software developers the right to distribute their software. Developers can create software using any programming language."
  },
  {
    title: "Technology Transfer Agreement (TTA)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    description: "Technology transfer agreements are contracts that allow universities to share technology with private companies. Universities can receive compensation for sharing their technologies."
  },
  {
    title: "Research Collaboration Agreement (RCA)",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    description: "Research collaboration agreements are contracts that allow researchers to work together on projects. Researchers can collaborate on projects to develop new products."
  },
  {
    title: "Data Sharing Agreement (DSA)",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Data sharing agreements are contracts that allow data providers to share their data with third parties. Data providers can provide data to researchers, scientists, and other organizations."
  }
];

export function ContractDrafting() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contract Drafting Templates</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore our comprehensive collection of contract templates for various business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contracts.map((contract, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={contract.image} 
                alt={contract.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {contract.title}
                </h3>
                <p className="text-gray-600">
                  {contract.description}
                </p>
                <button 
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  onClick={() => {
                    // TODO: Implement contract template viewer
                    alert('Contract template viewer coming soon!');
                  }}
                >
                  View Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ArrowLeft, Search, BookOpen, Scale, Clock, Filter, ArrowUpDown, FileText, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Demo data for legal research
const legalResources = [
  {
    id: 1,
    title: "Smith v. Tech Corp (2024)",
    type: "Case Law",
    jurisdiction: "Federal Circuit",
    category: "Intellectual Property",
    summary: "Landmark case establishing new precedent for AI-generated intellectual property rights.",
    relevance: 98,
    citations: 45,
    date: "2024-12-15",
    source: "Federal Reporter",
    fullText: "https://example.com/case/smith-v-tech",
    keyPoints: [
      "AI-generated works can be protected under copyright law",
      "Human involvement must be substantial and creative",
      "Automated processes alone do not qualify for protection"
    ]
  },
  {
    id: 2,
    title: "Digital Privacy Act of 2024",
    type: "Statute",
    jurisdiction: "Federal",
    category: "Privacy Law",
    summary: "Comprehensive legislation governing data privacy rights and corporate responsibilities in the digital age.",
    relevance: 95,
    citations: 120,
    date: "2024-06-01",
    source: "U.S. Code",
    fullText: "https://example.com/statute/dpa-2024",
    keyPoints: [
      "Mandatory data breach notifications within 48 hours",
      "Enhanced penalties for privacy violations",
      "New consumer rights for data access and deletion"
    ]
  },
  {
    id: 3,
    title: "Johnson & Associates v. DataCorp",
    type: "Case Law",
    jurisdiction: "State Supreme Court",
    category: "Data Protection",
    summary: "Defines scope of corporate liability in data breach cases and establishes damages framework.",
    relevance: 92,
    citations: 78,
    date: "2024-09-20",
    source: "State Reporter",
    fullText: "https://example.com/case/johnson-v-datacorp",
    keyPoints: [
      "Establishes per-record damages calculation",
      "Defines 'reasonable' security measures",
      "Sets standard for proving actual harm"
    ]
  },
  {
    id: 4,
    title: "Autonomous Vehicle Safety Regulations",
    type: "Regulation",
    jurisdiction: "Federal",
    category: "Transportation Law",
    summary: "Comprehensive regulatory framework for testing and deploying autonomous vehicles.",
    relevance: 88,
    citations: 65,
    date: "2024-03-15",
    source: "Code of Federal Regulations",
    fullText: "https://example.com/reg/av-safety",
    keyPoints: [
      "Safety testing requirements",
      "Liability framework for accidents",
      "Data recording and sharing mandates"
    ]
  },
  {
    id: 5,
    title: "Cryptocurrency Trading Guidelines",
    type: "Administrative Guidance",
    jurisdiction: "Federal",
    category: "Financial Law",
    summary: "SEC guidance on cryptocurrency trading platforms and token classifications.",
    relevance: 85,
    citations: 42,
    date: "2024-08-01",
    source: "SEC Releases",
    fullText: "https://example.com/guidance/crypto",
    keyPoints: [
      "Token classification criteria",
      "Registration requirements",
      "Consumer protection measures"
    ]
  }
];

const categories = ["All", "Intellectual Property", "Privacy Law", "Data Protection", "Transportation Law", "Financial Law"];
const jurisdictions = ["All", "Federal", "State Supreme Court", "Federal Circuit"];
const resourceTypes = ["All", "Case Law", "Statute", "Regulation", "Administrative Guidance"];
const sortOptions = ["Relevance", "Most Cited", "Newest", "Oldest"];

export function LegalResearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("Relevance");

  const filteredAndSortedResources = legalResources
    .filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      const matchesJurisdiction = selectedJurisdiction === "All" || resource.jurisdiction === selectedJurisdiction;
      const matchesType = selectedType === "All" || resource.type === selectedType;
      return matchesSearch && matchesCategory && matchesJurisdiction && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Relevance":
          return b.relevance - a.relevance;
        case "Most Cited":
          return b.citations - a.citations;
        case "Newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        default:
          return 0;
      }
    });

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

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Research Assistant</h1>
          <p className="text-xl text-gray-600">
            Access and analyze relevant case law, statutes, and regulations with AI-powered insights
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cases, statutes, or regulations..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Resource Type Filter */}
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {resourceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Jurisdiction Filter */}
            <div className="relative">
              <Scale className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                value={selectedJurisdiction}
                onChange={(e) => setSelectedJurisdiction(e.target.value)}
              >
                {jurisdictions.map(jurisdiction => (
                  <option key={jurisdiction} value={jurisdiction}>{jurisdiction}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredAndSortedResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {resource.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {resource.jurisdiction}
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.summary}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {resource.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(resource.date).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-medium">{resource.citations}</span> citations
                    </div>
                    <div>
                      <span className="font-medium">{resource.relevance}%</span> relevance
                    </div>
                    <div>{resource.source}</div>
                  </div>
                </div>
                
                <button 
                  className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    // TODO: Implement full text view
                    alert('Full text view coming soon!');
                  }}
                >
                  View Full Text
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredAndSortedResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No legal resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
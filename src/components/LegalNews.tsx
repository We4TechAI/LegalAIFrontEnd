import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Calendar, BookOpen, Globe, ArrowUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Demo data for legal news
const legalNews = [
  {
    id: 1,
    title: "Supreme Court Rules on Digital Privacy Case",
    category: "Privacy Law",
    jurisdiction: "Federal",
    date: "2025-03-15",
    source: "Legal Times",
    summary: "The Supreme Court established new guidelines for digital privacy rights in the era of AI and machine learning.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "New Cryptocurrency Regulations Enacted",
    category: "Financial Law",
    jurisdiction: "International",
    date: "2025-03-14",
    source: "Global Legal Review",
    summary: "Major financial regulators have agreed on a unified framework for cryptocurrency oversight.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Environmental Law Amendment Passes",
    category: "Environmental Law",
    jurisdiction: "State",
    date: "2025-03-13",
    source: "Green Legal Journal",
    summary: "Landmark environmental protection bill introduces stricter penalties for corporate polluters.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "AI Liability Framework Proposed",
    category: "Technology Law",
    jurisdiction: "Federal",
    date: "2025-03-12",
    source: "Tech Law Today",
    summary: "New legislation aims to establish clear liability guidelines for AI-related incidents.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Healthcare Data Privacy Update",
    category: "Healthcare Law",
    jurisdiction: "Federal",
    date: "2025-03-11",
    source: "Health Law Weekly",
    summary: "HHS releases new guidelines for healthcare data protection in telemedicine.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = ["All", "Privacy Law", "Financial Law", "Environmental Law", "Technology Law", "Healthcare Law"];
const jurisdictions = ["All", "Federal", "State", "International"];
const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

export function LegalNews() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredAndSortedNews = legalNews
    .filter(news => {
      const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          news.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
      const matchesJurisdiction = selectedJurisdiction === "All" || news.jurisdiction === selectedJurisdiction;
      return matchesSearch && matchesCategory && matchesJurisdiction;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "A-Z":
          return a.title.localeCompare(b.title);
        case "Z-A":
          return b.title.localeCompare(a.title);
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal News and Updates</h1>
          <p className="text-xl text-gray-600">
            Stay informed with the latest legal developments and updates
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Jurisdiction Filter */}
            <div className="relative">
              <Globe className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAndSortedNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {news.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {news.jurisdiction}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                  <span>{news.source}</span>
                </div>
                <button 
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  onClick={() => {
                    // TODO: Implement full article view
                    alert('Full article view coming soon!');
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
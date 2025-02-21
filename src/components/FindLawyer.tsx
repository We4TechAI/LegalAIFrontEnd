import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Dummy data for lawyers
const lawyers = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    specialization: "Corporate Law",
    experience: 12,
    rating: 4.8,
    fees: "250-500",
    location: "New York",
    description: "Specializing in corporate law with extensive experience in mergers and acquisitions."
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    specialization: "Real Estate Law",
    experience: 8,
    rating: 4.6,
    fees: "200-400",
    location: "Los Angeles",
    description: "Expert in real estate transactions and property law matters."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    specialization: "Family Law",
    experience: 15,
    rating: 4.9,
    fees: "300-600",
    location: "Chicago",
    description: "Dedicated family law attorney with expertise in divorce and custody cases."
  },
  {
    id: 4,
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    specialization: "Criminal Law",
    experience: 20,
    rating: 4.7,
    fees: "350-700",
    location: "Boston",
    description: "Experienced criminal defense attorney with a strong track record."
  },
  {
    id: 5,
    name: "Lisa Patel",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    specialization: "Intellectual Property",
    experience: 10,
    rating: 4.5,
    fees: "275-550",
    location: "San Francisco",
    description: "IP lawyer specializing in patent and trademark law."
  }
];

const specializations = ["All", "Corporate Law", "Real Estate Law", "Family Law", "Criminal Law", "Intellectual Property"];
const experienceLevels = ["All", "0-5 years", "5-10 years", "10+ years", "15+ years", "20+ years"];
const feeRanges = ["All", "200-400", "400-600", "600-800", "800+"];
const locations = ["New York", "Los Angeles", "Chicago", "Boston", "San Francisco", "Miami", "Seattle", "Austin", "Denver", "Washington DC"];

export function FindLawyer() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [filters, setFilters] = useState({
    specialization: "All",
    experience: "All",
    fees: "All",
    location: "All"
  });

  const filteredLocations = locations.filter(loc => 
    loc.toLowerCase().includes(locationInput.toLowerCase())
  );

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization = filters.specialization === "All" || lawyer.specialization === filters.specialization;
    const matchesLocation = filters.location === "All" || lawyer.location === filters.location;
    const matchesFees = filters.fees === "All" || lawyer.fees === filters.fees;
    const matchesExperience = filters.experience === "All" || 
                             (filters.experience === "0-5 years" && lawyer.experience < 5) ||
                             (filters.experience === "5-10 years" && lawyer.experience >= 5 && lawyer.experience < 10) ||
                             (filters.experience === "10+ years" && lawyer.experience >= 10) ||
                             (filters.experience === "15+ years" && lawyer.experience >= 15) ||
                             (filters.experience === "20+ years" && lawyer.experience >= 20);

    return matchesSearch && matchesSpecialization && matchesLocation && matchesFees && matchesExperience;
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Lawyer</h1>
          <p className="text-xl text-gray-600">
            Connect with experienced lawyers who can help with your legal needs
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, specialization, or keywords..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={filters.specialization}
              onChange={(e) => setFilters({...filters, specialization: e.target.value})}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {specializations.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>

            <select
              value={filters.experience}
              onChange={(e) => setFilters({...filters, experience: e.target.value})}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {experienceLevels.map(exp => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>

            <select
              value={filters.fees}
              onChange={(e) => setFilters({...filters, fees: e.target.value})}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {feeRanges.map(fee => (
                <option key={fee} value={fee}>{fee === "All" ? "All Fee Ranges" : `$${fee}/hr`}</option>
              ))}
            </select>

            <div className="relative">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={locationInput}
                  onChange={(e) => {
                    setLocationInput(e.target.value);
                    setShowLocationSuggestions(true);
                    setFilters({...filters, location: e.target.value || "All"});
                  }}
                  onFocus={() => setShowLocationSuggestions(true)}
                />
              </div>
              {showLocationSuggestions && locationInput && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredLocations.map((location) => (
                    <div
                      key={location}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setLocationInput(location);
                        setFilters({...filters, location: location});
                        setShowLocationSuggestions(false);
                      }}
                    >
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        {location}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLawyers.map((lawyer) => (
            <div key={lawyer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={lawyer.image} 
                alt={lawyer.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{lawyer.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{lawyer.specialization}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">{lawyer.rating}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600">{lawyer.experience} years</span>
                </div>
                <p className="text-gray-600 mb-4">{lawyer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">${lawyer.fees}/hr</span>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      // TODO: Implement booking functionality
                      alert('Booking functionality coming soon!');
                    }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
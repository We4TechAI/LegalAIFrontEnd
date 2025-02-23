import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, ChevronDown, AlertCircle, CheckCircle, Clock, Scale, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Demo questionnaire structure
const questionnaire = {
  personalInfo: {
    title: "Personal Information",
    fields: [
      { id: "fullName", label: "Full Name", type: "text", required: true },
      { id: "email", label: "Email Address", type: "email", required: true },
      { id: "phone", label: "Phone Number", type: "tel", required: true },
      { id: "address", label: "Address", type: "text", required: true }
    ]
  },
  caseDetails: {
    title: "Case Information",
    fields: [
      {
        id: "caseType",
        label: "Type of Legal Matter",
        type: "select",
        required: true,
        options: [
          "Personal Injury",
          "Family Law",
          "Criminal Defense",
          "Business Dispute",
          "Employment Issue",
          "Real Estate",
          "Intellectual Property",
          "Other"
        ]
      },
      {
        id: "urgency",
        label: "Urgency Level",
        type: "select",
        required: true,
        options: ["Immediate", "Within 48 hours", "Within a week", "Not urgent"]
      },
      {
        id: "incidentDate",
        label: "Date of Incident/Issue",
        type: "date",
        required: true
      },
      {
        id: "description",
        label: "Detailed Description",
        type: "textarea",
        required: true,
        placeholder: "Please provide as much detail as possible about your situation..."
      }
    ]
  },
  additionalInfo: {
    title: "Additional Details",
    fields: [
      {
        id: "documents",
        label: "Related Documents",
        type: "file",
        multiple: true,
        accept: ".pdf,.doc,.docx",
        required: false
      },
      {
        id: "preferredContact",
        label: "Preferred Contact Method",
        type: "select",
        required: true,
        options: ["Email", "Phone", "Text"]
      },
      {
        id: "availability",
        label: "Best Time for Contact",
        type: "select",
        required: true,
        options: ["Morning", "Afternoon", "Evening"]
      }
    ]
  }
};

// Demo AI analysis results
const demoAnalysis = {
  caseViability: 85,
  urgencyLevel: "High",
  complexityLevel: "Medium",
  estimatedTimeframe: "3-6 months",
  recommendedPracticeAreas: ["Personal Injury", "Insurance Law"],
  suggestedDocuments: [
    "Medical Records",
    "Insurance Policy Documents",
    "Accident Report",
    "Witness Statements"
  ],
  keyIssues: [
    "Liability determination required",
    "Multiple parties involved",
    "Insurance coverage disputes likely",
    "Potential for substantial damages"
  ],
  nextSteps: [
    "Schedule immediate consultation with personal injury attorney",
    "Gather and preserve evidence",
    "Contact insurance providers",
    "Begin documentation of medical expenses"
  ],
  relevantCases: [
    {
      title: "Smith v. Insurance Co.",
      relevance: "92%",
      summary: "Similar liability dispute with favorable outcome"
    },
    {
      title: "Johnson v. City",
      relevance: "87%",
      summary: "Established precedent for multiple party liability"
    }
  ]
};

export function ClientIntake() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("personalInfo");
  const [formData, setFormData] = useState({});
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (sectionId: string, fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldId]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowAnalysis(true);
    }, 2000);
  };

  const renderField = (section: string, field: any) => {
    const value = formData[section]?.[field.id] || "";

    switch (field.type) {
      case "select":
        return (
          <select
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(section, field.id, e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={field.required}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(section, field.id, e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      case "file":
        return (
          <input
            type="file"
            id={field.id}
            multiple={field.multiple}
            accept={field.accept}
            onChange={(e) => handleInputChange(section, field.id, e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={field.required}
          />
        );
      default:
        return (
          <input
            type={field.type}
            id={field.id}
            value={value}
            onChange={(e) => handleInputChange(section, field.id, e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={field.required}
          />
        );
    }
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Intake & Case Assessment</h1>
          <p className="text-xl text-gray-600">
            Complete our smart questionnaire for an AI-powered analysis of your case
          </p>
        </div>

        {!showAnalysis ? (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {Object.entries(questionnaire).map(([sectionId, section]: [string, any]) => (
                <div key={sectionId} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.fields.map((field: any) => (
                      <div key={field.id} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        {renderField(sectionId, field)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Submit for Analysis
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                    <Scale className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Case Viability</h3>
                  <p className="text-2xl font-bold text-green-600">{demoAnalysis.caseViability}%</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Urgency Level</h3>
                  <p className="text-2xl font-bold text-red-600">{demoAnalysis.urgencyLevel}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Complexity</h3>
                  <p className="text-2xl font-bold text-blue-600">{demoAnalysis.complexityLevel}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Timeframe</h3>
                  <p className="text-2xl font-bold text-purple-600">{demoAnalysis.estimatedTimeframe}</p>
                </div>
              </div>
            </div>

            {/* Key Issues & Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Issues Identified</h3>
                <ul className="space-y-3">
                  {demoAnalysis.keyIssues.map((issue, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Recommended Next Steps</h3>
                <ul className="space-y-3">
                  {demoAnalysis.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Required Documents & Similar Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  {demoAnalysis.suggestedDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Similar Cases</h3>
                <div className="space-y-4">
                  {demoAnalysis.relevantCases.map((case_, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{case_.title}</h4>
                        <span className="text-green-600 font-medium">{case_.relevance} match</span>
                      </div>
                      <p className="text-gray-600 text-sm">{case_.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAnalysis(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Edit Information
              </button>
              <button
                onClick={() => navigate('/find-lawyer')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                Find Matching Lawyer
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
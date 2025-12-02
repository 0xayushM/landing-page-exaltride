'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import policiesData from '@/data/policies.json';
import { Shield, FileText, Truck, RotateCcw, Award, CreditCard } from 'lucide-react';

interface PolicySection {
  heading: string;
  content: string;
}

interface Policy {
  id: string;
  title: string;
  icon: string;
  sections: PolicySection[];
}

interface PoliciesData {
  lastUpdated: string;
  policies: Policy[];
}

export default function PoliciesPage() {
  const data = policiesData as PoliciesData;
  const [selectedPolicy, setSelectedPolicy] = useState<string>(data.policies[0].id);

  // Handle hash navigation on mount and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      if (hash && data.policies.some(p => p.id === hash)) {
        setSelectedPolicy(hash);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [data.policies]);

  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'shield':
        return <Shield className={iconClass} />;
      case 'file-text':
        return <FileText className={iconClass} />;
      case 'truck':
        return <Truck className={iconClass} />;
      case 'rotate-ccw':
        return <RotateCcw className={iconClass} />;
      case 'award':
        return <Award className={iconClass} />;
      case 'credit-card':
        return <CreditCard className={iconClass} />;
      default:
        return <FileText className={iconClass} />;
    }
  };

  const currentPolicy = data.policies.find(p => p.id === selectedPolicy) || data.policies[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetEarlyAccess={() => {}} />
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-[#001d4a] to-[#003AAD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Policies
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Everything you need to know about shopping with ExaltRide
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: {data.lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Policy Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Quick Navigation
              </h2>
              {data.policies.map((policy) => (
                <button
                  key={policy.id}
                  onClick={() => setSelectedPolicy(policy.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    selectedPolicy === policy.id
                      ? 'bg-[#003AAD] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={selectedPolicy === policy.id ? 'text-white' : 'text-[#003AAD]'}>
                    {getIcon(policy.icon)}
                  </span>
                  <span className="font-medium text-left text-sm">{policy.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content - Policy Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              {/* Policy Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-[#003AAD]">
                  {getIcon(currentPolicy.icon)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#001d4a]">
                    {currentPolicy.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Please read this policy carefully
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8">
                {currentPolicy.sections.map((section, index) => (
                  <div key={index} className="scroll-mt-24">
                    <h3 className="text-xl font-semibold text-[#001d4a] mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-blue-100 text-[#003AAD] rounded-lg flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-10">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#001d4a] mb-2">
                    Have Questions?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our {currentPolicy.title.toLowerCase()}, please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:support@exaltride.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#003AAD] text-white font-semibold rounded-lg hover:bg-[#002d8a] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Support
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#003AAD] text-[#003AAD] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Policies */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#001d4a] mb-4">
                Related Policies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.policies
                  .filter(p => p.id !== selectedPolicy)
                  .slice(0, 4)
                  .map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => setSelectedPolicy(policy.id)}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-[#003AAD] transition-all text-left"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#003AAD] flex-shrink-0">
                        {getIcon(policy.icon)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {policy.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Click to view details
                        </p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

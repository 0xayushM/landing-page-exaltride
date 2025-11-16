'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FileText, Shield, MapPin, DollarSign, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';

const carModels = [
  'Maruti Suzuki Swift',
  'Hyundai Creta',
  'Tata Nexon',
  'Mahindra Scorpio',
  'Honda City',
  'Kia Seltos',
  'Toyota Fortuner',
  'Maruti Suzuki Alto',
  'Hyundai i20',
  'Tata Harrier',
  'Other',
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Track visitor on page load
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get location from IP
        const locationResponse = await fetch('https://ipapi.co/json/');
        const locationData = await locationResponse.json();

        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: {
              city: locationData.city,
              region: locationData.region,
              country: locationData.country_name,
              ip: locationData.ip,
            },
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error('Failed to track visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✓ Successfully joined! Check your email for details.');
        setFormData({ name: '', email: '', phone: '', carModel: '' });
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to submit. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f2847] z-50 border-b border-[#1a3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Exaltride" width={200} height={100} className="h-12 w-auto" />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0f2847] text-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Your Car Deserves Better Accessories.<br />
              You Deserve a Better Experience.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl">
              Join thousands of car owners waiting for India's new aftermarket marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#join-form"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#0f2847] bg-[#fbbf24] rounded-lg hover:bg-[#f59e0b] transition-colors"
              >
                Get Early Access + Launch Credits
              </a>
              <a
                href="https://vendor.exaltride.com"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0f2847] transition-colors"
              >
                Become a Vendor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exaltride Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#0f2847]">
            WHY EXALTRIDE?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#0f2847] rounded-lg flex items-center justify-center mb-3">
                <FileText size={28} className="text-[#fbbf24]" />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#0f2847]">Real Information</h3>
              <p className="text-gray-600 text-xs">
                No confusing specs. Just honest product clarity.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#0f2847] rounded-lg flex items-center justify-center mb-3">
                <Shield size={28} className="text-[#fbbf24]" />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#0f2847]">Verified Sellers Only</h3>
              <p className="text-gray-600 text-xs">
                We work only with trusted vendors.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#0f2847] rounded-lg flex items-center justify-center mb-3">
                <MapPin size={28} className="text-[#fbbf24]" />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#0f2847]">Availability Across India</h3>
              <p className="text-gray-600 text-xs">
                Even for older models and rare accessories.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#0f2847] rounded-lg flex items-center justify-center mb-3">
                <DollarSign size={28} className="text-[#fbbf24]" />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#0f2847]">Transparent Pricing</h3>
              <p className="text-gray-600 text-xs">
                No negotiation games. No random quotes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
              <div className="w-14 h-14 bg-[#0f2847] rounded-lg flex items-center justify-center mb-3">
                <MessageSquare size={28} className="text-[#fbbf24]" />
              </div>
              <h3 className="text-base font-bold mb-1 text-[#0f2847]">Reviews From Real Owners</h3>
              <p className="text-gray-600 text-xs">
                Not manipulated. Not faked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Date & Form Section */}
      <section id="join-form" className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Launch Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2847]">
                Launching December 14, 2025.
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Be the first to shop.
              </p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0f2847]">
                Join Early Access.
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-semibold">Made for Indian car owners.</p>
                <p className="font-semibold">Built by people who've lived the same problems.</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                  />
                </div>

                <div className="relative">
                  <select
                    required
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] appearance-none bg-white"
                  >
                    <option value="">Select Your Car Model</option>
                    {carModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-sm font-semibold text-[#0f2847] bg-[#fbbf24] rounded-lg hover:bg-[#f59e0b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Join Early Access →'}
                </button>

                {submitMessage && (
                  <p className={`text-center text-sm font-semibold ${submitMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2847] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <Image src="/logo.png" alt="Exaltride" width={150} height={45} className="h-10 w-auto mx-auto mb-3" />
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Made for Indian car owners. Built by people who've lived the same problems.</p>
          </div>
          <div className="mt-4 text-gray-400 text-xs">
            <p>&copy; 2025 Exaltride. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

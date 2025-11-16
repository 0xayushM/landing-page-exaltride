'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    <section id="join-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Launch Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#003AAD]">
              Launching December 14, 2025.
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Be the first to shop.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#003AAD]">
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
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder:text-gray-500"
                />
              </div>

              <div className="relative">
                <select
                  required
                  value={formData.carModel}
                  onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                  className={`w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbbf24] appearance-none bg-white ${formData.carModel ? 'text-gray-900' : 'text-gray-500'}`}
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
                className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-lg hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
  );
}

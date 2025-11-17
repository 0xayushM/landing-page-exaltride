'use client';

import { useState, useEffect } from 'react';
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
  const [customCarModel, setCustomCarModel] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-12-14T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const finalCarModel = formData.carModel === 'Other' ? customCarModel : formData.carModel;
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          carModel: finalCarModel,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✓ Successfully joined! Check your email for details.');
        setFormData({ name: '', email: '', phone: '', carModel: '' });
        setCustomCarModel('');
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
    <section id="join-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#002d5a] to-[#001d4a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Launching Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#001d4a] px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Launching Soon
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-regular mb-4">
          Launching December 14, 2025.
        </h2>
        <p className="text-lg text-blue-100 mb-12">
          Be the first to shop.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-16">
          <div className="bg-white text-[#001d4a] rounded-2xl p-4 sm:p-6">
            <div className="text-4xl sm:text-5xl font-regular mb-1">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm text-gray-600">Days</div>
          </div>
          <div className="bg-white text-[#001d4a] rounded-2xl p-4 sm:p-6">
            <div className="text-4xl sm:text-5xl font-regular mb-1">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm text-gray-600">Hours</div>
          </div>
          <div className="bg-white text-[#001d4a] rounded-2xl p-4 sm:p-6">
            <div className="text-4xl sm:text-5xl font-regular mb-1">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm text-gray-600">Minutes</div>
          </div>
          <div className="bg-white text-[#001d4a] rounded-2xl p-4 sm:p-6">
            <div className="text-4xl sm:text-5xl font-regular mb-1">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-xs sm:text-sm text-gray-600">Seconds</div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 text-gray-900 rounded-3xl p-8 sm:p-10 max-w-lg mx-auto shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#003AAD] rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#FDB913]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#001d4a]">
            Join Early Access
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Made for Indian car owners.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Built by people who've lived the same problems.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#003AAD] px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              ₹500* Credits
            </div>
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-green-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              First Access
            </div>
            <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-purple-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              VIP Support
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                Your Car Model
              </label>
              <div className="relative">
                <select
                  id="carModel"
                  required
                  value={formData.carModel}
                  onChange={(e) => {
                    setFormData({ ...formData, carModel: e.target.value });
                    if (e.target.value !== 'Other') {
                      setCustomCarModel('');
                    }
                  }}
                  className={`w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] focus:border-transparent appearance-none ${formData.carModel ? 'text-gray-900' : 'text-gray-400'}`}
                >
                  <option value="">Select your car model</option>
                  {carModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {formData.carModel === 'Other' && (
              <div>
                <input
                  type="text"
                  placeholder="Enter your car model"
                  required
                  value={customCarModel}
                  onChange={(e) => setCustomCarModel(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] focus:border-transparent placeholder:text-gray-400"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3.5 text-base font-semibold text-[#001d4a] bg-[#FDB913] rounded-xl hover:bg-[#f5b400] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : (
                <>
                  Join Early Access Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Your data is 100% secure and encrypted
            </div>

            {submitMessage && (
              <p className={`text-center text-sm font-semibold ${submitMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

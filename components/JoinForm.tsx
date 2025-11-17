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
    <section id="join-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#003AAD] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Launching Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#003AAD] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Launching Soon
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Launching December 14, 2025.
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Be the first to shop.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-white text-[#003AAD] rounded-2xl p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Days</div>
          </div>
          <div className="bg-white text-[#003AAD] rounded-2xl p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Hours</div>
          </div>
          <div className="bg-white text-[#003AAD] rounded-2xl p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Minutes</div>
          </div>
          <div className="bg-white text-[#003AAD] rounded-2xl p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Seconds</div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#003AAD]">
            Join Early Access.
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Made for Indian car owners.<br />
            Built by people who've lived the same problems.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] placeholder:text-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] placeholder:text-gray-500"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] placeholder:text-gray-500"
              />
            </div>

            <div className="relative">
              <select
                required
                value={formData.carModel}
                onChange={(e) => {
                  setFormData({ ...formData, carModel: e.target.value });
                  if (e.target.value !== 'Other') {
                    setCustomCarModel('');
                  }
                }}
                className={`w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] appearance-none ${formData.carModel ? 'text-gray-900' : 'text-gray-500'}`}
              >
                <option value="">Select Your Car Model</option>
                {carModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            {formData.carModel === 'Other' && (
              <div>
                <input
                  type="text"
                  placeholder="Enter your car model"
                  required
                  value={customCarModel}
                  onChange={(e) => setCustomCarModel(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003AAD] placeholder:text-gray-500"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 text-base font-semibold text-[#003AAD] bg-[#FDB913] rounded-lg hover:bg-[#f5b400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join Early Access →'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Get ₹500 launch credits + exclusive discounts
            </p>

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

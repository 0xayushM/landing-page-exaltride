'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'When will ExaltRide officially launch?',
      answer: 'ExaltRide is officially launching on December 14, 2025. Early access members will get exclusive benefits and launch credits on day one.',
    },
    {
      question: 'Is this only for new cars?',
      answer: 'Not at all! ExaltRide caters to all car owners - whether you drive a brand new model or a vintage classic. We have accessories and parts for cars of all ages and models.',
    },
    {
      question: 'How do I know the products will fit my car?',
      answer: 'Our platform uses advanced car compatibility matching. Simply select your car model, and we\'ll only show you products that are verified to fit. Each product listing includes detailed compatibility information.',
    },
    {
      question: 'What are the launch credits?',
      answer: 'Early access members receive upto ₹500* in launch credits that can be used towards their first purchase on ExaltRide. These credits will be automatically applied to your account on launch day.',
    },
    {
      question: 'Can I sell on ExaltRide?',
      answer: 'Yes! We welcome verified vendors to sell on our platform. Visit our vendor portal to apply.',
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Not yet, but we\'re already building it, and it will be launching soon both on iOS and Android!',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3 text-[#001d4a]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about ExaltRide
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-medium text-[#001d4a] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                  {index === 2 && (
                    <p className="text-xs text-gray-400 mt-2">
                      *on shopping above ₹2500
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

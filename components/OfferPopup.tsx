'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, Clock, Truck, Wrench, Gift } from 'lucide-react';
import Image from 'next/image';

interface OfferPopupProps {
  onGetEarlyAccess: () => void;
}

export default function OfferPopup({ onGetEarlyAccess }: OfferPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [triggersUsed, setTriggersUsed] = useState<Set<string>>(new Set());
  const [clickCount, setClickCount] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);

  // Timer effect - runs when popup is closed and timer hasn't been used
  useEffect(() => {
    if (showCount >= 3 || isVisible || triggersUsed.has('timer') || hasClaimed) return;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
      setShowCount(prev => prev + 1);
      setTriggersUsed(prev => new Set(prev).add('timer'));
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [showCount, isVisible, triggersUsed, hasClaimed]);

  // Scroll effect - persistent listener
  useEffect(() => {
    if (showCount >= 3 || triggersUsed.has('scroll') || hasClaimed) return;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
      
      if (hasScrolled && !isVisible && window.scrollY > 100) {
        setIsVisible(true);
        setShowCount(prev => prev + 1);
        setTriggersUsed(prev => new Set(prev).add('scroll'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCount, isVisible, triggersUsed, hasScrolled, hasClaimed]);

  // Click effect - persistent listener
  useEffect(() => {
    if (showCount >= 3 || triggersUsed.has('click') || hasClaimed) return;

    const handleClick = () => {
      setClickCount(prev => {
        const newCount = prev + 1;
        if (newCount >= 2 && !isVisible) {
          setIsVisible(true);
          setShowCount(prevShow => prevShow + 1);
          setTriggersUsed(prevTriggers => new Set(prevTriggers).add('click'));
          return 0;
        }
        return newCount;
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [showCount, isVisible, triggersUsed, clickCount, hasClaimed]);

  const handleClose = () => {
    setIsVisible(false);
    setClickCount(0);
    setHasScrolled(false); // Reset scroll state
  };

  const handleClaim = () => {
    setIsVisible(false);
    setHasClaimed(true); // Mark as claimed to stop future popups
    onGetEarlyAccess();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative max-w-4xl h-[70vh] bg-[#002B5C] rounded-3xl shadow-2xl overflow-y-auto pointer-events-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all group"
          >
            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            {/* Left Side - Content */}
            <div className="p-4 md:p-6 flex flex-col justify-center relative z-10">
              {/* Limited Time Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#FDB913]/20 border border-[#FDB913] text-[#FDB913] px-3 py-1.5 rounded-full text-xs font-bold mb-3 w-fit">
                <Sparkles className="w-3 h-3" />
                LIMITED TIME OFFER
              </div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Get <span className="text-[#FDB913]">₹500* Free Credits</span>
              </h2>
              <p className="text-gray-300 text-xs md:text-sm mb-4">
                Sign up now and unlock instant rewards + premium benefits
              </p>

              {/* Welcome Bonus Card */}
              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-2 border-[#FDB913] rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FDB913] flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[#002B5C]" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-xs mb-1">WELCOME BONUS</p>
                  <div className="text-3xl font-bold text-[#FDB913] mb-1">₹500*</div>
                  <p className="text-[#FDB913] text-xs flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Credited instantly upon signup
                    <Sparkles className="w-3 h-3" />
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-[#001d4a]/50 border border-white/10 rounded-lg p-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913] flex items-center justify-center mb-1.5">
                    <Clock className="w-4 h-4 text-[#002B5C]" />
                  </div>
                  <p className="text-white font-semibold text-xs">24 Hour Early Access</p>
                  <p className="text-gray-400 text-xs mt-0.5">First to shop new arrivals</p>
                </div>

                <div className="bg-[#001d4a]/50 border border-white/10 rounded-lg p-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913] flex items-center justify-center mb-1.5">
                    <Truck className="w-4 h-4 text-[#002B5C]" />
                  </div>
                  <p className="text-white font-semibold text-xs">Priority Delivery</p>
                  <p className="text-gray-400 text-xs mt-0.5">Skip the queue in early access</p>
                </div>

                <div className="bg-[#001d4a]/50 border border-white/10 rounded-lg p-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913] flex items-center justify-center mb-1.5">
                    <Wrench className="w-4 h-4 text-[#002B5C]" />
                  </div>
                  <p className="text-white font-semibold text-xs">Free Installation*</p>
                  <p className="text-gray-400 text-xs mt-0.5">First product purchased</p>
                </div>

                <div className="bg-[#001d4a]/50 border border-white/10 rounded-lg p-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913] flex items-center justify-center mb-1.5">
                    <Gift className="w-4 h-4 text-[#002B5C]" />
                  </div>
                  <p className="text-white font-semibold text-xs">Win Merchandise</p>
                  <p className="text-gray-400 text-xs mt-0.5">Worth up to ₹1,999</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleClaim}
                className="w-full bg-gradient-to-r from-[#FDB913] to-[#f5a800] text-[#002B5C] font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#FDB913]/50 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 group"
              >
                Claim Your
                <span className="inline-flex items-center justify-center px-3 py-0.5 bg-[#002B5C] text-[#FDB913] rounded-lg font-bold text-sm">
                  ₹500*
                </span>
                Free
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Fine Print */}
              <div className="mt-2 text-center">
                <p className="text-gray-400 text-xs">No payment required • Instant signup</p>
                <p className="text-gray-500 text-xs mt-0.5">*If installation location comes under serviceable pincodes</p>
              </div>
            </div>

            {/* Gradient Overlay Between Sections */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <div className="absolute top-0 bottom-0 left-1/2 w-32 bg-gradient-to-r from-[#002B5C] via-[#002B5C]/50 to-transparent -translate-x-1/2 z-0"></div>
            </div>

            {/* Right Side - Image (Desktop Only) */}
            <div className="hidden md:block relative h-[70vh] bg-gradient-to-br from-[#002B5C] to-[#001d4a]">
              <Image
                src="/popup.png"
                alt="Offer"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

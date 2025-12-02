'use client';

import { Sparkles, Shield, Users, Award, Package, ShoppingCart, Truck, Wrench, Gift, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onGetEarlyAccess: () => void;
}

export default function HeroSection({ onGetEarlyAccess }: HeroSectionProps) {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 8,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-14T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="relative min-h-[90vh] pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/hero_image.jpeg)',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#001d4a]/85" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(90vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#001d4a] px-4 py-2.5 rounded-lg text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Launching December 14, 2025
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              <span className="font-light block mb-2">Your Car Deserves</span>
              <span className="font-semibold text-[#FDB913]">Better<br />Accessories.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 max-w-xl font-light leading-relaxed">
              Join thousands of car owners waiting for India's most transparent aftermarket marketplace. No confusing specs, no random quotes - just honest products and verified sellers.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-semibold">10,000+ Pre-</div>
                  <div className="text-sm text-gray-300">Registrations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-semibold">100+ Verified</div>
                  <div className="text-sm text-gray-300">Vendors</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-semibold">10,000+ Products</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onGetEarlyAccess}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#001d4a] bg-[#FDB913] rounded-lg hover:bg-[#f5b400] transition-all shadow-lg hover:shadow-xl"
              >
                Get Early Access + ₹500*Credits
              </button>
              <a
                href="https://vendor.exaltride.com"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border-2 border-white/80 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Become a Vendor
              </a>
            </div>

            {/* Process Flow */}
            <div className="hidden lg:flex items-center justify-between pt-8 max-w-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#FDB913]/20 border-2 border-[#FDB913] flex items-center justify-center mb-3">
                  <ShoppingCart className="w-7 h-7 text-[#FDB913]" />
                </div>
                <p className="text-sm font-semibold">Place Your Order</p>
                <p className="text-xs text-gray-400 mt-1">Browse & buy in clicks</p>
              </div>
              
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#FDB913] to-[#FDB913]/30 mx-4 mt-[-40px]" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#FDB913]/20 border-2 border-[#FDB913] flex items-center justify-center mb-3">
                  <Truck className="w-7 h-7 text-[#FDB913]" />
                </div>
                <p className="text-sm font-semibold">Fast, Tracked Delivery</p>
                <p className="text-xs text-gray-400 mt-1">Real-time updates</p>
              </div>
              
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#FDB913]/30 to-[#FDB913] mx-4 mt-[-40px]" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#FDB913]/20 border-2 border-[#FDB913] flex items-center justify-center mb-3">
                  <Wrench className="w-7 h-7 text-[#FDB913]" />
                </div>
                <p className="text-sm font-semibold">Expert Installation</p>
                <p className="text-xs text-gray-400 mt-1">At your doorstep</p>
              </div>
            </div>
          </div>

          {/* Right Card - Founder's Pass */}
          <div className="flex justify-center items-start lg:pt-8">
            <div className="backdrop-blur-md bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/20 rounded-3xl p-6 shadow-2xl max-w-md w-full">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#FDB913]" />
                  <span className="text-white font-semibold text-sm">FOUNDER'S PASS</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-md border border-amber-500/30">LIMITED</span>
                </div>
              </div>

              {/* Welcome Bonus Card */}
              <div className="bg-gradient-to-br from-[#FDB913] to-[#f5a800] rounded-2xl p-6 mb-6 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-[#001d4a]" />
                  <span className="text-[#001d4a] font-bold text-sm">WELCOME BONUS</span>
                </div>
                <div className="text-5xl font-bold text-[#001d4a] mb-2">₹500*</div>
                <div className="text-[#001d4a] font-semibold mb-2">FREE Credits</div>
                <p className="text-[#001d4a]/80 text-xs">Use on your first purchase*</p>
              </div>

              {/* Early Access Section */}
              <div className="mb-6">
                <p className="text-gray-400 text-xs mb-2">Early Access Unlock</p>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 mb-3">
                  <div className="text-white text-2xl font-bold mb-1">Only 900</div>
                  <div className="text-[#FDB913] font-semibold">Passes Left</div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-gray-400 text-xs font-semibold">OFFER EXPIRES IN</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <div className="flex flex-col items-center bg-slate-800/50 border border-slate-700/50 rounded-lg px-2.5 py-2 min-w-[55px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-400 uppercase">Days</div>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 border border-slate-700/50 rounded-lg px-2.5 py-2 min-w-[55px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-400 uppercase">Hrs</div>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 border border-slate-700/50 rounded-lg px-2.5 py-2 min-w-[55px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-400 uppercase">Min</div>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 border border-slate-700/50 rounded-lg px-2.5 py-2 min-w-[55px]">
                      <div className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-400 uppercase">Sec</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#FDB913]" />
                  </div>
                  <span className="text-sm">24h early access</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913]/20 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-4 h-4 text-[#FDB913]" />
                  </div>
                  <span className="text-sm">Priority delivery</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913]/20 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-4 h-4 text-[#FDB913]" />
                  </div>
                  <span className="text-sm">Free installation</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#FDB913]/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 text-[#FDB913]" />
                  </div>
                  <span className="text-sm">₹1,999 merch</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onGetEarlyAccess}
                className="w-full bg-gradient-to-r from-[#FDB913] to-[#f5a800] text-[#001d4a] font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-[#FDB913]/50 transition-all duration-300 text-base"
              >
                Claim ₹500* Credits + Founder's Pass
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

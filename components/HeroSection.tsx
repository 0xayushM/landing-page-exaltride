import { Sparkles, Shield, Users, Award, Package } from 'lucide-react';

interface HeroSectionProps {
  onGetEarlyAccess: () => void;
}

export default function HeroSection({ onGetEarlyAccess }: HeroSectionProps) {
  return (
    <>
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/hero_image.jpeg)',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#001d4a]/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#001d4a] px-4 py-2.5 rounded-lg text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Launching December 14, 2025
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              <span className="font-light  block mb-2">Your Car Deserves</span>
              <span className="font-regular text-[#FDB913]">Better<br />Accessories.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 max-w-xl font-light leading-relaxed">
              Join thousands of car owners waiting for India's most transparent aftermarket marketplace. No confusing specs, no random quotes - just honest products and verified sellers.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-regular">10,000+ Pre-</div>
                  <div className="text-sm text-gray-300">Registrations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-regular">100+ Verified Vendors</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-[#FDB913]" />
                <div>
                  <div className="text-xl font-regular">10,000+ Products</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onGetEarlyAccess}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#001d4a] bg-[#FDB913] rounded-lg hover:bg-[#f5b400] transition-all shadow-lg hover:shadow-xl"
              >
                Get Early Access + ₹500* Credits
              </button>
              <a
                href="https://vendor.exaltride.com"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border-2 border-white/80 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Become a Vendor
              </a>
            </div>
          </div>

          {/* Right Card - Glassmorphism */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full">
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#001d4a]" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-regular mb-1">Premium Accessories</h3>
                  <p className="text-sm text-gray-200">10,000+ verified products for your car</p>
                </div>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Phone Mounts */}
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FDB913] transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Phone Mounts</p>
                </div>

                {/* LED Lighting */}
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FDB913] transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">LED Lighting</p>
                </div>

                {/* Audio Systems */}
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FDB913] transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m3.536-9.192a9 9 0 010 12.728" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Audio Systems</p>
                </div>

                {/* Dash Cams */}
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FDB913] transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Dash Cams</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Stats Cards Section - Outside Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-[#003AAD] mb-3 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-regular text-[#003AAD] mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Pre-Registrations</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-[#003AAD] mb-3 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-regular text-[#003AAD] mb-1">100+</div>
              <div className="text-sm text-gray-600">Verified Vendors</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-[#003AAD] mb-3 flex justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div className="text-3xl font-regular text-[#003AAD] mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Products Ready</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-[#003AAD] mb-3 flex justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-3xl font-regular text-[#003AAD] mb-1">4.8/5</div>
              <div className="text-sm text-gray-600">Beta Rating</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

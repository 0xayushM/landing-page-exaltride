import { Check, Zap, Package, Shield, Award, Star, Clock } from 'lucide-react';

interface FinalCTAProps {
  onGetEarlyAccess: () => void;
}

export default function FinalCTA({ onGetEarlyAccess }: FinalCTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001d4a] via-[#002d5a] to-[#001d4a]">
      <div className="max-w-7xl mx-auto">
        {/* Single Unified Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side - White Section */}
          <div className="p-8 lg:p-12 bg-white w-full h-full flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full mb-6">
              <span className="text-lg">⚡</span>
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#001d4a] mb-4">
              Ready to Transform<br />Your Car?
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Join 10,000+ car owners waiting for India's most transparent car accessories marketplace.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-gray-700">Get ₹500 early access credits</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-gray-700">Exclusive launch discounts</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-gray-700">Priority customer support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
              <button
                onClick={onGetEarlyAccess}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 bg-[#FDB913] text-[#001d4a] font-semibold rounded-xl hover:bg-[#f5b400] transition-all shadow-lg hover:shadow-xl"
              >
                Join Early Access
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="https://vendor.exaltride.com"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-white text-[#001d4a] font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all"
              >
                Become a Vendor
              </a>
            </div>
          </div>

          {/* Right Side - Blue Section */}
          <div className="p-8 bg-gradient-to-br from-[#002d5a]/80 to-[#001d4a]">
            {/* Lightning Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#001d4a]" fill="#001d4a" />
              </div>
            </div>

            {/* 10K+ Products */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FDB913] rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#001d4a]" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">10K+</div>
                    <div className="text-sm text-gray-300">Products Ready</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">Seat Covers</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">Audio Systems</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">LED Lights</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">Accessories</span>
              </div>
            </div>

            {/* 100% Verified */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">100% Verified Products</div>
              </div>
              <p className="text-sm text-gray-300 pl-13">
                Guaranteed quality from trusted vendors
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-4 h-4 text-[#FDB913]" />
                </div>
                <div className="text-2xl font-semibold text-white mb-1">100+</div>
                <div className="text-xs text-gray-300">Vendors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-4 h-4 text-[#FDB913]" fill="#FDB913" />
                </div>
                <div className="text-2xl font-semibold text-white mb-1">4.8/5</div>
                <div className="text-xs text-gray-300">Rating</div>
              </div>
            </div>

            {/* Launch Date */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#001d4a] px-6 py-3 rounded-full font-medium">
                <Clock className="w-4 h-4" />
                <span>Launching Dec 14, 2025</span>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

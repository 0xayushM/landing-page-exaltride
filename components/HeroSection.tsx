import { CheckCircle2, Package, Truck, Star, BadgeIndianRupee } from 'lucide-react';

interface HeroSectionProps {
  onGetEarlyAccess: () => void;
}

export default function HeroSection({ onGetEarlyAccess }: HeroSectionProps) {
  return (
    <>
      <section className="relative pb-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[500px] relative">
          {/* Left Side - Blue Background */}
          <div className="lg:w-1/2 bg-[#003AAD] text-white px-6 sm:px-12 py-16 relative z-10 pt-32">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDB913] text-[#003AAD] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l2.5 6.5L19 10l-6.5 1.5L10 18l-2.5-6.5L1 10l6.5-1.5L10 2z"/>
              </svg>
              Launching December 14, 2025
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Car Deserves{' '}
              <span className="text-[#FDB913]">Better Accessories.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-xl">
              Join thousands of car owners waiting for India's most transparent aftermarket marketplace. No confusing specs, no random quotes – just honest products and verified sellers.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#FDB913]" />
                <span>Quality Pre-Registration</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#FDB913]" />
                <span>100+ Verified Vendors</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#FDB913]" />
                <span>Authentic Products</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onGetEarlyAccess}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#003AAD] bg-[#FDB913] rounded-lg hover:bg-[#f5b400] transition-colors"
              >
                Get Early Access + ₹500 Credits →
              </button>
              <a
                href="https://vendor.exaltride.com"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#003AAD] transition-colors"
              >
                Become a Vendor →
              </a>
            </div>

          </div>

          {/* Curved Wave Transition */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 50 0 Q 35 50 50 100 L 100 100 L 100 0 Z" fill="#FDB913" />
            </svg>
          </div>

          {/* Right Side - Yellow Background with Feature Card */}
          <div className="lg:w-1/2 bg-[#FDB913] px-6 sm:px-12 py-16 flex items-center justify-center relative z-10">
            <div className="bg-[#FECA57] rounded-2xl p-8 shadow-2xl max-w-md w-full">
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003AAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003AAD] mb-1">Wide Product Range</h3>
                    <p className="text-sm text-gray-700">From accessories to performance parts</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003AAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003AAD] mb-1">Fast Delivery</h3>
                    <p className="text-sm text-gray-700">Quick shipping across India</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003AAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003AAD] mb-1">Real Reviews</h3>
                    <p className="text-sm text-gray-700">Genuine feedback from car owners</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#003AAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <BadgeIndianRupee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003AAD] mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-gray-700">No hidden charges or surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-[#003AAD] mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#003AAD] mb-1">10,000+</div>
            <div className="text-sm text-gray-600">Pre-Registrations</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#003AAD] mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#003AAD] mb-1">500+</div>
            <div className="text-sm text-gray-600">Verified Vendors</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#003AAD] mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#003AAD] mb-1">50,000+</div>
            <div className="text-sm text-gray-600">Products Ready</div>
          </div>
          
          <div className="text-center">
            <div className="text-[#003AAD] mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-[#003AAD] mb-1">4.8/5</div>
            <div className="text-sm text-gray-600">Best Rating</div>
          </div>
        </div>
      </section>
    </>
  );
}

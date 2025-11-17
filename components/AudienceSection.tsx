import { ShoppingCart, Award, Check } from 'lucide-react';

interface AudienceSectionProps {
  onGetEarlyAccess: () => void;
}

export default function AudienceSection({ onGetEarlyAccess }: AudienceSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* For Car Owners */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 text-[#001d4a]">
                <ShoppingCart className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-[#001d4a]">For Car Owners</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Find accessories that actually fit your car</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Compare prices from verified sellers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Read real reviews from other owners</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Free delivery on orders above ₹500</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Easy returns and warranty claims</span>
              </li>
            </ul>

            <button
              onClick={onGetEarlyAccess}
              className="w-full py-3.5 px-6 bg-[#001d4a] text-white font-semibold rounded-lg hover:bg-[#002d5a] transition-colors flex items-center justify-center gap-2"
            >
              Join as Buyer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* For Vendors */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 text-[#FDB913]">
                <Award className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-[#001d4a]">For Vendors</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Reach lakhs of car owners nationwide</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Zero commission for first 6 months</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Easy onboarding and seller dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Marketing support from our team</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-700">Fast and secure payments</span>
              </li>
            </ul>

            <a
              href="https://vendor.exaltride.com"
              className="w-full py-3.5 px-6 bg-[#FDB913] text-[#001d4a] font-semibold rounded-lg hover:bg-[#f5b400] transition-colors flex items-center justify-center gap-2"
            >
              Become a Vendor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

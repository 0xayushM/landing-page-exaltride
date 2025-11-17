import { Zap } from 'lucide-react';

interface CTASectionProps {
  onGetEarlyAccess: () => void;
}

export default function CTASection({ onGetEarlyAccess }: CTASectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-2 border-[#003AAD] rounded-3xl p-12 text-center">
          {/* Lightning Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003AAD] mb-4">
            Ready to Transform Your Car Shopping Experience?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 10,000+ car owners who are waiting for India's most transparent car accessories marketplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetEarlyAccess}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-[#003AAD] bg-[#FDB913] rounded-lg hover:bg-[#f5b400] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Join Early Access Now
            </button>
            <a
              href="https://vendor.exaltride.com"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#003AAD] border-2 border-[#003AAD] bg-white rounded-lg hover:bg-[#003AAD] hover:text-white transition-colors"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

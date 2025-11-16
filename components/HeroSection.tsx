interface HeroSectionProps {
  onGetEarlyAccess: () => void;
}

export default function HeroSection({ onGetEarlyAccess }: HeroSectionProps) {
  return (
    <section className="relative text-white pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/image1.jpg)' }}
      />
      {/* Gradient Overlay - fades from left (solid color) to right (transparent) */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to right, #003AAD 0%, #003AAD 40%, rgba(0, 58, 173, 0.7) 70%, transparent 100%)'
        }}
      />
      {/* Content */}
      <div className="max-w-7xl py-12 mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Your Car Deserves Better Accessories.<br />
            You Deserve a Better Experience.
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl">
            Join thousands of car owners waiting for India's new aftermarket marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onGetEarlyAccess}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Get Early Access + Launch Credits
            </button>
            <a
              href="https://vendor.exaltride.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#003AAD] transition-colors"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

interface NavbarProps {
  onGetEarlyAccess: () => void;
}

export default function Navbar({ onGetEarlyAccess }: NavbarProps) {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/dark_logo.png" alt="Exaltride" width={120} height={40} className="h-20 w-auto" />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToFeatures}
              className="text-sm font-medium text-gray-700 hover:text-[#003AAD] transition-colors"
            >
              Features
            </button>
            <a
              href="https://vendor.exaltride.com"
              className="text-sm font-medium text-gray-700 hover:text-[#003AAD] transition-colors"
            >
              For Vendors
            </a>
            <button
              onClick={scrollToFAQ}
              className="text-sm font-medium text-gray-700 hover:text-[#003AAD] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={onGetEarlyAccess}
              className="px-5 py-2 text-sm font-semibold text-[#003AAD] bg-[#FDB913] rounded-md hover:bg-[#f5b400] transition-colors"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <button
              onClick={onGetEarlyAccess}
              className="px-4 py-2 text-sm font-semibold text-[#003AAD] bg-[#FDB913] rounded-md"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <Image src="/logo.png" alt="Exaltride" width={150} height={45} className="h-20 w-auto mb-4" />
            <p className="text-gray-300 text-sm mb-4">
              Made for Indian car owners. Built by people who've lived the same problems.
            </p>
            <div className="text-sm text-gray-300">
              <a href="mailto:Customersupport@exaltride.com" className="hover:text-[#FDB913] transition-colors">
                Customersupport@exaltride.com
              </a>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/exaltride?igsh=MTgwd2c0aWNmM2VkZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/exaltride/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Exaltride. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-[#FDB913] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className="hover:text-[#FDB913] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

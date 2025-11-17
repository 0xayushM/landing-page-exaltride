import Image from 'next/image';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="https://vendor.exaltride.com" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  For Vendors
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              {/* <a
                href="https://www.facebook.com/exaltride"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.instagram.com/exaltride?igsh=MTgwd2c0aWNmM2VkZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://x.com/exaltride"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}
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

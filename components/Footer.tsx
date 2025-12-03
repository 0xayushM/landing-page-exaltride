'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <footer className="bg-[#1a1f2e] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:max-w-xs">
            <Image src="/logo.png" alt="Exaltride" width={150} height={45} className="h-20 w-auto mb-4" />
            <p className="text-gray-300 text-sm mb-4">
              Made for Indian car owners. Built by people who've lived the same problems.
            </p>
            <div className="text-sm text-gray-300">
              <a href="mailto:support@exaltride.com" className="hover:text-[#FDB913] transition-colors">
                support@exaltride.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/policies" className="hover:text-[#FDB913] transition-colors">
                  Our Policies
                </Link>
              </li>
              <li>
                <a href="https://vendor.exaltride.com" className="hover:text-[#FDB913] transition-colors">
                  For Vendors
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq-section')} className="hover:text-[#FDB913] transition-colors text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('join-form')} className="hover:text-[#FDB913] transition-colors text-left">
                  Get Early Access
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1D1Niwp13i/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
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
                href="https://www.linkedin.com/showcase/exalt-ride/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/exaltride?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FDB913] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Image src="/twitter.png" alt="Twitter" width={20} height={20} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Exaltride. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/policies#privacy-policy" className="hover:text-[#FDB913] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/policies#terms-of-service" className="hover:text-[#FDB913] transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/policies#return-refund-policy" className="hover:text-[#FDB913] transition-colors">
                Returns & Refunds
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/policies#shipping-policy" className="hover:text-[#FDB913] transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>* ₹500 credits applicable on orders above ₹2499</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, User } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetEarlyAccess={() => {}} />

      {/* ---------------- HEADER ---------------- */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-[#001d4a] to-[#003AAD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're here to assist you with support, business queries, and grievance redressal.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN CONTENT (FULL WIDTH) ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-1">

          {/* ---------------- MAIN CARD ---------------- */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-[#003AAD]">
                  <User className="w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#001d4a]">
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Reach out to us anytime
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-10 text-gray-700">

                {/* Company */}
                <div>
                  <h3 className="text-xl font-semibold text-[#001d4a] mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#003AAD]">
                      <User className="w-4 h-4" />
                    </span>
                    Company
                  </h3>
                  <p className="pl-10">Torqis Horizons Pvt Ltd</p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-xl font-semibold text-[#001d4a] mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#003AAD]">
                      <MapPin className="w-4 h-4" />
                    </span>
                    Address
                  </h3>
                  <p className="leading-relaxed pl-10">
                    IX-210, Tagore Gali, Gandhi Nagar,<br />
                    East Delhi, New Delhi – 110031, India
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-xl font-semibold text-[#001d4a] mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#003AAD]">
                      <Mail className="w-4 h-4" />
                    </span>
                    Email
                  </h3>
                  <a
                    href="mailto:support@exaltride.com"
                    className="text-[#003AAD] font-medium pl-10 hover:underline"
                  >
                    support@exaltride.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-xl font-semibold text-[#001d4a] mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#003AAD]">
                      <Phone className="w-4 h-4" />
                    </span>
                    Phone
                  </h3>
                  <a
                    href="tel:+919311015901"
                    className="text-[#003AAD] font-medium pl-10 hover:underline"
                  >
                    +91 9311015901
                  </a>
                </div>

                <hr className="border-gray-200" />

                {/* Grievance Officer */}
                <div>
                  <h3 className="text-2xl font-bold text-[#001d4a] mb-4">
                    Grievance Officer
                  </h3>

                  <p className="text-lg">
                    <span className="font-semibold text-[#003AAD]">Name:</span> Harsh Surana
                  </p>

                  <p className="text-lg mt-2">
                    <span className="font-semibold text-[#003AAD]">Phone:</span>{" "}
                    <a href="tel:+919311015901" className="text-[#003AAD] hover:underline">
                      +91 9311015901
                    </a>
                  </p>

                  <p className="text-lg mt-2">
                    <span className="font-semibold text-[#003AAD]">Email:</span>{" "}
                    <a href="mailto:grievance@exaltride.com" className="text-[#003AAD] hover:underline">
                      grievance@exaltride.com
                    </a>
                  </p>
                </div>

              </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

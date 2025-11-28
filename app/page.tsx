'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AudienceSection from '@/components/AudienceSection';
import PopularCategories from '@/components/PopularCategories';
import JoinForm from '@/components/JoinForm';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import PlatformPreview from '@/components/PlatformPreview';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OfferPopup from '@/components/OfferPopup';

export default function Home() {
  // Track visitor on page load
  useEffect(() => {
    const trackVisitor = async () => {
      let locationData = {
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        ip: 'Unknown',
      };

      try {
        // Try to get location from IP (with timeout)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const locationResponse = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (locationResponse.ok) {
          const data = await locationResponse.json();
          locationData = {
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            country: data.country_name || 'Unknown',
            ip: data.ip || 'Unknown',
          };
        }
      } catch (error) {
        // Silently fail location lookup, continue with tracking
        console.log('Location lookup unavailable, tracking with default location');
      }

      // Track visitor even if location lookup failed
      try {
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: locationData,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        // Silently fail tracking to not disrupt user experience
        console.log('Visitor tracking unavailable');
      }
    };

    trackVisitor();
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('join-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetEarlyAccess={scrollToForm} />
      <HeroSection onGetEarlyAccess={scrollToForm} />
      <FeaturesSection />
      <AudienceSection onGetEarlyAccess={scrollToForm} />
      <PopularCategories />
      <JoinForm />
      <FAQSection />
      {/* <FinalCTA onGetEarlyAccess={scrollToForm} /> */}
      {/* <PlatformPreview /> */}
      {/* <CTASection onGetEarlyAccess={scrollToForm} /> */}
      <Footer />
      <OfferPopup onGetEarlyAccess={scrollToForm} />
    </div>
  );
}

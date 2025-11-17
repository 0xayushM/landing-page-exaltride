import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/icon1.png',
      title: 'Real Information',
      description: 'No confusing specs. Just honest product clarity.',
    },
    {
      icon: '/icon2.png',
      title: 'Verified Sellers Only',
      description: 'We work only with trusted vendors.',
    },
    {
      icon: '/icon3.png',
      title: 'Availability Across India',
      description: 'Even for older models and rare accessories.',
    },
    {
      icon: '/icon4.png',
      title: 'Transparent Pricing',
      description: 'No negotiation games. No random quotes.',
    },
    {
      icon: '/icon5.png',
      title: 'Reviews From Real Owners',
      description: 'Not manipulated. Not faked.',
    },
  ];

  return (
    <section id="features-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-[#001d4a]">
            WHY EXALTRIDE?
          </h2>
          <p className="text-base text-gray-600 font-light">
            Experience the difference with our customer-first approach
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src={feature.icon} alt={feature.title} width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-regular mb-3 text-[#001d4a]">{feature.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

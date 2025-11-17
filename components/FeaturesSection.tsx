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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#003AAD]">
            WHY EXALTRIDE?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our customer-first approach
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-2 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-24 h-24 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 `}>
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} className="h-16 w-16 object-contain" />
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

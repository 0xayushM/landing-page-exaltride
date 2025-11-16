import { FileText, Shield, MapPin, DollarSign, MessageSquare } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: 'Real Information',
      description: 'No confusing specs. Just honest product clarity.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Verified Sellers Only',
      description: 'We work only with trusted vendors.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Availability Across India',
      description: 'Even for older models and rare accessories.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No negotiation games. No random quotes.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'Reviews From Real Owners',
      description: 'Not manipulated. Not faked.',
      gradient: 'from-rose-500 to-pink-500',
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
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={32} className="text-white" strokeWidth={2.5} />
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

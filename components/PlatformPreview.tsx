import Image from 'next/image';

export default function PlatformPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-regular mb-12 text-gray-900">
          Take a <span className="text-[#003AAD]">sneak peek</span> into our{' '}
          <span className="text-[#003AAD]">platform</span>
          <div className="h-1 w-24 bg-[#FDB913] mt-2"></div>
        </h2>

        {/* Content Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-regular text-gray-900">
                Unified experience on web and mobile
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A modern marketplace interface that looks great on desktop and phone — 
                browse products, manage listings and track orders with ease.
              </p>
            </div>

            {/* Right Side - Device Mockups */}
            <div className="relative h-[220px] md:h-[400px]">
              {/* Laptop Image */}
              <div className="absolute bottom-0 right-0 w-full lg:w-[110%] z-10">
                <Image
                  src="/laptop.png"
                  alt="Desktop Platform View"
                  width={600}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Mobile Image */}
              <div className="absolute bottom-8 -left-0 w-[35%] z-20">
                <Image
                  src="/mobile.png"
                  alt="Mobile Platform View"
                  width={200}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

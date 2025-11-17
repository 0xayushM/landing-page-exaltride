import Image from 'next/image';

export default function PopularCategories() {
  const categories = [
    {
      name: 'Audio Systems',
      description: 'Speakers, subwoofers, amplifiers',
      products: '2,500+ products',
      image: '/audio.png',
    },
    {
      name: 'Seat Covers',
      description: 'Premium leather, fabric, custom fit',
      products: '5,000+ products',
      image: '/seat.png',
    },
    {
      name: 'LED Lights',
      description: 'Headlights, fog lamps, decorative',
      products: '3,500+ products',
      image: '/lights.png',
    },
    {
      name: 'Exterior Styling',
      description: 'Body kits, spoilers, chrome',
      products: '3,000+ products',
      image: '/exterior.png',
    },
    {
      name: 'Car Care',
      description: 'Cleaning, polishing, tools',
      products: '2,000+ products',
      image: '/car_care.png',
    },
    {
      name: 'Electronics',
      description: 'Dash cams, chargers, GPS',
      products: '1,800+ products',
      image: '/electronix.png',
    },
    {
      name: 'Protection',
      description: 'Floor mats, PPF, ceramic coating',
      products: '2,200+ products',
      image: '/protection.png',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3 text-[#001d4a]">
            Popular Product Categories
          </h2>
          <p className="text-gray-600">
            10,000+ products across all major categories
          </p>
        </div>

        {/* Categories Grid */}
        <div>
          {/* First Row - 4 items */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {categories.slice(0, 4).map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform`}>
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-lg text-center font-semibold text-[#001d4a] mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-3">
                  {category.description}
                </p>

                {/* Product Count */}
                <p className="text-sm font-medium text-[#003AAD] text-center">
                  {category.products}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row - 3 items centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {categories.slice(4).map((category, index) => (
              <div
                key={index + 4}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                {/* Image */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform`}>
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      width={60} 
                      height={60} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-lg text-center font-semibold text-[#001d4a] mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-3">
                  {category.description}
                </p>

                {/* Product Count */}
                <p className="text-sm font-medium text-[#003AAD] text-center">
                  {category.products}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

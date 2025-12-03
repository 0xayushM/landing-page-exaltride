'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import productsData from '@/data/products.json';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  freeDelivery: boolean;
  inStock: boolean;
  category: string;
  brand?: string;
}

export default function FeaturedProducts() {
  const [products] = useState<Product[]>(productsData);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
    });
    openCart();
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-blue-600';
      case 'Top Rated':
        return 'bg-green-600';
      case 'Hot Deal':
        return 'bg-orange-500';
      case 'Limited Deal':
        return 'bg-yellow-500';
      case 'Trending':
        return 'bg-gray-700';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1 sm:mb-2 text-[#001d4a]">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Handpicked selection</p>
          </div>
          <Link
            href="#"
            className="text-[#003AAD] font-semibold text-sm sm:text-base hover:underline flex items-center gap-1"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Products - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex-shrink-0 w-[280px] sm:w-auto bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {/* Badges - Multiple badges stacked */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  <div className={`${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-md`}>
                    {product.badge}
                  </div>
                  <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-md">
                    {product.discount}% off
                  </div>
                </div>
                
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-sm sm:text-base font-semibold text-[#001d4a] mb-4 h-10">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 bg-[#003AAD] text-white text-xs font-bold px-2 py-0.5 rounded">
                    <span>{product.rating}</span>
                    <span>★</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({(product.reviews / 1000).toFixed(1)}K)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#001d4a]">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 flex-col">
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 px-3 rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = `/product/${product.id}`;
                    }}
                    className="flex-1 bg-[#003AAD] hover:bg-[#002d8a] text-white font-bold py-2.5 px-3 rounded-lg transition-colors text-xs sm:text-sm text-center"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

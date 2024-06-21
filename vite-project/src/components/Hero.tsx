import React from 'react';

// Example background image URL
const backgroundImageUrl = 'https://outfitters.com.pk/cdn/shop/files/DV_1920x900_M_70bf6af4-1089-40c4-8e6a-359468a5cdfc.jpg?v=1717398087';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">Explore amazing features and services</p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
        Broser Products
        </button>
      </div>
    </div>
  );
};

export default Hero;

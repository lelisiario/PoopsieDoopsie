import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-green-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              We Clean Up The Mess So You Don't Have To!
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Professional dog waste removal service in Vacaville, CA. 
              Keeping your yard clean, healthy, and enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#pricing" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-green-700">
                See Our Pricing
              </a>
              <a href="#contact" className="bg-yellow-400 text-green-800 px-6 py-3 rounded-full font-semibold text-center hover:bg-yellow-300">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for an image */}
            <div className="bg-green-200 rounded-lg p-8 text-center">
              <p className="text-green-800 text-lg">
                [Image of a clean yard or service professional with company logo]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

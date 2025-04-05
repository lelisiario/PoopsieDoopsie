import React from 'react';
import './About.css';
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            {/* Placeholder for company image/team */}
            <div className="bg-green-100 rounded-lg p-8 text-center">
              <p className="text-green-800 text-lg">
                [Image of Poopsie Doopsie team or founder]
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-6">About Poopsie Doopsie</h2>
            <p className="text-gray-700 mb-4">
              Founded in Vacaville, California, Poopsie Doopsie was born from a simple idea: everyone loves their dogs, but nobody loves cleaning up after them.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide a reliable, thorough, and environmentally responsible waste removal service that gives pet owners more time to enjoy their yards and their pets.
            </p>
            <p className="text-gray-700 mb-4">
              We're locally owned and operated, and committed to exceptional service. Our team members are pet lovers themselves, background-checked, and trained to treat your property with the utmost care and respect.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Reliable & Consistent</span>
                </div>
                <div className="flex items-center">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Eco-Friendly Disposal</span>
                </div>
                <div className="flex items-center">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
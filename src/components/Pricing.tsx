import React from 'react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      title: "Basic",
      price: "$15",
      frequency: "per week",
      features: [
        "One weekly visit",
        "Single family home",
        "Up to 2 dogs",
        "Text notification after service",
        "Satisfaction guarantee"
      ]
    },
    {
      id: 2,
      title: "Standard",
      price: "$25",
      frequency: "per week",
      features: [
        "Two weekly visits",
        "Single family home",
        "Up to 3 dogs",
        "Text notification after service",
        "Yard deodorizing treatment",
        "Satisfaction guarantee"
      ],
      isPopular: true
    },
    {
      id: 3,
      title: "Premium",
      price: "Custom",
      frequency: "pricing",
      features: [
        "Custom visit schedule",
        "Commercial properties",
        "Multiple pets",
        "Service report",
        "Yard deodorizing treatment",
        "Pet-safe lawn treatment available",
        "Satisfaction guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mt-2">Choose the plan that fits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white p-8 rounded-lg shadow-md relative ${plan.isPopular ? 'border-2 border-green-500' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-center text-green-700">{plan.title}</h3>
              <div className="text-center my-6">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-600"> {plan.frequency}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block text-center py-2 px-4 rounded-full font-medium ${
                  plan.isPopular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {plan.title === "Premium" ? "Get a Quote" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import { ServiceType } from '../Types';

const Services: React.FC = () => {
  const services: ServiceType[] = [
    {
      id: 1,
      title: "Residential Service",
      description: "Weekly, bi-weekly, or monthly waste removal for your home yard. Perfect for busy families and pet lovers.",
      icon: "🏠"
    },
    {
      id: 2,
      title: "Commercial Properties",
      description: "Keep your apartment complexes, businesses, or public spaces clean. Custom schedules available.",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Government Contracts",
      description: "Special rates for parks, schools, and other government facilities. Compliant with all local regulations.",
      icon: "🏛️"
    },
    {
      id: 4,
      title: "One-Time Cleanup",
      description: "Having a party or event? Let us do a deep cleanup before your special occasion.",
      icon: "🧹"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Our Services</h2>
          <p className="text-gray-600 mt-2">Professional pet waste removal for every situation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

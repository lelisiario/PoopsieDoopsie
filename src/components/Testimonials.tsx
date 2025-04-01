import React from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner with 2 Golden Retrievers",
      content: "Poopsie Doopsie has been a game-changer for our family. With two large dogs and busy schedules, our yard was becoming a minefield. Now we can enjoy our backyard again!",
      image: "placeholder"
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Property Manager",
      content: "We manage 3 apartment complexes in Vacaville and Poopsie Doopsie keeps our pet-friendly properties clean and odor-free. Residents love it and it's increased our property value.",
      image: "placeholder"
    },
    {
      id: 3,
      name: "Jennifer Davis",
      role: "Dog Owner & Working Professional",
      content: "I work long hours and Poopsie Doopsie gives me peace of mind knowing my yard is clean when I get home. The service is reliable and their team is always friendly!",
      image: "placeholder"
    }
  ];

  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Don't just take our word for it</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2

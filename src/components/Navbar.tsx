import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl">Poopsie Doopsie</span>
            <span className="ml-2 text-xs bg-yellow-400 text-green-800 px-2 py-1 rounded-full">Pet Waste Removal</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#pricing" className="hover:text-yellow-300">Pricing</a>
            <a href="#about" className="hover:text-yellow-300">About Us</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
            <a href="#contact" className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-bold hover:bg-yellow-300">Get Started</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <a href="#services" className="block hover:text-yellow-300">Services</a>
            <a href="#pricing" className="block hover:text-yellow-300">Pricing</a>
            <a href="#about" className="block hover:text-yellow-300">About Us</a>
            <a href="#contact" className="block hover:text-yellow-300">Contact</a>
            <a href="#contact" className="block bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 text-center">Get Started</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

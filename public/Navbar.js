import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
         <div className="text-2xl font-bold text-gray-800">
          <a href="/">Brand</a>
        </div>
 
        <div className="hidden md:flex space-x-28 text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
 

         <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-30 bg-[#0c395b] shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Menu Button */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="McDonald's Logo"
              className="h-8 border-4 border-[#fdb704] rounded-full w-auto mr-1"
            />
            <h1 className="text-lg md:text-xl font-semibold md:font-bold text-[#fdb704]">McDonald&apos;s</h1>
          </div>

          {/* Desktop Navigation and Order Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex justify-center space-x-4">
              <a href="#" className="text-gray-100 hover:text-[#fcb808]">Home</a>
              <a href="#" className="text-gray-100 hover:text-[#fcb808]">Menu</a>
              <a href="#" className="text-gray-100 hover:text-[#fcb808]">Locations</a>
              <a href="#" className="text-gray-100 hover:text-[#fcb808]">About Us</a>
            </nav>
            {/* add your link here */}
            <a href="https://smrturl.co/a/s39ab0beb7b/849?s1=Sabbir01" // add your link here
             className="bg-[#fcb808] text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500">
              Order Now
            </a> {/* Link to the Order page */}
          </div>

          {/* Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#fdb704] hover:text-gray-100 focus:outline-none ml-2"
          >
            {isMenuOpen ? (
              <span className="h-6 w-6">✖</span> // Using a simple close icon for demonstration
            ) : (
              <span className="h-6 w-6">☰</span> // Using a simple menu icon for demonstration
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-100 hover:text-gray-900 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-100 hover:text-gray-900 hover:bg-gray-50 rounded-md">Menu</a>
            <a href="#" className="block px-3 py-2 text-gray-100 hover:text-gray-900 hover:bg-gray-50 rounded-md">Locations</a>
            <a href="#" className="block px-3 py-2 text-gray-100 hover:text-gray-900 hover:bg-gray-50 rounded-md">About Us</a>
          </div>
          {/* Order Now Button for Mobile */}
          <div className="px-4">
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 mb-2">
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

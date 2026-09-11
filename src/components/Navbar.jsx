import React, { useState } from 'react';
import logoImg from '../assets/logo-text.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile Left: Hamburger */}
        <div className="flex md:hidden">
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Dev Stack Logo" className="h-7 w-auto object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center space-x-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-black transition-colors px-2 py-1">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-brand px-4 py-1.5 rounded-full shadow-sm hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block py-1.5 text-sm font-medium text-gray-700">Home</a>
          <a href="#technologies" className="block py-1.5 text-sm font-medium text-gray-700">Technologies</a>
          <a href="#projects" className="block py-1.5 text-sm font-medium text-gray-700">Projects</a>
          <a href="#about" className="block py-1.5 text-sm font-medium text-gray-700">About</a>
          <a href="#contact" className="block py-1.5 text-sm font-medium text-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
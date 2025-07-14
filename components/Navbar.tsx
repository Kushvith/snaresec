'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/referral', label: 'Referral' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <>
      <nav className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="font-heading text-text-light font-bold text-4xl tracking-wider">
                SnareSec
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <button className="text-text-light bg-transparent border border-text-light text-lg hover:bg-text-light hover:text-primary font-semibold py-2 px-5 rounded-md transition-all duration-300">
                Login
              </button>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative w-8 h-8 z-50"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-2">
                  <span className={`block w-8 h-0.5 bg-text-light transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                  <span className={`block w-8 h-0.5 bg-text-light transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block w-8 h-0.5 bg-text-light transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} id="mobile-menu">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-4/5 max-w-xs text-center text-text-light bg-transparent border border-text-light hover:bg-text-light hover:text-primary font-semibold py-3 px-4 mt-4 rounded-md transition-all duration-300 text-xl">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
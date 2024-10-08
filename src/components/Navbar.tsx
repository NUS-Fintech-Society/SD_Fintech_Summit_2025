"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <nav className="bg-blue-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white font-semibold hover:text-gray-200">
              HOME
            </Link>
            <Link href="/about" className="text-white font-semibold hover:text-gray-200">
              ABOUT
            </Link>

            {/* Workshops Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsWorkshopsOpen(!isWorkshopsOpen)} 
                className="text-white font-semibold hover:text-gray-200"
              >
                WORKSHOPS
              </button>
              {isWorkshopsOpen && (
                <div className="absolute mt-2 w-40 bg-blue-700 text-white rounded-lg shadow-lg">
                  <Link href="/workshops/day1" className="block px-4 py-2 hover:bg-blue-600">
                    Day 1
                  </Link>
                  <Link href="/workshops/day2" className="block px-4 py-2 hover:bg-blue-600">
                    Day 2
                  </Link>
                  <Link href="/workshops/day3" className="block px-4 py-2 hover:bg-blue-600">
                    Day 3
                  </Link>
                </div>
              )}
            </div>

            {/* FAQ Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsFAQOpen(!isFAQOpen)} 
                className="text-white font-semibold hover:text-gray-200"
              >
                FAQ
              </button>
              {isFAQOpen && (
                <div className="absolute mt-2 w-40 bg-blue-700 text-white rounded-lg shadow-lg">
                  <Link href="/faq/hackathon" className="block px-4 py-2 hover:bg-blue-600">
                    Hackathon
                  </Link>
                  <Link href="/faq/workshops" className="block px-4 py-2 hover:bg-blue-600">
                    Workshops
                  </Link>
                  <Link href="/faq/opening-ceremony" className="block px-4 py-2 hover:bg-blue-600">
                    Opening Ceremony
                  </Link>
                  <Link href="/faq/demo-day" className="block px-4 py-2 hover:bg-blue-600">
                    Demo Day
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sponsors" className="text-white font-semibold hover:text-gray-200">
              SPONSORS
            </Link>
            <Link href="/registration" className="text-white font-semibold hover:text-gray-200">
              REGISTRATION
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
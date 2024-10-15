"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<"workshops" | "faq" | null>(null);
  const [hoverDelay, setHoverDelay] = useState<number | null>(null);

  const handleMouseEnter = (dropdown: "workshops" | "faq") => {
    if (hoverDelay) clearTimeout(hoverDelay);
    setIsDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => setIsDropdownOpen(null), 200); // Shorten the delay to enhance UX
    setHoverDelay(Number(delay));
  };

  return (
    <>
      <nav className="bg-nav-backround shadow-md w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Full width applied here */}
          <div className="flex items-center justify-between h-16 w-full"> {/* Also here */}
            <div className="flex-1 flex justify-between items-center w-full"> {/* Ensure full width */}
              <Link href="/" className="text-white font-bold text-lg hover:text-gray-200 md:ml-[10%]"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
              >
                HOME
              </Link>
              <Link href="/about" className="text-white font-bold text-lg hover:text-gray-200 mx-2"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
              >
                ABOUT
              </Link>

              {/* Workshops Dropdown */}
              <div
                className="relative mx-2 flex items-center"
                onMouseEnter={() => handleMouseEnter("workshops")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white font-bold text-lg flex items-center hover:text-gray-200"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                >
                  WORKSHOPS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 ml-2 transform ${
                      isDropdownOpen === "workshops" ? "rotate-180 text-gray-200" : "rotate-0"
                    } transition-transform duration-200`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "workshops" && (
                  <div
                    className="absolute left-0 top-full mt-1 w-40 bg-blue-400 text-white rounded-lg shadow-lg z-50"
                    onMouseEnter={() => handleMouseEnter("workshops")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/workshops/day1"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      DAY 1
                    </Link>
                    <Link
                      href="/workshops/day2"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      Day 2
                    </Link>
                    <Link
                      href="/workshops/day3"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}  
                    >
                      Day 3
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/sponsors" className="text-white font-bold text-lg hover:text-gray-200 mx-2"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
              >
                SPONSORS
              </Link>

              {/* FAQ Dropdown */}
              <div
                className="relative mx-2 flex items-center"
                onMouseEnter={() => handleMouseEnter("faq")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white font-bold text-lg flex items-center hover:text-gray-200"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                >
                  FAQ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 ml-2 transform ${
                      isDropdownOpen === "faq" ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "faq" && (
                  <div
                    className="absolute left-0 top-full mt-1 w-40 bg-blue-400 text-white rounded-lg shadow-lg z-50"
                    onMouseEnter={() => handleMouseEnter("faq")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/faq/hackathon"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      HACKATHON
                    </Link>
                    <Link
                      href="/faq/workshops"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      WORKSHOPS
                    </Link>
                    <Link
                      href="/faq/opening-ceremony"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      OPENING CEREMONY
                    </Link>
                    <Link
                      href="/faq/demo-day"
                      className="block px-4 py-2 hover:bg-nav-backround rounded-lg"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
                    >
                      DEMO DAY
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/registration" className="text-white font-bold text-lg hover:text-gray-200 md:mr-[10%]"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }} 
              >
                REGISTRATION
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
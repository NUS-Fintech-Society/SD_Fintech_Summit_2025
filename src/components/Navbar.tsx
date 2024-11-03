"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<"workshops" | "faq" | "about" | null>(null);
  const [hoverDelay, setHoverDelay] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control hamburger menu

  const handleMouseEnter = (dropdown: "workshops" | "faq" | "about") => {
    if (hoverDelay) clearTimeout(hoverDelay);
    setIsDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => setIsDropdownOpen(null), 200);
    setHoverDelay(Number(delay));
  };

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null); // Ref for the <nav> container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        navRef.current &&
        !menuRef.current.contains(event.target as Node) && // Check for clicks outside of the menu
        !navRef.current.contains(event.target as Node) // Check for clicks outside of the nav container
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="bg-nav-backround shadow-md w-full">
        <div className="w-full lg:px-8">
          <div className="flex items-center justify-between h-16  w-full">
            {/* Hamburger Button for Mobile */}
            <button
              className="block md:hidden px-4 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div className={"md:flex hidden md:justify-between md:items-center w-full"}>
              <Link href="/" className="text-white font-bold text-lg hover:text-gray-200 md:ml-[5%]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                HOME
              </Link>

              {/* About Dropdown */}
              <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
                <button className="text-white font-bold text-lg flex items-center hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                  ABOUT
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "about" ? "rotate-180" : "rotate-0"} transition-transform duration-200`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "about" && (
                  <div className="absolute left-0 top-full mt-1 w-40 bg-blue-400 text-white rounded-lg shadow-lg z-50">
                    <Link href="/about" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>About</Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Contact Us</Link>
                  </div>
                )}
              </div>

              {/* Workshops Dropdown */}
              <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("workshops")} onMouseLeave={handleMouseLeave}>
                <button className="text-white font-bold text-lg flex items-center hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                  WORKSHOPS
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "workshops" ? "rotate-180" : "rotate-0"} transition-transform duration-200`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "workshops" && (
                  <div className="absolute left-0 top-full mt-1 w-40 bg-blue-400 text-white rounded-lg shadow-lg z-50">
                    <Link href="/workshops/day1" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Day 1</Link>
                    <Link href="/workshops/day2" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Day 2</Link>
                    <Link href="/workshops/day3" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Day 3</Link>
                  </div>
                )}
              </div>

              <Link href="/sponsors" className="text-white font-bold text-lg hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                SPONSORS
              </Link>

              <Link href="/faq" className="text-white font-bold text-lg hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                FAQ
              </Link>

              <Link 
                href="/" 
                className="text-white font-bold text-lg px-4 py-2 border border-white rounded-full hover:bg-white hover:text-nav-backround transition-colors duration-200 md:mr-[5%]"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                REGISTRATION
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden block py-4 bg-nav-backround text-white z-50 w-full" ref={menuRef}>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:text-gray-200 mb-2">
                HOME
              </Link>

              {/* About Dropdown for Mobile */}
              <div className="relative w-full mb-2">
                <button
                  className="flex items-center w-full px-4 py-2"
                  onClick={() => setIsDropdownOpen(isDropdownOpen === "about" ? null : "about")}
                >
                  ABOUT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "about" ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "about" && (
                  <div className="w-full bg-blue-400">
                    <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200">
                      About
                    </Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200">
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              {/* Workshops Dropdown for Mobile */}
              <div className="relative w-full mb-2">
                <button
                  className="flex items-center w-full px-4 py-2"
                  onClick={() => setIsDropdownOpen(isDropdownOpen === "workshops" ? null : "workshops")}
                >
                  WORKSHOPS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "workshops" ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "workshops" && (
                  <div className="w-full bg-blue-400">
                    <Link href="/workshops/day1" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200">
                      Day 1
                    </Link>
                    <Link href="/workshops/day2" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200">
                      Day 2
                    </Link>
                    <Link href="/workshops/day3" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200">
                      Day 3
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/sponsors" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:text-gray-200 mb-2">
                SPONSORS
              </Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:text-gray-200 mb-2">
                FAQ
              </Link>
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)} // This will close the menu
                className="text-white font-bold text-lg px-4 py-2 border-[1px] border-white rounded-full hover:bg-white hover:text-nav-backround transition-colors duration-200 md:mr-[5%]"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                REGISTRATION
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

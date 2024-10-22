"use client";

import React, { useState, useEffect, useRef} from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<"workshops" | "faq" | null>(null);
  const [hoverDelay, setHoverDelay] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control hamburger menu

  const handleMouseEnter = (dropdown: "workshops" | "faq") => {
    if (hoverDelay) clearTimeout(hoverDelay);
    setIsDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => setIsDropdownOpen(null), 200);
    setHoverDelay(Number(delay));
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu
      }
    };
    
    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-nav-backround shadow-md w-full">
        <div className="w-full sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
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

              <Link href="/about" className="text-white font-bold text-lg hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                ABOUT
              </Link>

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

              {/* FAQ Dropdown */}
              <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("faq")} onMouseLeave={handleMouseLeave}>
                <button className="text-white font-bold text-lg flex items-center hover:text-gray-200" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                  FAQ
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "faq" ? "rotate-180" : "rotate-0"} transition-transform duration-200`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen === "faq" && (
                  <div className="absolute left-0 top-full mt-1 w-40 bg-blue-400 text-white rounded-lg shadow-lg z-50">
                    <Link href="/faq/hackathon" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Hackathon</Link>
                    <Link href="/faq/workshops" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Workshops</Link>
                    <Link href="/faq/opening-ceremony" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Opening Cerenomy</Link>
                    <Link href="/faq/demo-day" className="block px-4 py-2 hover:bg-nav-backround rounded-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>Demo Day</Link>
                  </div>
                )}
              </div>

              <Link href="/registration" className="text-white font-bold text-lg hover:text-gray-200 md:mr-[5%]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                REGISTRATION
              </Link>
            </div>
          </div>

 {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden block py-7 bg-nav-backround text-white z-50 w-full"
  ref={menuRef}>
    <Link href="/" className="block px-4 py-2 hover:text-gray-200"> 
      HOME
    </Link>
    <Link href="/about" className="block px-4 py-2 hover:text-gray-200"> 
      ABOUT
    </Link>
    <div className="relative flex flex-col items-start w-full">
      <button
        className="flex items-center w-full px-4 py-2"
        onClick={() => setIsDropdownOpen(isDropdownOpen === "workshops" ? null : "workshops")} // Toggle dropdown on button click
        onMouseEnter={() => handleMouseEnter("workshops")} // Open on hover
      >
        WORKSHOPS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "workshops" ? "rotate-180" : "rotate-0"
            } transition-transform duration-200`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        onMouseLeave={handleMouseLeave} // Close when mouse leaves the dropdown
        className={`w-full bg-blue-400 ${isDropdownOpen === "workshops" ? "block" : "hidden"}`} // Control visibility
      >
        <div className=" text-white z-50 w-full"> 
          <Link
            href="/workshops/day1"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Day 1
          </Link>
          <Link
            href="/workshops/day2"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Day 2
          </Link>
          <Link
            href="/workshops/day3"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Day 3
          </Link>
        </div>
      </div>
    </div>

    <Link href="/sponsors" className="block px-4 py-2 hover:text-gray-200">
      SPONSORS
    </Link>
    <div className="relative flex flex-col items-start w-full">
      <button
        className="flex items-center w-full px-4 py-2"
        onClick={() => setIsDropdownOpen(isDropdownOpen === "faq" ? null : "faq")} // Toggle dropdown on button click
        onMouseEnter={() => handleMouseEnter("faq")} // Open on hover
      >
        FAQ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 ml-2 transform ${isDropdownOpen === "faq" ? "rotate-180" : "rotate-0"
            } transition-transform duration-200`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        onMouseLeave={handleMouseLeave} // Close when mouse leaves the dropdown
        className={`w-full bg-blue-400 ${isDropdownOpen === "faq" ? "block" : "hidden"}`} // Control visibility
      >
        <div className=" text-white z-50 w-full"> 
          <Link
            href="/faq/hackathon"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200"
          >
            Hackathon
          </Link>
          <Link
            href="/faq/workshops"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Workshops
          </Link>
          <Link
            href="/faq/opening-ceremony"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Opening Ceremony
          </Link>
          <Link
            href="/faq/demo-day"
            className="block px-4 py-2 hover:bg-nav-backround hover:text-gray-200" 
          >
            Demo Day
          </Link>
        </div>
      </div>
    </div>

    <Link href="/registration" className="block px-4 py-2 hover:text-gray-200"> 
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

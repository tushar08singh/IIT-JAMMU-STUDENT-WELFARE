"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi"; // 👈 Icon for dropdown

const Page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Academic Council", href: "/academic-council" },
    { label: "Cultural Council", href: "/cultural-council" },
    { label: "Technical Council", href: "/technical-council" },
    { label: "Sports Council", href: "/sports-council" },
  ];

  return (
    <>
      <Header />

      <main className="relative">
        {/* === Hero Image Section === */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/mainiit.png"
            alt="IIT Main Building"
            fill
            priority
          />

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* === Responsive Navigation Bar === */}
          <nav className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-md shadow-lg z-10 max-w-[95%] sm:max-w-fit">
            {/* Clubs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white text-base sm:text-lg font-semibold hover:text-[#003f87] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Clubs</span>
                <FiChevronDown
                  className={`text-white text-lg transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-40 sm:w-48 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 transition-all duration-200 ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <ul className="flex flex-col text-center py-2">
                  <li>
                    <Link
                      href="/Clubs/Technical"
                      className="block px-3 sm:px-4 py-2 text-white hover:bg-[#003f87]/70 hover:text-white rounded-md transition-all text-sm sm:text-base"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Technical Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Clubs/Cultural"
                      className="block px-3 sm:px-4 py-2 text-white hover:bg-[#003f87]/70 hover:text-white rounded-md transition-all text-sm sm:text-base"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Cultural Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Clubs/Sports"
                      className="block px-3 sm:px-4 py-2 text-white hover:bg-[#003f87]/70 hover:text-white rounded-md transition-all text-sm sm:text-base"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Sports Club
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white text-base sm:text-lg font-semibold hover:text-[#003f87] transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* === Page Content Section === */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 bg-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003f87] mb-6 text-center">
            Welcome to IIT Jammu Student Councils
          </h1>

          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base md:text-lg max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            harum illum voluptatem quos sed sunt, eligendi aspernatur nulla
            nisi! Tenetur, quasi enim. Sequi voluptatem odio ratione magni
            nostrum, consequuntur expedita commodi dicta nesciunt voluptatibus
            voluptates? Blanditiis possimus, voluptas rerum in ex optio sed ut
            voluptatem laboriosam eligendi pariatur distinctio a qui voluptates
            sapiente provident. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris sit amet nibh id leo convallis feugiat.
            Integer fringilla magna vel metus faucibus, a vestibulum purus
            viverra.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;

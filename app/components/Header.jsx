// components/Header.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/Contact-Us" },
    { label: "Team", href: "/Team" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: IIT Logo */}
        <div className="flex items-center space-x-3">
          <Link href="https://www.iitjammu.ac.in/" className="flex items-center transition duration-150 ease-in-out hover:opacity-80">
            <Image
              src="https://res.cloudinary.com/dabviijid/image/upload/v1773992761/iit2updated_ip6fmi.png"
              alt="College Logo"
              width={85}
              height={50}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: SAC Logo + Student Affairs heading */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dabviijid/image/upload/v1773993041/WhatsApp_Image_2026-03-11_at_11.24.42_AM-removebg-preview_tddjlb.png"
            alt="Students Activities Council Logo"
            width={90}
            height={90}
            className="object-contain"
          />
          <h1 className="text-2xl font-extrabold uppercase tracking-widest text-gray-800">
            Student Affairs
          </h1>
        </div>

        {/* Right: Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out font-medium whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

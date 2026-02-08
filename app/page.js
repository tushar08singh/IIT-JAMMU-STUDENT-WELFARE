"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Academic Council", href: "/Clubs/Academic" },
    { label: "Cultural Council", href: "/Clubs/Cultural" },
    { label: "General Council", href: "/Clubs/General" },
    { label: "Sports Council", href: "/Clubs/Sports" },
    { label: "Hostels", href: "/hostels" },
    { label: "Messes", href: "/messes" },
    { label: "Flagship Events", href: "/Flagship-events" },
    { label: "Announcements", href: "/announcements" },
  ];

  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) return;
        const data = await res.json();
        const today = new Date();
        const upcoming = data.filter((e) => new Date(e.date) >= today);
        if (upcoming.length > 0) {
          setEvents(upcoming);
          setShowPopup(true);
        }
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <>
      <Header />

      <main className="relative">
        {/* Hero */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/mainiit.png"
            alt="IIT Main Building"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* ✅ Polished Navbar */}
          <div className="absolute top-4 left-0 right-0 z-10 px-2 sm:px-4">
            <nav
              className="
                mx-auto max-w-6xl
                flex flex-wrap justify-center items-center
                gap-1.5 sm:gap-2
                px-2.5 sm:px-4 py-1.5 sm:py-2
                rounded-2xl 
                bg-white/5 backdrop-blur-lg
                shadow-md
              "
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`
                      text-[11px] sm:text-xs md:text-sm font-semibold
                      px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-white/80 text-[#003f87] shadow"
                          : "text-white/90 hover:text-[#ffcc00] hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Welcome */}
        <section className="px-4 sm:px-8 md:px-16 py-16 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003f87] mb-6">
              Welcome to IIT Jammu Student Councils
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              The Student Affairs division at IIT Jammu fosters holistic development and leadership among students through various councils and initiatives.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const navItems = [
    { label: "Academic Council", href: "/Clubs/Academic" },
    { label: "Cultural Council", href: "/Clubs/Cultural" },
    { label: "Wellness Council", href: "/Clubs/Wellness" },
    { label: "Sports Council", href: "/Clubs/Sports" },
    { label: "Flagship events", href: "/Flagship-events" },
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

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <>
      <Header />

      {/* === Announcements Popup === */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 popup-backdrop">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-[90%] p-6 popup-modal">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-[#003f87] mb-3">📢 Latest Announcements</h2>

            {events.slice(0, 3).map((event) => (
              <div key={event._id} className="mb-3 border-b pb-2 last:border-b-0">
                <p className="font-semibold text-gray-800">{event.title}</p>
                <p className="text-xs text-gray-500">
                  {new Date(event.date).toLocaleDateString("en-IN")}
                </p>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">{event.description}</p>
              </div>
            ))}

            <div className="mt-4 flex justify-end">
              <Link
                href="/announcements"
                className="text-sm font-semibold text-white bg-[#003f87] hover:bg-[#0050b3] px-4 py-2 rounded-full transition"
              >
                View all announcements
              </Link>
            </div>
          </div>

          {/* Popup Animations */}
          <style jsx>{`
            @keyframes popupFadeInBackdrop {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes popupZoomIn {
              0% { opacity: 0; transform: translateY(10px) scale(0.95); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .popup-backdrop { animation: popupFadeInBackdrop 0.25s ease-out; }
            .popup-modal { animation: popupZoomIn 0.3s ease-out; }
          `}</style>
        </div>
      )}

      <main className="relative">
        {/* === Hero Image Section === */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/mainiit.png"
            alt="IIT Main Building"
            fill
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* === Horizontal Navbar  */}
          <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto z-10">
            <nav
              className="
                flex justify-start sm:justify-center items-center gap-3 sm:gap-6 md:gap-5 
                px-3 sm:px-6 py-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg
                overflow-x-auto scrollbar-hide whitespace-nowrap
                scroll-smooth
              "
            >
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    text-white text-sm sm:text-base md:text-lg font-semibold 
                    px-3 sm:px-4 py-1
                    hover:text-[#ffcc00] transition-colors duration-300
                    flex-shrink-0
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* === Welcome Section === */}
        <section className="px-4 sm:px-8 md:px-16 py-16 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003f87] mb-6">
              Welcome to IIT Jammu Student Councils
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              The Student Affairs division at IIT Jammu fosters holistic development and leadership among students through various councils and initiatives.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-6">
              Whether it is academics, culture, sports, or wellness — every student finds a meaningful avenue to explore, express, and excel.
            </p>
          </div>
        </section>

        {/* MESSAGE FROM DEAN STUDENT AFFAIRS */}
        <section className="px-4 sm:px-8 md:px-16 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003f87] text-center mb-10">
              Message from Dean, Student Affairs
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* Dean Photo */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border">
                <Image
                  src="/dean.jpg"   
                  alt="Dean Student Affairs"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dean Message */}
              <div className="flex-1 text-justify">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Dear Students,
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At IIT Jammu, education goes far beyond academic learning. Our Student Affairs division is devoted to building a vibrant, inclusive, and empowering campus environment where each of you can thrive holistically.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I encourage you to actively participate in the various student councils, clubs, and initiatives. Your contributions and enthusiasm shape the spirit of our institute.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">– Dean, Student Affairs, IIT Jammu</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;

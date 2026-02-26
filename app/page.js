"use client";

import React, { useEffect, useRef, useState } from "react";
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

  /* ================= HERO SLIDES ================= */
  const heroImages = [
    "/sports.jpg",
    "/sports.jpg",
    "/sports.jpg",
    "/sports.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef(null);
  const hasUserInteracted = useRef(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!hasUserInteracted.current) {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [heroImages.length]);

  const stopAutoplay = () => {
    if (!hasUserInteracted.current) {
      hasUserInteracted.current = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    stopAutoplay();
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    stopAutoplay();
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index) => {
    stopAutoplay();
    setCurrentSlide(index);
  };

  /* ================= MOTIVATIONAL QUOTES ================= */
  const quotes = [
    "Believe in yourself and all that you are becoming.",
    "Every challenge is an opportunity to grow stronger.",
    "Learning today shapes the leader you become tomorrow.",
    "Consistency and effort matter more than perfection.",
    "Your journey at IIT Jammu is building more than a degree — it’s building you.",
  ];

  const [activeQuote, setActiveQuote] = useState(0);
  const quoteInterval = useRef(null);
  const quoteUserInteracted = useRef(false);

  useEffect(() => {
    quoteInterval.current = setInterval(() => {
      if (!quoteUserInteracted.current) {
        setActiveQuote((prev) => (prev + 1) % quotes.length);
      }
    }, 5000);

    return () => {
      if (quoteInterval.current) clearInterval(quoteInterval.current);
    };
  }, [quotes.length]);

  const goToQuote = (index) => {
    quoteUserInteracted.current = true;
    if (quoteInterval.current) clearInterval(quoteInterval.current);
    setActiveQuote(index);
  };

  return (
    <>
      <Header />

      <main className="relative">
        {/* ================= HERO SLIDESHOW ================= */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] overflow-hidden">
          {heroImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="IIT Jammu Activities"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/40 z-[1]" />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-xs text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-xs text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Navbar */}
          <div className="absolute top-4 left-0 right-0 z-10 px-2 sm:px-4">
            <nav className="mx-auto max-w-6xl flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white/5 backdrop-blur-xs shadow-md">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-[11px] sm:text-xs md:text-sm font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all ${
                      isActive
                        ? "bg-white/80 text-[#003f87] shadow"
                        : "text-white/90 hover:text-[#ffcc00] hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ================= WELCOME ================= */}
        <section className="px-4 sm:px-8 md:px-16 py-16 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003f87] mb-6">
              Welcome to IIT Jammu Student Councils
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              The Student Affairs division at IIT Jammu fosters holistic
              development and leadership among students through various councils
              and initiatives.
            </p>
          </div>
        </section>

        {/* ================= MOTIVATIONAL QUOTES ================= */}
        <section className="bg-[#ffffff] py-4 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003f87] mb-8">
              A Thought for Every Student
            </h2>

            <div className="bg-white rounded-2xl shadow-md px-8 py-10 transition">
              <p className="text-lg sm:text-xl italic text-gray-700">
                “{quotes[activeQuote]}”
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuote(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeQuote
                      ? "bg-[#003f87]"
                      : "bg-[#003f87]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
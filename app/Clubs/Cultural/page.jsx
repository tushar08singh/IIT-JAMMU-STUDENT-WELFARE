"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaInstagram } from "react-icons/fa";

/* -------------------- DATA -------------------- */

const clubs = [
  { name: "Photography Club", image: "/photography.jpg", link: "https://www.instagram.com/chitraka_iitjammu" },
  { name: "Literary Club", image: "/literary.jpg", link: "https://www.instagram.com/sangam.iitjammu" },
  { name: "Dance Club", image: "/dance.jpg", link: "https://www.instagram.com/beat_street.iitjmu" },
  { name: "Drama Club", image: "/drama.jpg", link: "https://www.instagram.com/the_dramatizers_iitjammu" },
  { name: "Music Club", image: "/music.jpg", link: "https://www.instagram.com/malang_iitjammu" },
  { name: "Fine Arts Club", image: "/artihc.jpg", link: "https://www.instagram.com/artihc.iitjammu" },
  { name: "Anime Club", image: "/anime.jpg", link: "https://www.instagram.com/anisoul_iitjmu" },
  { name: "Cooking Club", image: "/cooking.jpg", link: "https://www.instagram.com/cookingclub.iitjammu" }
];

const associateDean = {
  name: "Dr. Devi Lal",
  photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg",
  post: "Associate Dean (Student Affairs)"
};

const secretary = {
  name: "Saumya Gupta",
  photo: "/cultural secretary.jpeg",
  post: "Cultural Secretary"
};

/* -------------------- PAGE -------------------- */

export default function Page() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="relative max-w-[1200px] mx-auto h-[500px] rounded-xl overflow-hidden mt-6">
        <Image src="/anhad.jpg" alt="Cultural Council" fill className="object-cover brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
          <h1 className="text-[#003f87] text-5xl sm:text-6xl md:text-8xl font-bold">
            Cultural Council
          </h1>
          <p className="text-[#003f87] text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* ASSOCIATE DEAN + SECRETARY SECTION */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ASSOCIATE DEAN CARD */}
          <div className="bg-blue-50 rounded-xl p-8 text-center shadow">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src={associateDean.photo}
                alt={associateDean.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#003f87]">
              {associateDean.name}
            </h2>
            <p className="text-gray-700">{associateDean.post}</p>
          </div>

          {/* SECRETARY CARD */}
          <div className="bg-blue-50 rounded-xl p-8 text-center shadow">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src={secretary.photo}
                alt={secretary.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#003f87]">
              {secretary.name}
            </h2>
            <p className="text-gray-700">{secretary.post}</p>
          </div>

        </div>
      </div>

      {/* CLUBS */}
      <section className="bg-blue-50 mt-20 py-16">
        <h2 className="text-center text-4xl font-bold text-[#003f87] mb-12">
          Our Clubs
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {clubs.map((club, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition">
              <div
                className="group relative w-full aspect-[4/3] sm:h-64 cursor-pointer overflow-hidden bg-white"
                onClick={() => setSelectedClub(club)}
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-contain sm:object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] mb-4">
                  {club.name}
                </h3>
                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-white bg-[#003f87] hover:bg-[#06376e] px-4 py-2 rounded-lg font-semibold transition"
                >
                  <FaInstagram size={20} /> See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
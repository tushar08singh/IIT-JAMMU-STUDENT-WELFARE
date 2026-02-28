"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaInstagram } from "react-icons/fa";

/* -------------------- DATA -------------------- */

const clubs = [
  { name: "Nature and Adventure Club", image: "/NAC test.png", link: "https://www.instagram.com/nac_iitjmu" },
  { name: "Kritash Club", image: "/kritash.jpg", link: "https://www.instagram.com/kritash_iitjammu" },
  { name: "RE4M Club", image: "/RE4M.jpg", link: "https://www.instagram.com/re4m_iitjammu" },
  { name: "Mesh Club", image: "/mesh.jpg", link: "https://www.instagram.com/mesh.iitjammu" },
  { name: "Ek Bharat Shreshtha Bharat", image: "/ebsb.jpg", link: "https://www.instagram.com/ebsb.iitjammu" },
  { name: "Wellbeing Club", image: "/wellbeing.jpg", link: "https://www.instagram.com/wellbeing.iitjammu" }
];

const associateDean = {
  name: "Dr. Devi Lal",
  photo:
    "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg",
  post: "Associate Dean (Student Affairs)"
};

const secretary = {
  name: "Ayush Sharma",
  photo: "/general secretary.jpeg",
  post: "General Secretary"
};

export default function Page() {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="General Council Clubs"
          src="/mainiit.png"
          fill
          className="object-cover blur-[1.5px] brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#003f87] text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            General Council
          </p>
          <p className="text-[#003f87] text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* ASSOCIATE DEAN + SECRETARY */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Associate Dean Card */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center p-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6">
              <Image
                src={associateDean.photo}
                alt={associateDean.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003f87] text-center">
              {associateDean.name}
            </h2>
            <p className="text-gray-700 text-lg mt-1 text-center">
              {associateDean.post}
            </p>
          </div>

          {/* Secretary Card */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center p-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6">
              <Image
                src={secretary.photo}
                alt={secretary.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003f87] text-center">
              {secretary.name}
            </h2>
            <p className="text-gray-700 text-lg mt-1 text-center">
              {secretary.post}
            </p>
          </div>

        </div>
      </div>

      {/* Clubs Section (unchanged) */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Clubs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] sm:h-64 overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-contain sm:object-cover"
                />
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
      </div>

      <Footer />
    </>
  );
}
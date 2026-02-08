"use client"

import React, { useState } from "react"
import Image from "next/image"
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { FaInstagram } from "react-icons/fa"

const clubs = [
  { name: "Coding Club", image: "/coding.jpg", link: "https://www.instagram.com/codeclub.iitjmu" },
  { name: "SAE Club", image: "/sae.jpg", link: "https://www.instagram.com/sae_iitjmu" },
  { name: "Robo-sapiens Club", image: "/robotics.jpg", link: "https://www.instagram.com/robosapiens_iitjammu" },
  { name: "Astriaza Club", image: "/astronomy.jpg", link: "https://www.instagram.com/astriaza_iitjmu" },
  { name: "FinTech Club", image: "/fintech.jpg", link: "https://www.instagram.com/fintech.iitjmu" }
]

const coordinators = [
  { name: "Soham Kakkar", photo: "/coding coordinator.jpg", club: "Coding Club" },
  { name: "Third Year", photo: "/sae coordinator.png", club: "SAE Club" },
  { name: "Rudransh Joshi", photo: "/sae co-coordinator.jpg", club: "SAE Club", role: "Co-Coordinator" },
  { name: "Hriday Rana", photo: "/robotics coordinator.jpg", club: "Robo-sapiens Club" },
  { name: "Vaibhav Mittal", photo: "/astriaza coordinator.jpg", club: "Astriaza Club" },
  { name: "Khushi", photo: "/fintech coordinator.png", club: "FinTech Club" }
]

const PICs = [
  { name: "Sumit Kumar Pandey", photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941883/PIC_coding_xylort.jpg", club: "Coding Club" },
  { name: "Dr. Arvind Kumar Rajput", photo: "/PIC sae.jpeg", club: "SAE Club" },
  { name: "Nalin Kumar Sharma", photo: "/PIC robotics.jpg", club: "Robo-sapiens Club" },
  { name: "Soumyadip Das", photo: "/PIC astriaza.jpg", club: "Astriaza Club" },
  { name: "Dr. Vijay Kumar Pal", photo: "/PIC fintech.jpeg", club: "FinTech Club" }
]

// Academic Secretary
const secretary = {
  name: "Aman Pathak",
  photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_2_jcbwsp.jpg",
  post: "Academic Secretary"
}

export default function Page() {
  const [selectedClub, setSelectedClub] = useState(null)

  const clubPICs = PICs.filter(p => p.club === selectedClub?.name)
  const clubCoordinators = coordinators.filter(c => c.club === selectedClub?.name)

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="Academic Council"
          src="/drone.jpg"
          fill
          className="object-cover blur-[1.5px] brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#003f87]
text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            Academic Council
          </p>
          <p className="text-[#003f87]
 text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Academic Secretary Section */}
      <div className="max-w-sm mx-auto py-16 sm:py-20 mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center px-6">
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
        <p className="text-gray-700 text-lg mt-1 text-center">{secretary.post}</p>
      </div>

      {/* Our Clubs */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Clubs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-0">
          {clubs.map((club, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div
                className="relative w-full h-64 cursor-pointer group"
                onClick={() => setSelectedClub(club)}
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] mb-4">
                  {club.name}
                </h3>
                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-white bg-[#003f87] hover:bg-[#06376e] px-4 py-2 rounded-lg text-center font-semibold transition-colors duration-300"
                >
                  <FaInstagram size={20} /> See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedClub && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedClub(null)}
        >
          <div
            className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48">
              <Image
                src={selectedClub.image}
                alt={selectedClub.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h2 className="absolute bottom-4 left-6 text-3xl sm:text-4xl font-bold text-white">
                {selectedClub.name}
              </h2>
              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black px-3 py-1 rounded-full font-bold shadow"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-10 max-h-[70vh] overflow-y-auto">
              {/* PICs */}
              <div>
                <h3 className="text-2xl font-semibold text-[#003f87] mb-4">
                  Person In-Charge (PICs)
                </h3>
                <div className="flex flex-wrap gap-4">
                  {clubPICs.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 w-full sm:w-[48%] md:w-[45%] hover:shadow-lg transition"
                    >
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                        <Image src={p.photo} alt={p.name} fill className="object-cover" />
                      </div>
                      <p className="font-semibold text-gray-800">{p.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-2xl font-semibold text-[#003f87] mb-4">
                  Coordinators
                </h3>
                <div className="flex flex-wrap gap-4">
                  {clubCoordinators.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-green-50 rounded-xl p-4 w-full sm:w-[48%] md:w-[45%] hover:shadow-lg transition"
                    >
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                        <Image src={c.photo} alt={c.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{c.name}</p>
                        <span className="text-sm text-gray-600">
                          {c.role || "Coordinator"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </>
  )
}

"use client"

import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const messes = [
  {
    name: "Canary Mess",
    location: "L-112",
    type: "Boys Hostel Mess",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
    capacity: "400+ students",
    image: "/messes/canary-mess.jpg",
    contact: "Mess Manager: +91 9XXXXXXXXX",
  },
  {
    name: "Dedhar Mess",
    location: "L-120",
    type: "Boys Hostel Mess",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
    capacity: "350+ students",
    image: "/messes/dedhar-mess.jpg",
    contact: "Mess Manager: +91 9XXXXXXXXX",
  },
  {
    name: "Egret Mess",
    location: "1B",
    type: "Girls Hostel Mess",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
    capacity: "300+ students",
    image: "/messes/egret-mess.jpg",
    contact: "Mess Manager: +91 9XXXXXXXXX",
  },
  {
    name: "Annapurna Mess (2nd Floor)",
    location: "Fulgar – 1C",
    type: "Common Mess",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
    capacity: "450+ students",
    image: "/messes/annapurna-2nd.jpg",
    contact: "Mess Supervisor: +91 9XXXXXXXXX",
  },
  {
    name: "Annapurna Mess (3rd Floor)",
    location: "Fulgar – 1C",
    type: "Common Mess",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
    capacity: "450+ students",
    image: "/messes/annapurna-3rd.jpg",
    contact: "Mess Supervisor: +91 9XXXXXXXXX",
  },
]

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1200px] h-[420px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="Mess Facilities IIT Jammu"
          src="/messes/mess-hero.jpg"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-white text-5xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
            Mess Facilities
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Messes Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Messes
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 px-4 sm:px-6">
          {messes.map((mess, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
            >
              {/* Mess Image */}
              <div className="relative w-full md:w-1/3 h-56 md:h-auto">
                <Image
                  src={mess.image}
                  alt={mess.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mess Info */}
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-[#003f87] mb-2">
                  {mess.name}
                </h3>

                <p className="text-gray-700 mb-2">
                  📍 <span className="font-semibold">Location:</span> {mess.location}
                </p>
                <p className="text-gray-700 mb-2">
                  🏢 <span className="font-semibold">Type:</span> {mess.type}
                </p>
                <p className="text-gray-700 mb-4">
                  👥 <span className="font-semibold">Capacity:</span> {mess.capacity}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-blue-50 rounded-xl p-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-800">Breakfast</p>
                    <p className="text-sm text-gray-600">{mess.timings.breakfast}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lunch</p>
                    <p className="text-sm text-gray-600">{mess.timings.lunch}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Dinner</p>
                    <p className="text-sm text-gray-600">{mess.timings.dinner}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  📞 <span className="font-semibold">Contact:</span> {mess.contact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

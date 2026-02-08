"use client"

import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const hostels = [
  {
    name: "Braeg Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?college,hostel,building",
    warden: { name: "Mr. Rajesh Kumar", photo: "/hostels/braeg-warden.jpg" },
    caretaker: { name: "Mr. Suresh Lal", photo: "/hostels/braeg-caretaker.jpg" },
  },
  {
    name: "Dedhar Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?student,hostel,dormitory",
    warden: { name: "Mr. Anil Singh", photo: "/hostels/dedhar-warden.jpg" },
    caretaker: { name: "Mr. Ramesh Thakur", photo: "/hostels/dedhar-caretaker.jpg" },
  },
  {
    name: "Canary Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?university,hostel,building",
    warden: { name: "Ms. Kavita Mehta", photo: "/hostels/canary-warden.jpg" },
    caretaker: { name: "Mr. Manoj Kumar", photo: "/hostels/canary-caretaker.jpg" },
  },
  {
    name: "Fulgar Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?campus,hostel,rooms",
    warden: { name: "Dr. Pankaj Joshi", photo: "/hostels/fulgar-warden.jpg" },
    caretaker: { name: "Mr. Raju Verma", photo: "/hostels/fulgar-caretaker.jpg" },
  },
  {
    name: "Egret Hostel (Girls)",
    image: "https://source.unsplash.com/1200x800/?girls,hostel,campus",
    warden: { name: "Ms. Sunita Rao", photo: "/hostels/egret-warden.jpg" },
    caretaker: { name: "Ms. Pooja Devi", photo: "/hostels/egret-caretaker.jpg" },
  },
]

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1200px] h-[420px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="Hostels IIT Jammu"
          src="https://source.unsplash.com/1600x900/?university,hostel"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-white text-5xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
            Hostels
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Hostels Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Hostels
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 px-4 sm:px-6">
          {hostels.map((hostel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
            >
              {/* Hostel Image */}
              <div className="relative w-full md:w-1/3 h-56 md:h-auto">
                <Image
                  src={hostel.image}
                  alt={hostel.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hostel Content */}
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-[#003f87] mb-4">
                  {hostel.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Warden */}
                  <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={hostel.warden.photo}
                        alt={hostel.warden.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {hostel.warden.name}
                      </p>
                      <p className="text-sm text-gray-600">Warden</p>
                    </div>
                  </div>

                  {/* Caretaker */}
                  <div className="flex items-center gap-4 bg-green-50 rounded-xl p-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={hostel.caretaker.photo}
                        alt={hostel.caretaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {hostel.caretaker.name}
                      </p>
                      <p className="text-sm text-gray-600">Caretaker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

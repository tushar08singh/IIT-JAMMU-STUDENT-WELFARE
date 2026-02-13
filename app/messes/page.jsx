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

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003f87]">
            Our Messes
          </h2>
          <div className="w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 px-6">
          {messes.map((mess, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/3 h-56 md:h-auto">
                <Image
                  src={mess.image}
                  alt={mess.name}
                  fill
                  className="object-cover"
                />
              </div>

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
                    <p className="font-semibold">Breakfast</p>
                    <p className="text-sm text-gray-600">{mess.timings.breakfast}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Lunch</p>
                    <p className="text-sm text-gray-600">{mess.timings.lunch}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Dinner</p>
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

      {/* Mess Administration & Committee Section */}
<section className="bg-white py-20">
  <div className="text-center mb-14">
    <h2 className="text-4xl font-extrabold text-[#003f87]">
      Mess Administration & Committee
    </h2>
    <div className="w-32 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">

    {/* AD - Mess Management */}
    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/arvind-kumar.jpg" alt="Dr. Arvind Kumar" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">AD - Mess Management</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Arvind Kumar</p>
      </div>
    </div>

    {/* Wardens */}
    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/akash-awale.jpg" alt="Dr. Akash Subhash Awale" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Warden - Canary</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Akash Subhash Awale</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/soumyadip-das.jpg" alt="Dr. Soumyadip Das" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Warden - Fulgar</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Soumyadip Das</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/ved-prakash.jpg" alt="Dr. Ved Prakash Ranjan" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Warden - Dedhar</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Ved Prakash Ranjan</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/guru-ramani.jpg" alt="Dr. Guru B Ramani" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Warden - Anz</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Guru B Ramani</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/riya-bhowmik.jpg" alt="Dr. Riya Bhowmik" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Warden - Egret</h3>
        <p className="text-gray-700 font-semibold mt-1">Dr. Riya Bhowmik</p>
      </div>
    </div>

    {/* Manager & Secretaries */}
    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/rehana-rasool.jpg" alt="Ms. Rehana Rasool" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Manager</h3>
        <p className="text-gray-700 font-semibold mt-1">Ms. Rehana Rasool</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/ujjwal-gupta.jpg" alt="Ujjwal Gupta" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Secretary</h3>
        <p className="text-gray-700 font-semibold mt-1">Ujjwal Gupta</p>
      </div>
    </div>

    

    
    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/devansh.jpg" alt="Devansh Agrawal" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Devansh Agrawal</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/gayatri.jpg" alt="Gayatri" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Gayatri</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/gurpreet.jpg" alt="Gurpreet Singh" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Gurpreet Singh</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/anish.jpg" alt="Anish Kumar Yadav" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Anish Kumar Yadav</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/sidharth.jpg" alt="Sidharth Gupta" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Sidharth Gupta</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/yashika.jpg" alt="Yashika" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Yashika</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/ashad.jpg" alt="Ashad Mansoori" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Ashad Mansoori</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/shubham.jpg" alt="Shubham Kumar" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Shubham Kumar</p>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      <div className="relative w-full h-56 bg-gray-200">
        <Image src="/committee/riant.jpg" alt="Riant Dadra" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">Mess Committee Member</h3>
        <p className="text-gray-700 font-semibold mt-1">Riant Dadra</p>
      </div>
    </div>

  </div>
</section>


      <Footer />
    </>
  )
}

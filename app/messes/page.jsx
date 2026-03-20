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

function Card({ title, name, img }) {
  return (
    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center">
      {/* FIXED IMAGE */}
      <div className="relative w-full aspect-[3/4] bg-gray-100">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#003f87]">{title}</h3>
        <p className="text-gray-700 font-semibold mt-1">{name}</p>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />

      {/* ================= MESS SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
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
              <div className="flex-1 p-6 text-center">
                <h3 className="text-2xl font-bold text-[#003f87] mb-2">
                  {mess.name}
                </h3>

                <p>📍 {mess.location}</p>
                {/* <p>🏢 {mess.type}</p> */}
                <p>👥 {mess.capacity}</p>
                <p className="mt-2">📞 {mess.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMMITTEE SECTION ================= */}
      <section className="bg-white py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#003f87]">
            Mess Administration & Committee
          </h2>
          <div className="w-32 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">

          {/* ALL CARDS (FULL) */}
          <Card title="AD - Mess Management" name="Dr. Arvind Kumar"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/arvind_kumar_gsgvrr.jpg" />

          <Card title="Mess Warden - Canary" name="Dr. Akash Subhash Awale"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709263/akash_a5ntu2.jpg" />

          <Card title="Mess Warden - Fulgar" name="Dr. Soumyadip Das"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747077/Soumyadip_Das_yuepd1.jpg" />

          <Card title="Mess Warden - Dedhar" name="Dr. Ved Prakash Ranjan"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747072/Ved_Prakash_jiuzku.png" />

          <Card title="Mess Warden - Egret" name="Dr. Riya Bhowmik"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg" />

          <Card title="Mess Manager" name="Ms. Rehana Rasool"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747088/rehana_pic_tcrwf2.jpg" />

          <Card title="Mess Secretary" name="Ujjwal Gupta"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747073/Ujjwal_Gupta_Mess_secretary_mpxpzz.jpg" />

          <Card title="Mess Committee Member" name="Devansh Agrawal"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747101/DevanshAgrawal_2023ume0254_Fulgar2ndFloor_mp3qa5.jpg" />

          <Card title="Mess Committee Member" name="Gayatri"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747095/Gayatri_2025PMD0057_lrsn3l.jpg" />

          <Card title="Mess Committee Member" name="Gurpreet Singh"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747126/gurpreet_singh_2024ucs0091_egret_ivnsur.jpg" />

          <Card title="Mess Committee Member" name="Anish Kumar Yadav"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747114/anishyadav_scvffb.jpg" />

          <Card title="Mess Committee Member" name="Sidharth Gupta"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747081/Sidharth_Gupta_2024UMA0228_Dedhar_vrrkap.jpg" />

          <Card title="Mess Committee Member" name="Ashad Mansoori"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/Ashad_2023UME0247_2ndfloor_govgtu.jpg" />

          <Card title="Mess Committee Member" name="Shubham Kumar"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747505/Shubham_Kumar_page-0001_n5dzxn.jpg" />

          <Card title="Mess Committee Member" name="Riant Dadra"
            img="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747123/riant_snt1l8.jpg" />

        </div>
      </section>

      <Footer />
    </>
  )
}
"use client"

import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Page() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full max-w-[1200px] h-[420px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="Mess Facilities IIT Jammu"
          src="/messes/mess-hero.jpg"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">
            Mess Facilities
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* ================= HIERARCHY SECTION ================= */}
      <section className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#003f87]">
            Mess Administration & Committee
          </h2>
          <div className="w-40 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* ================= FACULTY ADMINISTRATION ================= */}
          <div>
            <h3 className="text-3xl font-bold text-[#003f87] text-center mb-14">
              Faculty Administration
            </h3>

            {/* Dean */}
            <div className="text-center mb-20">
              <h4 className="text-xl font-semibold text-gray-700 mb-6">Dean</h4>
              <div className="flex justify-center">
                <div className="bg-blue-50 rounded-xl shadow-lg w-72 overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/arvind_kumar_gsgvrr.jpg"
                      alt="Dean"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-bold text-[#003f87]">
                      Dr. Arvind Kumar
                    </p>
                    <p className="text-gray-600">Dean</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Associate Deans */}
            <div className="mb-20">
              <h4 className="text-xl font-semibold text-gray-700 text-center mb-10">
                Associate Deans
              </h4>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    name: "Dr. Akash Subhash Awale",
                    img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747119/Akash_Subhash_Awale_sfbaah.jpg"
                  },
                  {
                    name: "Dr. Soumyadip Das",
                    img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747077/Soumyadip_Das_yuepd1.jpg"
                  },
                  {
                    name: "Dr. Ved Prakash Ranjan",
                    img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747072/Ved_Prakash_jiuzku.png"
                  }
                ].map((person, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl shadow-md text-center overflow-hidden w-64">
                    <div className="relative w-full h-56">
                      <Image src={person.img} alt={person.name} fill className="object-contain" />
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-[#003f87]">{person.name}</p>
                      <p className="text-gray-600">Associate Dean</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wardens & Mess Manager (CENTERED) */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 text-center mb-10">
                Wardens & Mess Manager
              </h4>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "Dr. Guru B Ramani", role: "Warden - Anz", img: "/committee/guru-ramani.jpg" },
                  { name: "Dr. Riya Bhowmik", role: "Warden - Egret", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg" },
                  { name: "Ms. Rehana Rasool", role: "Mess Manager", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747088/rehana_pic_tcrwf2.jpg" }
                ].map((person, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl shadow-md text-center overflow-hidden w-64">
                    <div className="relative w-full h-48">
                      <Image src={person.img} alt={person.name} fill className="object-contain" />
                    </div>
                    <div className="p-4">
                      <p className="font-bold text-[#003f87]">{person.name}</p>
                      <p className="text-gray-600 text-sm">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= STUDENT COMMITTEE ================= */}
          <div>
            <h3 className="text-3xl font-bold text-[#003f87] text-center mb-14">
              Student Committee
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Ayush Sharma",
                  role: "General Secretary",
                  img: "/committee/ayush-sharma.jpg"
                },
                {
                  name: "Ujjwal Gupta",
                  role: "Mess Secretary",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747073/Ujjwal_Gupta_Mess_secretary_mpxpzz.jpg"
                },
                {
                  name: "Devansh Agrawal",
                  role: "Student Member",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747101/DevanshAgrawal_2023ume0254_Fulgar2ndFloor_mp3qa5.jpg"
                },
                {
                  name: "Gayatri",
                  role: "Student Member",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747095/Gayatri_2025PMD0057_lrsn3l.jpg"
                },
                {
                  name: "Gurpreet Singh",
                  role: "Student Member",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747126/gurpreet_singh_2024ucs0091_egret_ivnsur.jpg"
                },
                {
                  name: "Anish Kumar Yadav",
                  role: "Student Member",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747114/anishyadav_scvffb.jpg"
                },
                {
                  name: "Sidharth Gupta",
                  role: "Student Member",
                  img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747081/Sidharth_Gupta_2024UMA0228_Dedhar_vrrkap.jpg"
                },
                {
                  name: "Yashika",
                  role: "Student Member",
                  img: "/committee/yashika.jpg"
                }
              ].map((person, i) => (
                <div key={i} className="bg-blue-50 rounded-xl shadow-md text-center overflow-hidden w-64">
                  <div className="relative w-full h-48">
                    <Image src={person.img} alt={person.name} fill className="object-contain" />
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-[#003f87]">{person.name}</p>
                    <p className="text-gray-600 text-sm">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";

/* ================= DATA ================= */

const messes = [

  {
    name: "Annapurna Mess (2nd Floor)",
    location: "Fulgar – 1C",
    capacity: "450+ students",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774091913/IMG_4608_crp7dc.jpg",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
  },
  {
    name: "Annapurna Mess (3rd Floor)",
    location: "Fulgar – 1C",
    capacity: "450+ students",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774091913/IMG_4608_crp7dc.jpg",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
  },
   {
    name: "Egret Mess",
    location: "1B",
    capacity: "300+ students",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774081450/WhatsApp_Image_2026-03-21_at_12.53.35_ihcqzm.jpg",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
  },
  {
    name: "Canary Mess",
    location: "L-112",
    capacity: "400+ students",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774081543/WhatsApp_Image_2026-03-21_at_12.53.37_m1lmqn.jpg",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
  },
  {
    name: "Dedhar Mess",
    location: "L-120",
    capacity: "350+ students",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774081499/WhatsApp_Image_2026-03-21_at_12.53.41_z36ha2.jpg",
    timings: {
      breakfast: "7:30 AM – 9:30 AM",
      lunch: "12:30 PM – 2:30 PM",
      dinner: "7:30 PM – 9:30 PM",
    },
  },
 
  
];

const committee = [
  { title: "AD - Mess Management", name: "Dr. Arvind Kumar", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/arvind_kumar_gsgvrr.jpg" },
  { title: "Mess Warden - Canary", name: "Dr. Akash Subhash Awale", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709263/akash_a5ntu2.jpg" },
  { title: "Mess Warden - Fulgar", name: "Dr. Soumyadip Das", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747077/Soumyadip_Das_yuepd1.jpg" },
  { title: "Mess Warden - Dedhar", name: "Dr. Ved Prakash Ranjan", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747072/Ved_Prakash_jiuzku.png" },
  { title: "Mess Warden - Egret", name: "Dr. Riya Bhowmik", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg" },
  { title: "Mess Manager", name: "Ms. Rehana Rasool", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747088/rehana_pic_tcrwf2.jpg" },
  { title: "Mess Secretary", name: "Ujjwal Gupta", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747073/Ujjwal_Gupta_Mess_secretary_mpxpzz.jpg" },
  { title: "Mess Committee Member", name: "Devansh Agrawal", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747101/DevanshAgrawal_2023ume0254_Fulgar2ndFloor_mp3qa5.jpg" },
  { title: "Mess Committee Member", name: "Gayatri", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747095/Gayatri_2025PMD0057_lrsn3l.jpg" },
  { title: "Mess Committee Member", name: "Gurpreet Singh", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747126/gurpreet_singh_2024ucs0091_egret_ivnsur.jpg" },
  { title: "Mess Committee Member", name: "Anish Kumar Yadav", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747114/anishyadav_scvffb.jpg" },
  { title: "Mess Committee Member", name: "Sidharth Gupta", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747081/Sidharth_Gupta_2024UMA0228_Dedhar_vrrkap.jpg" },
  { title: "Mess Committee Member", name: "Ashad Mansoori", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/Ashad_2023UME0247_2ndfloor_govgtu.jpg" },
  { title: "Mess Committee Member", name: "Shubham Kumar", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747505/Shubham_Kumar_page-0001_n5dzxn.jpg" },
  { title: "Mess Committee Member", name: "Riant Dadra", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747123/riant_snt1l8.jpg" },
];

/* ================= CARD ================= */

const Card = ({ title, name, img }) => (
  <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition">
    <div className="relative w-full aspect-[3/4] bg-gray-100">
      <Image src={img} alt={name} fill className="object-contain p-2" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-[#003f87]">{title}</h3>
      <p className="text-gray-700 font-semibold mt-1">{name}</p>
    </div>
  </div>
);

/* ================= PAGE ================= */

export default function Page() {
  return (
    <>
      <Header />

      {/* LOGO CARD */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="relative w-[260px] aspect-[460/800]">
            <Image
              src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1774080565/WhatsApp_Image_2026-03-21_at_03.16.56_db9we9.jpg"
              alt="Mess Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[#003f87] text-4xl font-bold mt-4">
            IIT Jammu
          </h1>
        </div>
      </div>

      {/* MESS SECTION */}
      <section className="bg-blue-50 py-16 mt-10">
        <div className="max-w-6xl mx-auto space-y-10 px-6">
          {messes.map((mess, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center">

              {/* BIG CENTERED IMAGE */}
              <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={mess.image}
                  alt={mess.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT BELOW */}
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl font-bold text-[#003f87]">
                  {mess.name}
                </h3>

                <p>📍 {mess.location}</p>
                <p>👥 {mess.capacity}</p>

                <div className="flex justify-center items-center gap-2">
                  <FaPhoneAlt />
                  <span>Not Available</span>
                </div>

                <div className="mt-3 text-gray-600">
                  <p>🍳 {mess.timings.breakfast}</p>
                  <p>🍛 {mess.timings.lunch}</p>
                  <p>🌙 {mess.timings.dinner}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* COMMITTEE */}
      <section className="bg-white py-20">
        <h2 className="text-center text-4xl font-bold text-[#003f87] mb-12">
          Mess Administration & Committee
        </h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
          {committee.map((c, i) => (
            <Card key={i} {...c} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
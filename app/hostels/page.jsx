"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ================= DATA ================= */

const hostels = [

   {
    name: "Fulgar Hostel (Boys)",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774091910/IMG_4600_ywthft.jpg",
    warden: {
      name: "Krishna Mohan Gupta",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709289/krishna_gmox4k.jpg",
      phone: "+91 ",
      email: "warden.fulgar@iitjammu.ac.in",
    },
    caretaker: {
      name: "Majid Bashir",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709377/majid_jvbkdo.jpg",
      phone: "+91 ",
      email: "caretaker.fulgar@iitjammu.ac.in",
    },
    extraCaretaker: {
      name: "Anish Koul",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709299/anish_jfjwap.jpg",
      phone: "+91 ",
      email: "caretaker.fulgar@iitjammu.ac.in",
    },
    wellnessWarden: {
      name: "Sumit Raj Ghosh",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709345/sumit_kikdod.jpg",
      phone: "+91 9709111227",
    },
  },

   {
    name: "Egret Hostel (Girls)",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774092815/IMG-20260320-WA0004.jpg_mg1dal.jpg",
    warden: {
      name: "Dr. Riya Bhowmik",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg",
      phone: "+91 9765432109",
      email: "sunita.rao@iitjammu.ac.in",
    },
    caretaker: {
      name: "Ms. Pooja Devi",
      photo: "/hostels/egret-caretaker.jpg",
      phone: "+91 9876540987",
      email: "pooja.devi@iitjammu.ac.in",
    },
  },
  {
    name: "Braeg Hostel (Boys)",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774091838/WhatsApp_Image_2026-03-21_at_16.46.37_wthdth.jpg",
    warden: {
      name: "Dr. Ved Prakash Ranjan",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747072/Ved_Prakash_jiuzku.png",
      phone: "+91-1912571236",
      email: "warden.braeg@iitjammu.ac.in",
    },
    wellnessWarden: {
      name: "Mr. Sumit Raj Ghosh",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709345/sumit_kikdod.jpg",
      phone: "+91 9709111227",
    },
    caretaker: {
      name: "Mr. Md. Tabrej",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709242/tabrej_ezvlc2.png",
      phone: "+91 8875875803",
    },
    attendant: {
      name: "Mr. Ajay Kumar",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709026/ajay_hx6u5j.png",
      phone: "+91 9858145319",
    },
  },
  {
    name: "Dedhar Hostel (Girls)",
    image: "https://source.unsplash.com/1200x800/?student,hostel,dormitory",
    warden: {
      name: "Dr. Garima Singh",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709322/warden_dedhar_f7n6dg.jpg",
      phone: "+91 9988776655",
      email: "anil.singh@iitjammu.ac.in",
    },
    caretaker: {
      name: "Tasaduq Gul",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709332/caretaker_dedhar_nb0d5l.jpg",
      phone: "+91 9090909090",
      email: "ramesh.thakur@iitjammu.ac.in",
    },
  },
  {
    name: "Canary Hostel (Boys)",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774091914/IMG_5802_qenuqc.jpg",
    warden: {
      name: "Akash Awale",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709263/akash_a5ntu2.jpg",
      phone: "+91 ",
      email: "warden.canary@iitjammu.ac.in",
    },
    caretaker: {
      name: "Irfan Ahmad Teli",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709277/irfan_plq41j.jpg",
      phone: "+91 6005257797",
      email: "caretaker.canary@iitjammu.ac.in",
    },
  },
 
  
];

/* ================= PAGE ================= */

export default function Page() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 mt-16">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Hostels
          </h2>
          <div className="w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        {/* HOSTELS */}
        <div className="max-w-6xl mx-auto space-y-10 px-6">
          {hostels.map((hostel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">

              {/* IMAGE */}
              <div className="relative w-full max-w-[600px] mx-auto aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <Image
                  src={hostel.image}
                  alt={hostel.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* NAME */}
              <h3 className="text-2xl font-bold text-[#003f87] mb-6">
                {hostel.name}
              </h3>

              {/* STAFF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {[
                  { role: "Warden", data: hostel.warden },
                  { role: "Wellness Warden", data: hostel.wellnessWarden },
                  { role: "Caretaker", data: hostel.caretaker },
                  { role: "Hostel Attendant", data: hostel.attendant },
                  { role: "Caretaker", data: hostel.extraCaretaker },
                ]
                  .filter(item => item.data)
                  .map((item, i) => (
                    <div key={i} className="flex gap-4 bg-blue-50 rounded-xl p-4 text-left">

                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={item.data.photo}
                          alt={item.data.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-1 inline-block">
                          {item.role}
                        </span>

                        <p className="font-semibold">{item.data.name}</p>
                        <p className="text-sm text-gray-600">{item.data.phone}</p>
                        <p className="text-sm text-gray-600">{item.data.email}</p>
                      </div>

                    </div>
                  ))}

              </div>

            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}
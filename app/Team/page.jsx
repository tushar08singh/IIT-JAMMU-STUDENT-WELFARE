"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
      <Header />

      <div className="bg-[#f5f9ff] min-h-screen py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-[#0b3c7d] mb-16">
          Our Team
        </h1>

        {/* ================= ADMINISTRATION ================= */}
        <section className="max-w-7xl mx-auto mb-24 space-y-20">

          {/* Dean */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d] mb-10">
              Dean Student Affairs
            </h2>

            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_1_bselui.jpg"
                  alt="Dean Student Affairs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-[#0b3c7d]">
                  Dr. Anup Shukla
                </p>
              </div>
            </div>
          </div>

          {/* Associate Dean */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d] mb-10">
              Associate Dean
            </h2>

            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg"
                  alt="Associate Dean"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-[#0b3c7d]">
                  Dr. Devi Lal
                </p>
              </div>
            </div>
          </div>

          {/* Assistant Registrar */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d] mb-10">
              Assistant Registrar, Student Affairs
            </h2>

            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/assistant registrar final.png"
                  alt="Assistant Registrar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-[#0b3c7d]">
                  Dr. R. P. Prajapat
                </p>
              </div>
            </div>
          </div>

          {/* OIC */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d] mb-10">
              Officer In-Charge (Student Affairs)
            </h2>

            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768643274/WhatsApp_Image_2026-01-17_at_15.13.52_mtjplz.jpg"
                  alt="OIC Student Affairs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-[#0b3c7d]">
                  Vishal Begnehal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STUDENT AFFAIRS COUNCIL ================= */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">
              Student Affairs Council
            </h2>
            <div className="w-32 h-1 bg-[#0b3c7d] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { role: "General Secretary", name: "Ayush Sharma", img: "/general secretary.jpeg" },
              { role: "Academic Secretary", name: "Aman Pathak", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_2_jcbwsp.jpg" },
              { role: "PG Academic Secretary", name: "Chirag Prajapati", img: "/pg academic secretary.jpg" },
              
              { role: "Cultural Secretary", name: "Saumya Gupta", img: "/cultural secretary.jpeg" },
              { role: "Hostel Affairs Secretary (Girls)", name: "Mishthi Agarwal", img: "/hostel secretary girls.jpg" },
              { role: "Hostel Affairs Secretary (Boys)", name: "Mehul Gupta", img: "/hostel secretary boys.jpeg" },
              { role: "Sports Secretary", name: "Sandeep Moond", img: "/sports secretary.png" },
              { role: "Wellness Secretary", name: "Owais Ansar", img: "/wellness secretary.png" },
              { role: "Mess Secretary", name: "Ujjwal Gupta", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747073/Ujjwal_Gupta_Mess_secretary_mpxpzz.jpg" }
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={member.img}
                    alt={member.role}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.role}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
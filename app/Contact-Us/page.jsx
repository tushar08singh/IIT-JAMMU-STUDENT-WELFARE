"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactTeam = [
  {
    role: "Dean, Student Affairs",
    name: "Dr. Anup Shukla",
    email: "dean.sw@iitjammu.ac.in",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_1_bselui.jpg",
  },
   {
    role: "Associate Dean, Student Affairs",
    name: "Dr. Devi Lal",
    email: "ad.sw@iitjammu.ac.in",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg",
  },
   {
    role: "Assistant Registrar, Student Affairs",
    name: "Dr. R.P. Prajapat",
    email: "ar.sw@iitjammu.ac.in",
    image: "/assistant registrar final.png",
  },
   {
    role: "OIC, Student Affairs",
    name: "Mr Vishal Begnehal",
    email: "iitjmu80146@@iitjammu.ac.in",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768643274/WhatsApp_Image_2026-01-17_at_15.13.52_mtjplz.jpg",
  },
  {
    role: "General Secretary",
    name: "Ayush Sharma",
    email: "secretary.student.sa@iitjammu.ac.in",
    image: "/general secretary.jpeg",
  },
  {
    role: "Academic Secretary",
    name: "Aman Pathak",
    email: "academic.secretary@iitjammu.ac.in",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_2_jcbwsp.jpg",
  },
  {
    role: "Cultural Secretary",
    name: "Saumya Gupta",
    email: "cultural.secretary@iitjammu.ac.in",
    image: "/cultural secretary.jpeg",
  },
  {
    role: "Sports Secretary",
    name: "Sandeep Moond",
    email: "sports.secretary@iitjammu.ac.in",
    image: "/sports secretary.png",
  },
  {
    role: "Wellness Secretary",
    name: "Owais Ansar",
    email: "wellness.secretary@iitjammu.ac.in",
    image: "/wellness secretary.png",
  },
  {
    role: "Hostel Secretary, Boys",
    name: "Mehul gupta",
    email: "hsec.boys@iitjammu.ac.in",
    image: "/hostel secretary boys.jpeg",
  },
  {
    role: "Hostel Secretary,Girls",
    name: "Mishthi Agarwal",
    email: "hsec.girls@iitjammu.ac.in",
    image: "/hostel secretary girls.jpg",
  },
  {
    role: "Mess Secretary",
    name: "Ujjwal Gupta",
    email: "mess.secretary@iitjammu.ac.in",
    image: "/mess secretary.jpeg",
  },
  {
    role: "Academic Secretary, PG",
    name: "Chirag Prajapati",
    email: "pgacad.secretary@iitjammu.ac.in",
    image: "/pg academic secretary.jpg",
  },
];

export default function ContactUsTeam() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f9ff] min-h-screen py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-[#0b3c7d] mb-12">
          Contact Student Affairs Team
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {contactTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#0b3c7d]">
                  {member.role}
                </h3>
                <p className="text-gray-700 mt-1">{member.name}</p>

                <a
                  href={`mailto:${member.email}`}
                  className="inline-block mt-4 text-sm font-semibold text-white bg-[#0b3c7d] px-4 py-2 rounded-full hover:bg-[#082f63] transition"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

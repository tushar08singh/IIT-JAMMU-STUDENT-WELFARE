"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactTeam = [
  {
    role: "Dean, Student Affairs",
    name: "Prof. XYZ",
    email: "dean.sa@iitjammu.ac.in",
    image: "/team/dean-sa.jpg",
  },
  {
    role: "General Secretary",
    name: "Ayush Sharma",
    email: "gensec.sa@iitjammu.ac.in",
    image: "/team/general-secretary.jpg",
  },
  {
    role: "Academic Secretary",
    name: "Aman Pathak",
    email: "academic.sec@iitjammu.ac.in",
    image: "/team/academic-secretary.jpg",
  },
  {
    role: "Cultural Secretary",
    name: "Saumya Gupta",
    email: "cultural.sec@iitjammu.ac.in",
    image: "/team/cultural-secretary.jpg",
  },
  {
    role: "Sports Secretary",
    name: "Sandeep Moond",
    email: "sports.sec@iitjammu.ac.in",
    image: "/team/sports-secretary.jpg",
  },
  {
    role: "Wellness Secretary",
    name: "Owais Ansar",
    email: "wellness.sec@iitjammu.ac.in",
    image: "/team/wellness-secretary.jpg",
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

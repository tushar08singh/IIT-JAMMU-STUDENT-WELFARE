"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaInstagram } from "react-icons/fa";

/* -------------------- DATA -------------------- */

const clubs = [
  { name: "Coding Club", image: "/coding.jpg", link: "https://www.instagram.com/codeclub.iitjmu" },
  { name: "SAE Club", image: "/sae.jpg", link: "https://www.instagram.com/sae_iitjmu" },
  { name: "Robo-sapiens Club", image: "/robotics.jpg", link: "https://www.instagram.com/robosapiens_iitjammu" },
  { name: "Astriaza Club", image: "/astronomy.jpg", link: "https://www.instagram.com/astriaza_iitjmu" },
  { name: "FinTech Club", image: "/fintech.jpg", link: "https://www.instagram.com/fintech.iitjmu" }
];

const coordinators = [
  { name: "Soham Kakkar", photo: "/coding coordinator.jpg", club: "Coding Club" },
  { name: "Third Year", photo: "/sae coordinator.png", club: "SAE Club" },
  { name: "Rudransh Joshi", photo: "/sae co-coordinator.jpg", club: "SAE Club", role: "Co-Coordinator" },
  { name: "Hriday Rana", photo: "/robotics coordinator.jpg", club: "Robo-sapiens Club" },
  { name: "Vaibhav Mittal", photo: "/astriaza coordinator.jpg", club: "Astriaza Club" },
  { name: "Khushi", photo: "/fintech coordinator.png", club: "FinTech Club" }
];

const PICs = [
  { name: "Sumit Kumar Pandey", photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941883/PIC_coding_xylort.jpg", club: "Coding Club" },
  { name: "Dr. Arvind Kumar Rajput", photo: "/PIC sae.jpeg", club: "SAE Club" },
  { name: "Nalin Kumar Sharma", photo: "/PIC robotics.jpg", club: "Robo-sapiens Club" },
  { name: "Soumyadip Das", photo: "/PIC astriaza.jpg", club: "Astriaza Club" },
  { name: "Dr. Vijay Kumar Pal", photo: "/PIC fintech.jpeg", club: "FinTech Club" }
];

const clubVisionMission = {
  "Coding Club": {
    vision: "To foster a strong culture of coding, problem-solving, and software development.",
    mission: [
      "Promote competitive programming",
      "Encourage open-source contributions",
      "Conduct workshops and hackathons",
      "Prepare students for technical careers"
    ]
  },
  "SAE Club": {
    vision: "To nurture innovation and hands-on engineering in automotive technologies.",
    mission: [
      "Design and build vehicles",
      "Participate in competitions",
      "Encourage teamwork and leadership"
    ]
  },
  "Robo-sapiens Club": {
    vision: "To inspire excellence in robotics and automation.",
    mission: [
      "Develop autonomous systems",
      "Organize robotics workshops",
      "Promote innovation"
    ]
  },
  "Astriaza Club": {
    vision: "To ignite curiosity in astronomy and space sciences.",
    mission: [
      "Conduct stargazing sessions",
      "Promote astrophysics discussions",
      "Spread scientific awareness"
    ]
  },
  "FinTech Club": {
    vision: "To bridge finance and technology for real-world impact.",
    mission: [
      "Teach fintech tools",
      "Encourage research",
      "Host finance-related events"
    ]
  }
};

const secretary = {
  name: "Aman Pathak",
  photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_2_jcbwsp.jpg",
  post: "Academic Secretary"
};

/* -------------------- PAGE -------------------- */

export default function Page() {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubPICs = PICs.filter(p => p.club === selectedClub?.name);
  const clubCoordinators = coordinators.filter(c => c.club === selectedClub?.name);
  const visionData = clubVisionMission[selectedClub?.name];

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="relative max-w-[1200px] mx-auto h-[400px] rounded-xl overflow-hidden mt-6">
        <Image src="/drone.jpg" alt="Academic Council" fill className="object-cover brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
          <h1 className="text-[#003f87] text-4xl sm:text-6xl md:text-7xl font-bold">
            Academic Council
          </h1>
          <p className="text-[#003f87] text-2xl sm:text-4xl font-semibold mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* SECRETARY */}
      <div className="max-w-sm mx-auto mt-16 bg-blue-50 rounded-xl p-8 text-center shadow">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
          <Image src={secretary.photo} alt={secretary.name} fill className="object-cover" />
        </div>
        <h2 className="text-2xl font-bold text-[#003f87]">{secretary.name}</h2>
        <p className="text-gray-700">{secretary.post}</p>
      </div>

      {/* CLUBS */}
      <section className="bg-blue-50 mt-20 py-16">
        <h2 className="text-center text-4xl font-bold text-[#003f87] mb-12">
          Our Clubs
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {clubs.map((club, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition">
              <div
                className="group relative w-full aspect-[4/3] sm:h-64 cursor-pointer overflow-hidden bg-white"
                onClick={() => setSelectedClub(club)}
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-contain sm:object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] mb-4">{club.name}</h3>
                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-white bg-[#003f87] hover:bg-[#06376e] px-4 py-2 rounded-lg font-semibold transition"
                >
                  <FaInstagram size={20} /> See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedClub && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedClub(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-48">
              <Image src={selectedClub.image} alt={selectedClub.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                {selectedClub.name}
              </h2>
              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#003f87] mb-4">Person In-Charge</h3>
                    {clubPICs.map((p, i) => (
                      <div key={i} className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl mb-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image src={p.photo} alt={p.name} fill className="object-cover" />
                        </div>
                        <p className="font-semibold">{p.name}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#003f87] mb-4">Coordinators</h3>
                    {clubCoordinators.map((c, i) => (
                      <div key={i} className="flex items-center gap-4 bg-green-50 p-4 rounded-xl mb-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image src={c.photo} alt={c.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold">{c.name}</p>
                          <p className="text-sm text-gray-600">{c.role || "Coordinator"}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-[#003f87] mb-4">Vision & Mission</h3>
                  <p className="text-gray-700 mb-4">{visionData?.vision}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {visionData?.mission.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
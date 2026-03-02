"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaInstagram } from "react-icons/fa";

/* -------------------- DATA -------------------- */

const clubs = [
  { name: "Nature and Adventure Club", image: "/NAC test.png", link: "https://www.instagram.com/nac_iitjmu" },
  { name: "Kritash Club", image: "/kritash.jpg", link: "https://www.instagram.com/kritash_iitjammu" },
  { name: "RE4M Club", image: "/RE4M.jpg", link: "https://www.instagram.com/re4m_iitjammu" },
  { name: "Mesh Club", image: "/mesh.jpg", link: "https://www.instagram.com/mesh.iitjammu" },
  { name: "Ek Bharat Shreshtha Bharat", image: "/ebsb.jpg", link: "https://www.instagram.com/ebsb.iitjammu" },
  { name: "Wellbeing Club", image: "/wellbeing.jpg", link: "https://www.instagram.com/wellbeing.iitjammu" }
];

const coordinators = [
  { name: "Yash Agarwal", photo: "/nac coordinator.jpeg", club: "Nature and Adventure Club" },
  { name: "Radhika Verma", photo: "/nac co-coordinator.jpeg", club: "Nature and Adventure Club", role: "Co-Coordinator" },
  { name: "Aditya Pratap Singh", photo: "/kritash coordinator-1.jpg", club: "Kritash Club" },
  { name: "Arshpreet Kaur", photo: "/kritash coordinator-2.jpg", club: "Kritash Club" },
  { name: "Harsh kumar", photo: "/re4m coordinator.jpg", club: "RE4M Club" },
  { name: "Yaduraj Bhakar", photo: "/mesh coordinator.jpg", club: "Mesh Club" },
  { name: "Machavolu Venkata Siva Sai Subrahman", photo: "/ebsb coordinator.jpeg", club: "Ek Bharat Shreshtha Bharat" },
  { name: "Palak Aggarwal", photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941908/wellbeing_coordinator_yuazrx.jpg", club: "Wellbeing Club" }
];

const PICs = [
  { name: "Shafkat Shafi Dar", photo: "/PIC nac.jpg", club: "Nature and Adventure Club" },
  { name: "Dr. Sanchita Srivastava", photo: "/PIC kritash.jpg", club: "Kritash Club" },
  { name: "Dr. Chandan Yadav", photo: "/PIC re4m.jpg", club: "RE4M Club" },
  { name: "Mithu Baidya", photo: "/PIC mesh.jpeg", club: "Mesh Club" },
  { name: "Dr. Srishilan C", photo: "/PIC music.jpeg", club: "Ek Bharat Shreshtha Bharat" },
  { name: "Dr. Kishore Kumar Jagini", photo: "/PIC wellbeing.jpeg", club: "Wellbeing Club" }
];

const clubVisionMission = {
  "Nature and Adventure Club": {
    vision: "To promote environmental awareness and adventurous spirit among students.",
    mission: ["Organize treks", "Promote eco-friendly practices", "Encourage exploration"]
  },
  "Kritash Club": {
    vision: "To encourage creativity and innovation.",
    mission: ["Promote community service", "Organize drives", "Encourage leadership"]
  },
  "RE4M Club": {
    vision: "To drive sustainable practices.",
    mission: ["Promote recycling", "Conduct workshops", "Encourage green initiatives"]
  },
  "Mesh Club": {
    vision: "To inspire learning and innovation.",
    mission: ["Organize talks", "Encourage interdisciplinary learning"]
  },
  "Ek Bharat Shreshtha Bharat": {
    vision: "To promote unity in diversity.",
    mission: ["Cultural programs", "Celebrate diversity"]
  },
  "Wellbeing Club": {
    vision: "To foster mental and physical wellbeing.",
    mission: ["Conduct workshops", "Promote awareness"]
  }
};

const associateDean = {
  name: "Dr. Devi Lal",
  photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg",
  post: "Associate Dean (Student Affairs)"
};

const secretary = {
  name: "Ayush Sharma",
  photo: "/general secretary.jpeg",
  post: "General Secretary"
};

export default function Page() {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubPICs = PICs.filter(p => p.club === selectedClub?.name);
  const clubCoordinators = coordinators.filter(c => c.club === selectedClub?.name);
  const visionData = clubVisionMission[selectedClub?.name];

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="relative max-w-[1200px] mx-auto h-[500px] rounded-xl overflow-hidden mt-6">
        <Image src="/mainiit.png" alt="General Council" fill className="object-cover brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
          <h1 className="text-[#003f87] text-5xl sm:text-6xl md:text-8xl font-bold">
            General Council
          </h1>
          <p className="text-[#003f87] text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* ASSOCIATE DEAN + SECRETARY */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {[associateDean, secretary].map((person, i) => (
            <div
              key={i}
              className="relative group bg-blue-50 rounded-xl p-8 text-center shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 rounded-xl"></div>

              <div className="relative z-10">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h2 className="text-2xl font-bold text-[#003f87]">
                  {person.name}
                </h2>

                <p className="text-gray-700">
                  {person.post}
                </p>
              </div>
            </div>
          ))}

        </div>
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
                    className="group relative w-full aspect-[4/3] sm:h-64 cursor-pointer overflow-hidden"
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
    
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-[#003f87] mb-4">
                      {club.name}
                    </h3>
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
            onClick={(e) => e.stopPropagation()}
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

            <div className="p-6 max-h-[70vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

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

                <h3 className="text-2xl font-semibold text-[#003f87] mt-6 mb-4">Coordinators</h3>
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
      )}

      <Footer />
    </>
  );
}
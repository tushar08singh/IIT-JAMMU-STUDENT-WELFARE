"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaInstagram } from 'react-icons/fa'

const clubs = [
  { name: 'Athletics Club', image: '/athletics.png', link: 'https://www.instagram.com/athletics.iitjammu/?hl=en' },
  { name: 'Badminton Club', image: '/badminton.jpg', link: 'https://www.instagram.com/badmintonclub_iitjammu/?hl=en' },
  { name: 'Basketball Club', image: '/basketball.jpeg', link: 'https://www.instagram.com/basketball.iitjammu/?hl=en' },
  { name: 'Cricket Club', image: '/cricket.jpeg', link: 'https://www.instagram.com/cricketiitjmu/' },
  { name: 'Chess Club', image: '/chess.jpeg', link: 'https://www.instagram.com/chess.iitjammu/' },
  { name: 'Football Club', image: '/footballlogo.jpg', link: 'https://www.instagram.com/footballclub.iitjammu/?hl=en' },
  { name: 'E-Sports Club', image: '/e sports.jpg', link: 'https://www.instagram.com/esports.iitjammu/' },
  { name: 'Table Tennis Club', image: '/table tennis.jpg', link: 'https://www.instagram.com/tabletennis_iitjmu/' },
  { name: 'Volleyball Club', image: '/volleyball.jpg', link: 'https://www.instagram.com/volleyball.iitjammu/' },
  { name: 'Weightlifting Club', image: '/weightlifting.jpg', link: 'https://www.instagram.com/weightlifting_iitjammu' },
  { name: 'Indoor Sports Club', image: '/indoor.jpg', link: 'https://www.instagram.com/indoorsports.iitjammu' }
]

const coordinators = [
  { name: 'Aarav Mehta', photo: '/athletics coordinator.jpg', club: 'Athletics Club' },
  { name: 'Priya Sharma', photo: '/badminton coordinator boys.jpg', club: 'Badminton Club' },
  { name: 'Priya Sharma', photo: '/badminton coordinator girls.jpg', club: 'Badminton Club' },
  { name: 'Kavya Nair', photo: '/basketball coordinator boys.jpg', club: 'Basketball Club' },
  { name: 'Kavya Nair', photo: '/basketball coordinator girls.jpg', club: 'Basketball Club' },
  { name: 'Rohan Gupta', photo: '/cricket coordinator.jpg', club: 'Cricket Club' },
  { name: 'Sanya Kapoor', photo: '/chess coordinator boys.jpg', club: 'Chess Club' },
  { name: 'Sanya Kapoor', photo: '/chess coordinator girls.jpg', club: 'Chess Club' },
  { name: 'Ishaan Verma', photo: '/football coordinator.jpg', club: 'Football Club' },
  { name: 'Mehul Jain', photo: '/e-sports coordinator.jpg', club: 'E-Sports Club' },
  { name: 'Tanya Singh', photo: '/tt coordinator.jpg', club: 'Table Tennis Club' },
  { name: 'Karan Mehra', photo: '/volleyball coordinator boys.jpg', club: 'Volleyball Club' },
  { name: 'Karan Mehra', photo: '/volleyball coordinator girls.jpg', club: 'Volleyball Club' },
  { name: 'Divya Rao', photo: '/weightlifting coordinator.jpg', club: 'Weightlifting Club' },
  { name: 'Vivek Singh', photo: '/indoor coordinator.jpg', club: 'Indoor Sports Club' }
]

/* ---------------- VISION & MISSION ---------------- */

const clubVisionMission = {
  "Athletics Club": {
    vision:
      "To develop elite athletes who excel in performance and represent IIT Jammu with distinction at Inter-IIT tournaments.",
    mission: [
      "Encourage participation in track and field events",
      "Develop endurance, speed, and discipline",
      "Prepare athletes for Inter-IIT and other competitions"
    ]
  },

  "Badminton Club": {
    vision:
      "To build a strong badminton culture aimed at achieving excellence at Inter-IIT tournaments.",
    mission: [
      "Organize regular training sessions",
      "Promote competitive and recreational play",
      "Prepare teams for Inter-IIT and inter-college tournaments"
    ]
  },

  "Basketball Club": {
    vision:
      "To foster teamwork and competitive excellence with the goal of strong performances at Inter-IIT tournaments.",
    mission: [
      "Enhance technical and tactical skills",
      "Encourage teamwork and leadership",
      "Represent IIT Jammu in Inter-IIT and other leagues"
    ]
  },

  "Cricket Club": {
    vision:
      "To nurture cricketing talent capable of competing at the highest level in Inter-IIT tournaments.",
    mission: [
      "Develop technical, tactical, and mental skills",
      "Encourage discipline and sportsmanship",
      "Compete in Inter-IIT and inter-institute competitions"
    ]
  },

  "Chess Club": {
    vision:
      "To cultivate strategic thinkers who can achieve excellence at Inter-IIT chess tournaments.",
    mission: [
      "Promote chess culture across campus",
      "Organize training sessions and competitions",
      "Prepare players for Inter-IIT events"
    ]
  },

  "Football Club": {
    vision:
      "To build a competitive football team that performs with excellence at Inter-IIT tournaments.",
    mission: [
      "Develop physical fitness and tactical awareness",
      "Encourage teamwork and leadership",
      "Represent IIT Jammu in Inter-IIT and other competitions"
    ]
  },

  "E-Sports Club": {
    vision:
      "To establish a competitive e-sports ecosystem aimed at success in Inter-IIT e-sports tournaments.",
    mission: [
      "Organize competitive gaming sessions",
      "Encourage strategic and team-based play",
      "Prepare teams for Inter-IIT e-sports competitions"
    ]
  },

  "Table Tennis Club": {
    vision:
      "To promote excellence in table tennis with a focus on strong Inter-IIT performances.",
    mission: [
      "Conduct structured training sessions",
      "Encourage competitive participation",
      "Prepare players for Inter-IIT tournaments"
    ]
  },

  "Volleyball Club": {
    vision:
      "To build a cohesive and competitive volleyball team capable of excelling at Inter-IIT tournaments.",
    mission: [
      "Develop coordination, stamina, and teamwork",
      "Organize regular practice matches",
      "Compete in Inter-IIT and other tournaments"
    ]
  },

  "Weightlifting Club": {
    vision:
      "To develop strength athletes who represent IIT Jammu with excellence at Inter-IIT competitions.",
    mission: [
      "Promote safe and disciplined strength training",
      "Encourage physical fitness and performance",
      "Prepare lifters for Inter-IIT and national events"
    ]
  },

  "Indoor Sports Club": {
    vision:
      "To nurture talent in indoor sports with the aim of strong participation in Inter-IIT tournaments.",
    mission: [
      "Promote indoor games and recreational sports",
      "Encourage skill development and competition",
      "Prepare participants for Inter-IIT indoor sports events"
    ]
  }
};

const secretary = {
  name: "Sandeep Moond",
  photo: "/sports secretary.jpeg",
  post: "Sports Secretary"
}

const Page = () => {
  const [selectedClub, setSelectedClub] = useState(null)

  const clubCoordinators = coordinators.filter(c => c.club === selectedClub?.name)
  const visionData = clubVisionMission[selectedClub?.name]

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image alt="Sports Council" src="/sports.jpg" fill className="object-cover blur-[1.5px] brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#003f87] text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            Sports Council
          </p>
          <p className="text-[#003f87] text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Secretary */}
      {/* ASSOCIATE DEAN + SPORTS SECRETARY */}
<div className="max-w-6xl mx-auto mt-16 px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Associate Dean Card */}
    <div className="relative group bg-blue-50 rounded-xl p-8 text-center shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 rounded-xl"></div>

      <div className="relative z-10">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
          <Image
            src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg"
            alt="Dr. Devi Lal"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#003f87]">
          Dr. Devi Lal
        </h2>
        <p className="text-gray-700">
          Associate Dean (Student Affairs)
        </p>
      </div>
    </div>

    {/* Sports Secretary Card */}
    <div className="relative group bg-blue-50 rounded-xl p-8 text-center shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 rounded-xl"></div>

      <div className="relative z-10">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
          <Image
            src="/sports secretary.jpeg"
            alt="Sandeep Moond"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#003f87]">
          Sandeep Moond
        </h2>
        <p className="text-gray-700">
          Sports Secretary
        </p>
      </div>
    </div>

  </div>
</div>
      {/* Clubs */}
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
      
      {/* Modal */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4" onClick={() => setSelectedClub(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative h-48">
              <Image src={selectedClub.image} alt={selectedClub.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">{selectedClub.name}</h2>
              <button onClick={() => setSelectedClub(null)} className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold">✕</button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#003f87] mb-4">Coordinators</h3>
                  {clubCoordinators.map((c, i) => (
                    <div key={i} className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl mb-3">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image src={c.photo} alt={c.name} fill className="object-cover" />
                      </div>
                      <p className="font-semibold">{c.name}</p>
                    </div>
                  ))}
                </div>

                {/* RIGHT */}
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
  )
}

export default Page
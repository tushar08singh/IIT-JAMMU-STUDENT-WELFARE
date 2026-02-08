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
  { name: 'Weightlifting Club', image: '/weightlifting.jpg', link: 'https://www.instagram.com/weightlifting_iitjammu?igsh=bDR5Z2JmbXFsZzdv' },
  { name: 'Indoor Sports Club', image: '/indoor.jpg', link: 'https://www.instagram.com/indoorsports.iitjammu?igsh=MW10ZzBha2lkNWdyMA==' }
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

const secretary = {
  name: "Sandeep Moond", 
  photo: "/sports secretary.jpeg", 
  post: "Sports Secretary" 
}

const Page = () => {
  const [selectedClub, setSelectedClub] = useState(null)

  const clubCoordinators = coordinators.filter(c => c.club === selectedClub?.name)

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image alt="Sports Council" src="/sports.jpg" fill className="object-cover blur-[1.5px] brightness-90" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#003f87]
 text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            Sports Council
          </p>
          <p className="text-[#003f87]
 text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Secretary */}
      <div className="max-w-sm mx-auto py-16 sm:py-20 mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center px-6">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6">
          <Image src="/sports secretary.jpeg" alt={secretary.name} fill className="object-cover" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003f87] text-center">
          {secretary.name}
        </h2>
        <p className="text-gray-700 text-lg mt-1 text-center">{secretary.post}</p>
      </div>

      {/* Clubs */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">Our Clubs</h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
          {clubs.map((club, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div
                className="relative w-full h-64 cursor-pointer group"
                onClick={() => setSelectedClub(club)}
              >
                <Image src={club.image} alt={club.name} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] mb-4">{club.name}</h3>
                <a href={club.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 text-white bg-[#003f87] hover:bg-[#06376e] px-4 py-2 rounded-lg font-semibold transition">
                  <FaInstagram size={20} /> See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedClub && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedClub(null)}
        >
          <div
            className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-48">
              <Image src={selectedClub.image} alt={selectedClub.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h2 className="absolute bottom-4 left-6 text-3xl sm:text-4xl font-bold text-white">
                {selectedClub.name}
              </h2>
              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black px-3 py-1 rounded-full font-bold shadow"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
              <h3 className="text-2xl font-semibold text-[#003f87] mb-4">Coordinators</h3>
              <div className="flex flex-wrap gap-4">
                {clubCoordinators.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 w-full sm:w-[48%] md:w-[45%] hover:shadow-lg transition">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                      <Image src={c.photo} alt={c.name} fill className="object-cover" />
                    </div>
                    <p className="font-semibold text-gray-800">{c.name}</p>
                  </div>
                ))}
                {clubCoordinators.length === 0 && (
                  <p className="text-gray-500">No coordinators listed for this club.</p>
                )}
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

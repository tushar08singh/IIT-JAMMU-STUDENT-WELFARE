"use client";
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaInstagram } from 'react-icons/fa'

const clubs = [
  { name: 'Photography Club', image: '/photography.jpg', link: 'https://www.instagram.com/chitraka_iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Literary Club', image: '/literary.jpg', link: 'https://www.instagram.com/sangam.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Dance Club', image: '/dance.jpg', link: 'https://www.instagram.com/beat_street.iitjmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Drama Club', image: '/drama.jpg', link: 'https://www.instagram.com/the_dramatizers_iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Music Club', image: '/music.jpg', link: 'https://www.instagram.com/malang_iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Fine Arts Club', image: '/artihc.jpg', link: 'https://www.instagram.com/artihc.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Anime Club', image: '/anime.jpg', link: 'https://www.instagram.com/anisoul_iitjmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Cooking Club', image: '/cooking.jpg', link: 'https://www.instagram.com/cookingclub.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
]

const coordinators = [
  { name: 'Manish Kumar', photo: '/photography coordinator.jpeg', club: 'Photography Club' },
  { name: 'Sparsh Dubey', photo: '/literary coordinator.jpg', club: 'Literary Club' },
  { name: 'Akshat Rai', photo: '/dance coordinator.png', club: 'Dance Club' },
  { name: 'Anmol Ratan Srivastav', photo: '/drama coordinator.jpeg', club: 'Drama Club' },
  { name: 'Nishchay Singh', photo: 'https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941876/music_coordinator_zllcve.jpg', club: 'Music Club' },
  { name: 'Hriday Jain', photo: '/fine arts coordinator.jpeg', club: 'Fine Arts Club' },
  { name: 'Keshav Kundan Kumar', photo: '/anime coordinator.jpeg', club: 'Anime Club' },
  { name: 'Uday prakash makija ', photo: '/cooking coordinator.jpg', club: 'Cooking Club' }
]
const PICs = [
  { name: 'Sarada Prasad Gochhayat', photo: '/PIC photography.jpeg', club: 'Photography Club' },
  { name: 'Dr. Ambika Prasad Shah', photo: 'https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941886/PIC_literary_uuruj9.jpg', club: 'Literary Club' },
  
  { name: 'Nalin Kumar Sharma', photo: '/PIC dance.jpg', club: 'Dance Club' },
  { name: 'XYZ', photo: '/PIC drama.jpg', club: 'Drama Club' },
  { name: 'Dr. Vijay Kumar Pal', photo: '/PIC music.jpeg', club: 'Music Club' },
  { name: 'Dr. Vijay Kumar Pal', photo: '/PIC fine arts.jpeg', club: 'Fine Arts Club' },
  { name: 'Sunil Kumar Kashyap', photo: '/PIC anime.png', club: 'Anime Club' },
  { name: 'Arvind Kumar', photo: '/PIC cooking.jpg', club: 'Cooking Club' }
  
]

const secretary = {
  name: "Saumya Gupta",
  photo: "/secretary/riya.jpg",
  post: "Cultural Secretary"
}

const Page = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="Cultural Clubs"
          src="/anhad.jpg"
          fill
          className="object-cover blur-[1.5px] brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#ffffff] text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            Cultural Council
          </p>
          <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>

      {/* Cultural Secretary Section (VERTICAL, CENTERED) */}
      <div className="max-w-sm mx-auto py-16 sm:py-20 mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center px-6">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6">
          <Image
            src='/cultural secretary.jpeg'
            alt={secretary.name}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003f87] text-center">
          {secretary.name}
        </h2>
        <p className="text-gray-700 text-lg mt-1 text-center">{secretary.post}</p>
      </div>











      {/* Our Clubs Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Clubs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
          {clubs.map((club, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative w-full h-64 sm:h-56 md:h-64 lg:h-64">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#003f87] mb-4">{club.name}</h3>
                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 text-white bg-[#003f87] hover:bg-[#06376e] px-4 py-2 rounded-lg text-center font-semibold transition-colors duration-300"
                >
                  <FaInstagram size={20} /> See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>




<div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Club PICs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
          {PICs.map((PIC, index) => (
            <div key={index} className="bg-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4">
                <Image src={PIC.photo} alt={PIC.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] text-center">{PIC.name}</h3>
              <p className="text-gray-700 text-center mt-1">{PIC.club} </p>
            </div>
          ))}
        </div>
      </div>





      {/* Club Coordinators Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 mt-12 sm:mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003f87]">
            Club Coordinators
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="bg-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4">
                <Image src={coordinator.photo} alt={coordinator.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003f87] text-center">{coordinator.name}</h3>
              <p className="text-gray-700 text-center mt-1">{coordinator.club} Coordinator</p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Page

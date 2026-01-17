"use client";
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaInstagram } from 'react-icons/fa'

const clubs = [
  { name: 'Nature and Adventure Club', image: '/NAC test.png', link: 'https://www.instagram.com/nac_iitjmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Kritash Club', image: '/kritash.jpg', link: 'https://www.instagram.com/kritash_iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'RE4M Club', image: '/RE4M.jpg', link: 'https://www.instagram.com/re4m_iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Mesh Club', image: '/mesh.jpg', link: 'https://www.instagram.com/mesh.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Ek Bharat Shreshtha Bharat', image: '/ebsb.jpg', link: 'https://www.instagram.com/ebsb.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { name: 'Wellbeing Club', image: '/wellbeing.jpg', link: 'https://www.instagram.com/wellbeing.iitjammu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
]

const coordinators = [
  { name: 'Yash Agarwal', photo: '/nac coordinator.jpeg', club: 'Nature and Adventure Club' },
  { name: 'Radhika Verma', photo: '/nac co-coordinator.jpeg', club: 'Nature and Adventure Club', role: 'Co-Coordinator' },
  { name: 'Aditya Pratap Singh', photo: '/kritash coordinator-1.jpg', club: 'Kritash Club' },
  { name: 'Arshpreet Kaur', photo: '/kritash coordinator-2.jpg', club: 'Kritash Club' },
  { name: 'Harsh kumar', photo: '/re4m coordinator.jpg', club: 'RE4M Club' },
  { name: 'Yaduraj Bhakar', photo: '/mesh coordinator.jpg', club: 'Mesh Club' },
  { name: 'Machavolu Venkata Siva Sai Subrahman', photo: '/ebsb coordinator.jpeg', club: 'EBSB Club' },
  { name: 'Palak Aggarwal', photo: 'https://res.cloudinary.com/dveqd1vm1/image/upload/v1767941908/wellbeing_coordinator_yuazrx.jpg', club: 'Wellbeing Club' }
]

const PICs = [
  { name: 'Shafkat Shafi Dar', photo: '/PIC nac.jpg', club: 'Nature and Adventure Club' },
  { name: 'Dr. Sanchita Srivastava', photo: '/PIC kritash.jpg', club: 'Kritash Club' },

  { name: 'Dr. Chandan Yadav', photo: '/PIC re4m.jpg', club: 'RE4M Club' },
  { name: 'Mithu Baidya', photo: '/PIC mesh.jpeg', club: 'Mesh Club' },
  { name: 'Dr. Srishilan C', photo: '/PIC music.jpeg', club: 'EBSB Club' },
  { name: 'Dr. Kishore Kumar Jagini', photo: '/PIC wellbeing.jpeg', club: 'Wellbeing Club' }
]

const secretary = {
  name: "Ayush Sharma",
  photo: "ayush sharma.jpg",
  post: "General Secretary"
}

const Page = () => {
  return (
    <>
      <Header />


      <div className="relative w-full max-w-[1200px] h-[500px] mx-auto rounded-xl overflow-hidden mt-6">
        <Image
          alt="General Council Clubs"
          src="/mainiit.png"
          fill
          className="object-cover blur-[1.5px] brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16">
          <p className="text-[#ffffff] text-5xl sm:text-6xl md:text-8xl font-bold drop-shadow-lg">
            General Council
          </p>
          <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-md mt-2">
            IIT Jammu
          </p>
        </div>
      </div>


      <div className="max-w-sm mx-auto py-16 sm:py-20 mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md flex flex-col items-center px-6">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6">
          <Image
            src='/general secretary.jpeg'
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
              <p className="text-gray-700 text-center mt-1">{coordinator.club} {coordinator.role || 'Coordinator'}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page

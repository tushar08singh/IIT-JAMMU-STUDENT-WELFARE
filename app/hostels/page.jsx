"use client"

import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const hostels = [
  {
    name: "Braeg Hostel (Boys)",
    image: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747072/Ved_Prakash_jiuzku.png",
    warden: {
      name: "Dr.Ved Prakash Ranjan",
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
      name: "Mr. Ajay Kumar ",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709026/ajay_hx6u5j.png",
      phone: "+91 9858145319",
      
    },
    
  },
  {
    name: "Dedhar Hostel (Girls)",
    image: "https://source.unsplash.com/1200x800/?student,hostel,dormitory",
    warden: {
      name: "Mr. Anil Singh",
      photo: "/hostels/dedhar-warden.jpg",
      phone: "+91 9988776655",
      email: "anil.singh@iitjammu.ac.in",
    },
    caretaker: {
      name: "Mr. Ramesh Thakur",
      photo: "/hostels/dedhar-caretaker.jpg",
      phone: "+91 9090909090",
      email: "ramesh.thakur@iitjammu.ac.in",
    },
  },
  {
    name: "Canary Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?university,hostel,building",
    warden: {
      name: "Akash awale",
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
  {
    name: "Fulgar Hostel (Boys)",
    image: "https://source.unsplash.com/1200x800/?campus,hostel,rooms",
    warden: {
      name: "Krishna mohan gupta",
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
      name: "Anish koul",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709299/anish_jfjwap.jpg",
      phone: "+91 ",
      email: "caretaker.fulgar@iitjammu.ac.in"
    },
    wellnessWarden: {
      name: "Sumit Raj Ghosh",
      photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709345/sumit_kikdod.jpg",
      phone: "+91 9709111227",
      
    },
    floorWardens: [
      {
        
        name: "Gaurav Bhagat",
        photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709366/gaurav_nmxuac.jpg",
       phone: "+91 ",
        
      },
      {
        
        name: "Mohammad Israil",
        photo: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709356/israil_lnxxri.jpg",
        phone: "+91 ",
        
      },
    ],
  },
  {
    name: "Egret Hostel (Girls)",
    image: "https://source.unsplash.com/1200x800/?girls,hostel,campus",
    warden: {
      name: "Ms. Sunita Rao",
      photo: "/hostels/egret-warden.jpg",
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
]

export default function Page() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003f87]">
            Our Hostels
          </h2>
          <div className="w-24 h-1 bg-[#003f87] mx-auto mt-3 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 px-6">
          {hostels.map((hostel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row overflow-hidden"
            >
              

              <div className="flex-1 p-6 text-center">
                <h3 className="text-2xl font-bold text-[#003f87] mb-4">
                  {hostel.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {[ 
                    { role: "Warden", data: hostel.warden },
                    { role: "Wellness Warden", data: hostel.wellnessWarden },
                    { role: "Caretaker", data: hostel.caretaker },
                    { role: "Hostel Attendant", data: hostel.attendant },
                    
                    { role: "Caretaker", data: hostel.extraCaretaker },
                  ].filter(item => item.data).map((item, i) => (
                    <div key={i} className="flex gap-4 bg-blue-50 rounded-xl p-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image src={item.data.photo} alt={item.data.name} fill className="object-cover" />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-1">
                          {item.role}
                        </span>
                        <p className="font-semibold">{item.data.name}</p>
                        <p className="text-sm text-gray-600">{item.data.phone}</p>
                        <p className="text-sm text-gray-600">{item.data.email}</p>
                      </div>
                    </div>
                  ))}

                  {hostel.floorWardens &&
                    hostel.floorWardens.map((fw, i) => (
                      <div key={i} className="flex gap-4 bg-blue-50 rounded-xl p-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                          <Image src={fw.photo} alt={fw.name} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-1">
                            Floor Warden {fw.floor}
                          </span>
                          <p className="font-semibold">{fw.name}</p>
                          <p className="text-sm text-gray-600">{fw.phone}</p>
                          <p className="text-sm text-gray-600">{fw.email}</p>
                        </div>
                      </div>
                    ))}

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

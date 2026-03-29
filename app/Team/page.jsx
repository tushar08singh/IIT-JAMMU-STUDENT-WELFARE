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

        {/* ================= DEAN ================= */}
        <section className="max-w-7xl mx-auto mb-24 text-center">
          <h2 className="text-3xl font-extrabold text-[#0b3c7d] mb-10">
            Dean Student Affairs
          </h2>

          <a
            href="https://iitjammu.ac.in/faculty/~anupshukla"
            target="_blank"
            rel="noopener noreferrer"
            className="group max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden block transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_1_bselui.jpg"
                alt="Dean Student Affairs"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-2xl font-bold text-[#003f87] group-hover:underline group-hover:text-[#003f87] transition">
                Dr. Anup Shukla
              </p>
            </div>
          </a>
        </section>

        {/* ================= ASSOCIATE DEANS ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Associate Deans
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { role: "Associate Dean (Student Affairs)", name: "Dr. Devi Lal", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg", profile: "https://iitjammu.ac.in/materials-engineering/faculty-list/~devilal" },
              { role: "Associate Dean (Hostel)", name: "Dr. Yogesh Madhukarrao Nimdeo", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1772463407/ad_hostel_lram8d.jpg", profile: "https://iitjammu.ac.in/chemical-engineering/faculty.html?faculty=~yogeshmadhukarraonimdeo" },
              { role: "Associate Dean (Mess)", name: "Dr. Arvind Kumar", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/arvind_kumar_gsgvrr.jpg", profile: "https://iitjammu.ac.in/mathematics/faculty-list/~arvindkumar" },
              { role: "Associate Dean (Sports)", name: "Dr. Shiva S", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1772463418/ad_sports_m7hktw.jpg", profile: "https://iitjammu.ac.in/faculty/~shivas" }
            ].map((member, i) => (
              <a key={i} href={member.profile} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-md overflow-hidden block transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.role} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.role}</h3>
                  <p className="text-2xl font-bold text-[#003f87] group-hover:underline group-hover:text-[#003f87] transition">
                    {member.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= AR & OIC ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Student Affairs Administration
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {/* AR - no profile link, non-clickable card with hover style only */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="relative w-full aspect-[4/5]">
                <Image src="/assistant registrar final.png" alt="Dr. R. P. Prajapat" fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">Assistant Registrar (Student Activities)</h3>
                <p className="text-2xl font-bold text-[#003f87] transition">Dr. R P Prajapat</p>
              </div>
            </div>

            {/* OIC - no profile link */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="relative w-full aspect-[4/5]">
                <Image src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768643274/WhatsApp_Image_2026-01-17_at_15.13.52_mtjplz.jpg"
                  alt="Mr. Vishal Begnehal" fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">OIC Student Activities</h3>
                <p className="text-2xl font-bold text-[#003f87] transition">Dr. Vishal Begnehal</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WARDENS ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Wardens
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Dr.Krishna mohan gupta", hostel: "Fulgar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709289/krishna_gmox4k.jpg", profile: "https://www.iitjammu.ac.in/faculty/~krishnamohangupta" },
              { name: "Dr.Ved Prakash Ranjan", hostel: "Braeg Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709254/ved_ib7qob.png", profile: "https://iitjammu.ac.in/faculty/~vedprakashranjan" },
              { name: "Dr. Garima Singh", hostel: "Dedhar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709322/warden_dedhar_f7n6dg.jpg", profile: "https://iitjammu.ac.in/faculty/~garimasingh" },
              { name: "Dr. Riya Bhowmik", hostel: "Egret Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg", profile: "https://iitjammu.ac.in/civil_engineering/faculty-list/~riyabhowmik" },
              { name: "Dr. Akash awale", hostel: "Canary Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709263/akash_a5ntu2.jpg", profile: "https://iitjammu.ac.in/mechanical_engineering/faculty.html?faculty=~akashsubhashawale" }
            ].map((member, i) => (
              <a key={i} href={member.profile} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-md overflow-hidden block transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                <div className="relative w-full aspect-[4/5.5]">
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.hostel}</h3>
                  <p className="text-2xl font-bold text-[#003f87] group-hover:underline group-hover:text-[#003f87] transition">
                    {member.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= CARETAKERS ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Caretakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Mr. Md. Tabrej", hostel: "Braeg Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709242/tabrej_ezvlc2.png" },
              { name: "Tasaduq Gul", hostel: "Dedhar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709332/caretaker_dedhar_nb0d5l.jpg" },
              { name: "Majid Bashir", hostel: "Fulgar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709377/majid_jvbkdo.jpg" },
              { name: "Ms. Pooja Devi", hostel: "Egret Hostel", img: "/hostels/egret-caretaker.jpg" },
              { name: "Irfan Ahmad Teli", hostel: "Canary Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709277/irfan_plq41j.jpg" }
            ].map((member, i) => (
              // Caretakers have no profile links — hover animation only
              <div key={i} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.hostel}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STUDENT AFFAIRS COUNCIL ================= */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">Student Affairs Council</h2>
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
              <div key={i} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.role} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.role}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">{member.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">Website Developed by:</h2>
            <div className="w-32 h-1 bg-[#0b3c7d] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {[
              { name: "Tushar Singh", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774116594/WhatsApp_Image_2026-03-21_at_23.39.07_uvmbgk.jpg" },
              { name: "Apaar Gupta", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1774010364/WhatsApp_Image_2026-03-20_at_18.07.00_ac4bpk.jpg" }
            ].map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">{member.name}</p>
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
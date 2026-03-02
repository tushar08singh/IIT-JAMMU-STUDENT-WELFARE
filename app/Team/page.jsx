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

          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_1_bselui.jpg"
                alt="Dean Student Affairs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-lg font-semibold text-[#0b3c7d]">
                Dr. Anup Shukla
              </p>
            </div>
          </div>
        </section>

        {/* ================= ASSOCIATE DEANS ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Associate Deans
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { role: "Associate Dean (Student Affairs)", name: "Dr. Devi Lal", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg" },
              { role: "Associate Dean (Hostel)", name: "Dr. Yogesh Madhukarrao Nimdeo", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1772463407/ad_hostel_lram8d.jpg" },
              { role: "Associate Dean (Mess)", name: "Dr. Arvind Kumar", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771747106/arvind_kumar_gsgvrr.jpg" },
              { role: "Associate Dean (Sports)", name: "Dr. Shiva S", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1772463418/ad_sports_m7hktw.jpg" }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.role} fill className="object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.role}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WARDENS ================= */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-extrabold text-center text-[#0b3c7d] mb-12">
            Wardens
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Krishna mohan gupta", hostel: "Fulgar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709289/krishna_gmox4k.jpg" },
              { name: "Dr.Ved Prakash Ranjan", hostel: "Braeg Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709254/ved_ib7qob.png" },
              { name: "Dr. Garima Singh", hostel: "Dedhar Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709322/warden_dedhar_f7n6dg.jpg" },
              { name: "Dr. Riya Bhowmik", hostel: "Egret Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709311/warden_egret_kbovjx.jpg" },
              { name: "Akash awale", hostel: "Canary Hostel", img: "https://res.cloudinary.com/dveqd1vm1/image/upload/v1771709263/akash_a5ntu2.jpg" }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/5.5]">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.hostel}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                    {member.name}
                  </p>
                </div>
              </div>
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
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.hostel}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STUDENT AFFAIRS COUNCIL ================= */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">
              Student Affairs Council
            </h2>
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
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative w-full aspect-[4/5]">
                  <Image src={member.img} alt={member.role} fill className="object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#0b3c7d]">{member.role}</h3>
                  <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                    {member.name}
                  </p>
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
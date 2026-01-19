"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="bg-[#f5f9ff] min-h-screen py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-[#0b3c7d] mb-12">
          Our Team
        </h1>

        {/* Administration */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">
              Administration
            </h2>
            <div className="w-24 h-1 bg-[#0b3c7d] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-80">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_1_bselui.jpg"
                  alt="Dean Student Affairs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#0b3c7d]">
                  Dean Student Affairs
                </h3>
                <p className="text-gray-600">Dr. Anup Shukla</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-80">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641537/WhatsApp_Image_2026-01-17_at_14.12.59_ap6x4e.jpg"
                  alt="Associate Dean"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#0b3c7d]">
                  Associate Dean
                </h3>
                <p className="text-gray-600">Dr. Devi Lal</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-80">
                <Image
                  src="/assistant registrar final.png"
                  alt="Assistant Registrar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#0b3c7d]">
                  Assistant Registrar
                </h3>
                <p className="text-gray-600">Dr. R.P. Prajapat</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-80">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768643274/WhatsApp_Image_2026-01-17_at_15.13.52_mtjplz.jpg"
                  alt="OIC Student Affairs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#0b3c7d]">
                  OIC Student Affairs
                </h3>
                <p className="text-gray-600">Vishal Begnehal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Affairs Council */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b3c7d]">
              Student Affairs Council
            </h2>
            <div className="w-32 h-1 bg-[#0b3c7d] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="https://res.cloudinary.com/dveqd1vm1/image/upload/v1768641536/WhatsApp_Image_2026-01-17_at_14.12.59_2_jcbwsp.jpg"
                  alt="Academic Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Academic Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Aman Pathak
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/pg academic secretary.jpg"
                  alt="PG Academic Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  PG Academic Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Chirag Prajapati
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/general secretary.jpeg"
                  alt="General Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  General Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Ayush Sharma
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/cultural secretary.jpeg"
                  alt="Cultural Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Cultural Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Saumya Gupta
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/hostel secretary girls.jpg"
                  alt="Hostel Affairs Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Hostel Affairs Secretary (Girls)
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Mishthi Agarwal
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/hostel secretary boys.jpeg"
                  alt="Hostel Affairs Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Hostel Affairs Secretary (Boys)
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Mehul Gupta
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/sports secretary.png"
                  alt="Sports Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Sports Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Sandeep Moond
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/wellness secretary.png"
                  alt="Wellness Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">
                  Wellness Secretary
                </h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Owais Ansar
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full h-64">
                <Image
                  src="/mess secretary.jpg"
                  alt="Mess Secretary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#0b3c7d]">Mess Secretary</h3>
                <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                  Ujjwal Gupta
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
    <Header/>
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
                src="/team/dean.jpg"
                alt="Dean"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#0b3c7d]">Dean</h3>
              <p className="text-gray-600">Prof. XYZ</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-80">
              <Image
                src="/team/academic-dean.jpg"
                alt="Academic Dean"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#0b3c7d]">
                Academic Dean
              </h3>
              <p className="text-gray-600">Prof. ABC</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-80">
              <Image
                src="/team/registrar.jpg"
                alt="Academic Registrar"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#0b3c7d]">
                Academic Registrar
              </h3>
              <p className="text-gray-600">Dr. PQR</p>
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
                src="/general secretary.jpg"
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
                src="/team/academic-secretary.jpg"
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
                src="/team/cultural-secretary.jpg"
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
                src="/team/sports-secretary.jpg"
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
                src="/team/wellness-secretary.jpg"
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
                src="/team/Mess-secretary.jpg"
                alt="Mess Secretary"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-semibold text-[#0b3c7d]">
                Mess Secretary
              </h3>
              <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                Ujjwal Gupta
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative w-full h-64">
              <Image
                src="/team/hostel-secretary.jpg"
                alt="Hostel Affairs Secretary"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-semibold text-[#0b3c7d]">
                Hostel Affairs Secretary
              </h3>
              <p className="text-lg font-bold text-[#0b3c7d] mt-1">
                Mehul Gupta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

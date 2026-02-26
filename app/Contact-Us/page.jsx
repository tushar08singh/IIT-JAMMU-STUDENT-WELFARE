"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactUsTeam() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f9ff] min-h-screen py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-[#0b3c7d] mb-12">
          Contact Student Affairs Team
        </h1>

        {/* ================= CONTACT CARD ================= */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="relative w-full h-72">
              <Image
                src="/assistant registrar final.png"
                alt="Dr. R. P. Prajapat"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center space-y-3">
              <h3 className="text-lg font-bold text-[#0b3c7d]">
                Assistant Registrar, Student Affairs
              </h3>
              <p className="text-gray-700">Dr. R. P. Prajapat</p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Office of Student Affairs, Indian Institute of Technology
                Jammu, Jagti Campus, Jammu – 181221, J&K, India
              </p>

              <a
                href="mailto:ar.sw@iitjammu.ac.in"
                className="inline-block mt-4 text-sm font-semibold text-white bg-[#0b3c7d] px-5 py-2 rounded-full hover:bg-[#082f63] transition"
              >
                ar.sw@iitjammu.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* ================= SOCIAL MEDIA ================= */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-[#0b3c7d] mb-6">
            Connect with IIT Jammu
          </h2>

          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/school/iitjammu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-[#0b3c7d] hover:text-[#082f63] transition"
            >
              <FaLinkedin size={28} />
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://twitter.com/IITJammu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-[#0b3c7d] hover:text-[#082f63] transition"
            >
              <FaTwitter size={28} />
              <span className="text-sm font-semibold">Twitter</span>
            </a>

            <a
              href="https://www.instagram.com/iit.jammu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-[#0b3c7d] hover:text-[#082f63] transition"
            >
              <FaInstagram size={28} />
              <span className="text-sm font-semibold">Instagram</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
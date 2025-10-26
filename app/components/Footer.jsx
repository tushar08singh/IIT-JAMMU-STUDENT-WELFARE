import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    // Updated: Replaced 'bg-gray-800' with a custom inline style for #003f87
    <footer className="text-gray-300 mt-2 p-2" style={{ backgroundColor: '#003f87' }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* =======================================
           1. Logo and College Name (Left Section)
           ======================================= */}
        <div className="flex flex-col items-start space-y-3 w-full md:w-auto">
          <Link href="/" className="flex items-center transition duration-150 ease-in-out hover:opacity-80">
            {/* College Logo (Must be present for visual consistency) */}
            <Image
              src="/iit3.png" 
              alt="College Logo"
              width={300} 
              height={48}
              priority
             // className="rounded-full flex-shrink-0 bg-white p-1"
            />
           
          </Link>

          {/* Copyright Information */}
          <p className="text-sm pt-4">
            Copyright &copy; 2020 IIT Jammu, all rights reserved.
          </p>
        </div>

        {/* =======================================
           2. Student Affairs Contact Information (Right Section)
           ======================================= */}
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0 w-full md:w-auto">
            
            {/* HOS - Student Affairs Contact */}
            <div className="flex flex-col space-y-1">
                <h3 className="text-lg font-semibold text-white">HOS - Student Affairs</h3>
                <p className="text-sm">Students Welfare</p>
                <a href="tel:01912570286" className="text-blue-300 hover:text-blue-100 transition duration-150">
                    0191-257-0286
                </a>
            </div>

            {/* Student Welfare Office Contact */}
            <div className="flex flex-col space-y-1">
                <h3 className="text-lg font-semibold text-white">Student Welfare Office</h3>
                <p className="text-sm">Students Welfare</p>
                <a href="tel:01912570697" className="text-blue-300 hover:text-blue-100 transition duration-150">
                    0191-257-0697
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/images/earthier1.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-4 py-9  ">
      <div>
        <a href="#earthier">
          <img src={logo} alt="Logo" className="w-47 " />
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-8">
          <a href="#blog" className="text-gray-800 hover:text-gray-600">
            Blog
          </a>
          <a href="#who-we-are" className="text-gray-800 hover:text-gray-600">
            Who we are?
          </a>
          <a href="#sahakarya" className="text-gray-800 hover:text-gray-600">
            Sahakarya
          </a>
          <a href="#franchise" className="text-gray-800 hover:text-gray-600">
            Franchise
          </a>
        </div>
        <div>
          <button className="bg-green-300 text-gray-800 px-4 py-2 rounded-full flex items-center">
            <span role="img" aria-label="Download Icon" className="mr-2">
              📱
            </span>
            Download
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <button className="text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

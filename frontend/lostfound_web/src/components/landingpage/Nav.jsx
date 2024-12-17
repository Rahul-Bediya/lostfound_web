// import React from 'react'

// const Nav = () => {
//   return (
//     <header className="bg-white shadow-md fixed w-full z-10">
//     <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//       <div className="text-2xl font-bold text-gray-800">
//         Lost & Found Finder
//       </div>
//       <ul className="flex space-x-8 text-gray-600">
//         <li className="hover:text-blue-500 cursor-pointer">home</li>
//         <li className="hover:text-blue-500 cursor-pointer">report</li>
//         <li className="hover:text-blue-500 cursor-pointer">found</li>
//       </ul>
//       <div className="space-x-4">
//         <button className="border px-4 py-2 rounded-md text-blue-500 hover:bg-gray-100">
//           Sign Up
//         </button>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           Sign In
//         </button>
//       </div>
//     </nav>
//   </header>
//   )
// }

// export default Nav


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Lost & Found Finder
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-8 md:space-x-8 text-gray-600 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col shadow-md md:shadow-none`}
        >
          <li className="hover:text-blue-500 cursor-pointer px-4 py-2 md:py-0">
            Home
          </li>
          <li className="hover:text-blue-500 cursor-pointer px-4 py-2 md:py-0">
            Report
          </li>
          <li className="hover:text-blue-500 cursor-pointer px-4 py-2 md:py-0">
            Found
          </li>
          <div className="space-x-4 px-4 py-2 md:hidden">
            <button
              onClick={() => navigate("/register")}
              className="border w-full py-2 rounded-md text-blue-500 hover:bg-gray-100"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </ul>

        {/* Sign In and Sign Up Buttons (Desktop) */}
        {/* <div className="space-x-4 hidden md:block">
          <button
            onClick={() => navigate("/register")}
            className="border px-4 py-2 rounded-md text-blue-500 hover:bg-gray-100"
          >
            Let's Found
          </button>
          
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;


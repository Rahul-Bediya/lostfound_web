


// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { FiUser } from 'react-icons/fi';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/?search=${searchQuery}`);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//               <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
//                 <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
//                 {user && (
//                   <Link to="/post-items" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Post Items</Link>
//                 )}
//                 <form onSubmit={handleSearch} className="flex items-center">
//                   <input
//                     type="text"
//                     className="p-2 rounded-l bg-gray-700 text-white border-none focus:outline-none"
//                     placeholder="Search..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700"
//                   >
//                     Search
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="sr-only">View notifications</span>
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.37 14.885 18 13.552 18 12.5 18 10.014 16.238 8 13.5 8S9 10.014 9 12.5c0 1.052-.37 2.385-1.595 3.095L6 17h5m-3 0a3 3 0 006 0m-6 0H9" />
//               </svg>
//             </button>
//             <div className="relative ml-3">
//               {user ? (
//                 <div>
//                   <button
//                     type="button"
//                     className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     id="user-menu-button"
//                     aria-expanded={false}
//                     aria-haspopup="true"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <FiUser className="h-6 w-6 text-white" />
//                   </button>
//                   <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
//                     <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
//                     <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</button>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
//                   <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Register</Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
//           <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</Link>
//           {user && (
//             <Link to="/post-items" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Post Items</Link>
//           )}
//           <form onSubmit={handleSearch} className="flex items-center space-x-2 px-2">
//             <input
//               type="text"
//               className="p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai'; // Importing search icon from react-icons
// import { FiUser } from 'react-icons/fi'; // Importing user icon from react-icons

// const Navbar = ({ activeTab, setActiveTab }) => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/?search=${searchQuery}`);
//   };

//   return (
//     <nav className="bg-gray-100 border-b border-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Title */}
//           <Link to="/" className="flex items-center text-blue-700 font-bold text-lg">
//             LOST AND FOUND
//           </Link>

//           {/* Profile Icon */}
//           <div className="flex items-center">
//             <Link to="/profile" className="text-blue-700">
//               <FiUser className="h-6 w-6" />
//             </Link>
//           </div>
//         </div>

//         {/* Tabs for Lost and Found Items */}
//         <div className="flex justify-center space-x-4 border-b border-gray-200">
//           <button
//             onClick={() => setActiveTab('Lost')}
//             className={`text-sm font-medium px-4 py-2 ${activeTab === 'Lost' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
//           >
//             Lost Items
//           </button>
//           <button
//             onClick={() => setActiveTab('Found')}
//             className={`text-sm font-medium px-4 py-2 ${activeTab === 'Found' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
//           >
//             Found Items
//           </button>
//         </div>

//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="flex items-center mt-2 px-4">
//           <div className="relative w-full">
//             <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
//               <AiOutlineSearch />
//             </span>
//             <input
//               type="text"
//               className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Search For Items Here"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
// frontend/src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FiUser } from 'react-icons/fi';

// const Navbar = ({ activeTab, setActiveTab }) => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/?search=${searchQuery}`);
//   };

//   return (
//     <nav className="bg-gray-100 border-b border-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center text-blue-700 font-bold text-lg">
//             LOST AND FOUND
//           </Link>

//           <div className="flex items-center space-x-4">
//             <Link to="/profile" className="text-blue-700">
//               <FiUser className="h-6 w-6" />
//             </Link>
//             <Link to="/chat/1234" className="text-blue-700"> {/* Replace 1234 with dynamic chat ID */}
//               Direct Messages
//             </Link>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-4 border-b border-gray-200">
//           <button
//             onClick={() => setActiveTab('Lost')}
//             className={`text-sm font-medium px-4 py-2 ${activeTab === 'Lost' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
//           >
//             Lost Items
//           </button>
//           <button
//             onClick={() => setActiveTab('Found')}
//             className={`text-sm font-medium px-4 py-2 ${activeTab === 'Found' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
//           >
//             Found Items
//           </button>
//         </div>

//         <form onSubmit={handleSearch} className="flex items-center mt-2 px-4">
//           <div className="relative w-full">
//             <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
//               <AiOutlineSearch />
//             </span>
//             <input
//               type="text"
//               className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Search For Items Here"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
// import NotificationBell from '../chat/NotificationBell'; // Import the NotificationBell component
// import { NotificationContext } from '../chat/NotificationContext'; // Import the Notification Context

const Navbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  // const { notifications } = useContext(NotificationContext); // Access notifications from context

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchQuery}`);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Title */}
          <Link to="/" className="flex items-center text-blue-700 font-bold text-lg">
            LOST AND FOUND
          </Link>

          {/* Profile and Direct Messages */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-blue-700">
              <FiUser className="h-6 w-6" />
            </Link>
            <Link to="/chat/1234" className="text-blue-700"> {/* Replace 1234 with dynamic chat ID */}
              Direct Messages
            </Link>

            {/* Notification Bell */}
            {/* <NotificationBell /> */}
          </div>
        </div>

        {/* Tabs for Lost and Found Items */}
        <div className="flex justify-center space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('Lost')}
            className={`text-sm font-medium px-4 py-2 ${activeTab === 'Lost' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
          >
            Lost Items
          </button>
          <button
            onClick={() => setActiveTab('Found')}
            className={`text-sm font-medium px-4 py-2 ${activeTab === 'Found' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
          >
            Found Items
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center mt-2 px-4">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search For Items Here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

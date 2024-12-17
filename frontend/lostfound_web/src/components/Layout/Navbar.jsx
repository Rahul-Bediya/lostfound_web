



// // frontend/src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FiUser } from 'react-icons/fi';
// // import NotificationBell from '../chat/NotificationBell'; // Import the NotificationBell component
// // import { NotificationContext } from '../chat/NotificationContext'; // Import the Notification Context

// const Navbar = ({ activeTab, setActiveTab }) => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   // const { notifications } = useContext(NotificationContext); // Access notifications from context

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

//           {/* Profile and Direct Messages */}
//           <div className="flex items-center space-x-4">
//             <Link to="/profile" className="text-blue-700">
//               <FiUser className="h-6 w-6" />
//             </Link>
//             <Link to="/chat/1234" className="text-blue-700"> {/* Replace 1234 with dynamic chat ID */}
//               Direct Messages
//             </Link>

//             {/* Notification Bell */}
//             {/* <NotificationBell /> */}
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


// // frontend/src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FiUser } from 'react-icons/fi';
// // import NotificationBell from '../chat/NotificationBell'; // Import the NotificationBell component
// // import { NotificationContext } from '../chat/NotificationContext'; // Import the Notification Context

// const Navbar = ({ activeTab, setActiveTab }) => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   // const { notifications } = useContext(NotificationContext); // Access notifications from context

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

//           {/* Profile and Direct Messages */}
//           <div className="flex items-center space-x-4">
//             <Link to="/profile" className="text-blue-700">
//               <FiUser className="h-6 w-6" />
//             </Link>
            

//             {/* Notification Bell */}
//             {/* <NotificationBell /> */}
//           </div>
//         </div>

//         {/* Tabs for Lost, Found, and Claimed Items */}
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
//           {/* Claimed Items Button */}
//           <button
//             onClick={() => setActiveTab('Claimed')}
//             className={`text-sm font-medium px-4 py-2 ${activeTab === 'Claimed' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
//           >
//             Claimed Items
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


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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
          </div>
        </div>

        {/* Tabs for Lost, Found, and Claimed Items */}
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
          <button
            onClick={() => setActiveTab('Claimed')}
            className={`text-sm font-medium px-4 py-2 ${activeTab === 'Claimed' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
          >
            Claimed Items
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

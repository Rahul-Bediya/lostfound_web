// // src/components/Pages/Profile.js
// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// // import { AuthContext } from '../../context/AuthContext';

// const Profile = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div>
//       <h1>Profile</h1>
//       {user ? (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Assuming this function logs the user out
  };

  return (
    <div className="min-h-40vh bg-gray-100 flex py-2 justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        {user ? (
          <div>
            <p className="text-lg mb-2">Name: {user.name}</p>
            <p className="text-lg mb-4">Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

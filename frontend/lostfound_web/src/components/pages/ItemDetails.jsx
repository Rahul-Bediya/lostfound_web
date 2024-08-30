// // frontend/src/components/ItemDetails.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// Helper function to format date and time
// const formatDate = (dateString) => {
//   const options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   };
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat('en-US', options).format(date);
// };

// const ItemDetails = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/items/${ id }`);
//         setItem(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching item: ' + err.message);
//         setLoading(false);
//       }
//     };
//     fetchItem();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const handleClaim = () => {
//     navigate(`/chat/${item._id}`);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {item && (
//         <div className="bg-white p-6 rounded shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
//           <p className="text-gray-700 mb-2">{item.description}</p>
//           <p className="text-gray-500 mb-2">Category: {item.category}</p>
//           <p className="text-gray-500 mb-2">Location: {item.location}</p>
//           {item.imageUrl && (
//             <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded-lg mb-4" />
//           )}
//           <p className="text-gray-400 text-sm">Posted on: {formatDate(item.date)}</p>
//           <p className="text-gray-500 text-sm">Posted by: {item.user?.name || 'Unknown'}</p> {/* Adjust this field as per your data structure */}
//           <button
//             onClick={handleClaim}
//             className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//           >
//             Claim Item
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemDetails;


import React, { useState, useEffect ,useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleClaimItem = async () => {
    if (!user) {
      alert('Please log in to claim an item.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/chat/create', {
        itemId,
        claimerId: user._id,
      });
      navigate(`/chat/${response.data._id}`);
    } catch (error) {
      console.error('Error creating chat:', error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    // <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
    //   <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    //     <div className="px-4 py-5 sm:px-6">
    //       <h3 className="text-lg leading-6 font-medium text-gray-900">{item.title}</h3>
    //       <p className="mt-1 max-w-2xl text-sm text-gray-500">{item.description}</p>
    //     </div>
    //     <div className="border-t border-gray-200">
    //       <dl>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Category</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.category}</dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Location</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.location}</dd>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">Date</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{new Date(item.date).toLocaleDateString()}</dd>
    //         </div>
    //       </dl>
    //     </div>
    //     <div className="flex justify-end p-4">
    //       <button
    //         onClick={handleClaimItem}
    //         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    //       >
    //         Claim Item
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto p-4">
           {item && (
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-500 mb-2">Category: {item.category}</p>
              <p className="text-gray-500 mb-2">Location: {item.location}</p>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded-lg mb-4" />
              )}
              <p className="text-gray-400 text-sm">Posted on: {formatDate(item.date)}</p>
              <p className="text-gray-500 text-sm">Posted by: {item.user?.name || 'Unknown'}</p> {/* Adjust this field as per your data structure */}
              <button
                onClick={handleClaimItem}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Claim Item
              </button>
            </div>
          )}
        </div>
  );
};

export default ItemDetails;


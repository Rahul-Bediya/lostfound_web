// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

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
//   const [item, setItem] = useState(null);
//   const [isClaimed, setIsClaimed] = useState(false); // To handle the claimed state
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext); // Assuming the AuthContext provides the user data

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/items/${id}`);
//         setItem(response.data);
//         setIsClaimed(response.data.claimed); // Check if the item is already claimed
//       } catch (error) {
//         console.error('Error fetching item:', error);
//       }
//     };
//     fetchItem();
//   }, [id]);

//   const handleClaim = async () => {
//     try {
//       // Update the item to mark it as claimed
//       const response = await axios.put(`http://localhost:5000/api/items/${id}/claim`, { claimed: true });

//       // If the claim was successful, update the state
//       if (response.status === 200) {
//         setItem({ ...item, claimed: true });
//         setIsClaimed(true);
//         alert('Item claimed successfully!');
//         // Optionally, navigate to a chat or other page
//         navigate(`/chat/${item._id}`);
//       }
//     } catch (error) {
//       console.error('Error claiming item:', error);
//       alert('Failed to claim the item.');
//     }
//   };

//   if (!item) return <div>Loading...</div>;

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
//           <p className="text-gray-500 text-sm">Posted by: {item.user?.name || 'Unknown'}</p>

//           {/* If the item is already claimed, disable the button */}
//           <button
//             onClick={handleClaim}
//             disabled={isClaimed}  // Disable the button if already claimed
//             className={`mt-4 py-2 px-4 rounded ${isClaimed ? 'bg-gray-400' : 'bg-blue-600'} text-white hover:bg-blue-700`}
//           >
//             {isClaimed ? 'Item Claimed' : 'Claim Item'} {/* Change button text */}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemDetails;

import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const [isClaimed, setIsClaimed] = useState(false); // To handle the claimed state
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Assuming the AuthContext provides the user data

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/items/${id}`);
        setItem(response.data);
        setIsClaimed(response.data.claimed); // Check if the item is already claimed
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleClaim = async () => {
    try {
      // Send a PUT request to claim the item
      const response = await axios.put(`http://localhost:5000/api/items/${id}/claim`);
      
      // If the claim was successful, update the state
      if (response.status === 200) {
        setItem({ ...item, claimed: true });
        setIsClaimed(true);
        alert('Item claimed successfully!');

        // Optionally navigate to a chat page or elsewhere
        navigate(`/chat/${item._id}`);
      }
    } catch (error) {
      console.error('Error claiming item:', error);
      alert('Failed to claim the item.');
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
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
          <p className="text-gray-500 text-sm">Posted by: {item.user?.name || 'Unknown'}</p>

          {/* If the item is already claimed, disable the button */}
          <button
            onClick={handleClaim}
            disabled={isClaimed}  // Disable the button if already claimed
            className={`mt-4 py-2 px-4 rounded ${isClaimed ? 'bg-gray-400' : 'bg-blue-600'} text-white hover:bg-blue-700`}
          >
            {isClaimed ? 'Item Claimed' : 'Claim Item'} {/* Change button text */}
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;

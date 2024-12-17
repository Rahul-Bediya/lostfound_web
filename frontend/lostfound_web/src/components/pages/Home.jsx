



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ItemCard from './ItemCard';
// import { useNavigate } from 'react-router-dom';
// import { FiPlus } from 'react-icons/fi';

// const Home = ({ activeTab }) => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/items/getall');
//         const sortedItems = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setItems(sortedItems);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching items: ' + err.message);
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   const filteredItems = activeTab === 'all' ? items : items.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center h-screen">Error: {error}</div>;
//   }

//   return (
    

//     <div className="relative p-4">
    
//       <h2 className="text-xl font-semibold mb-4">Posted Items:</h2>
//       {filteredItems.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredItems.map(item => (
//             <ItemCard key={item._id} item={item} />
//           ))}
//         </div>
//       ) : (
//         <p>No items found in the selected category.</p>
//       )}

//       <button
//         onClick={() => navigate('/post-items')}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
//       >
//         <FiPlus className="h-6 w-6" />
//       </button>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ItemCard from './ItemCard';
// import { useNavigate } from 'react-router-dom';
// import { FiPlus } from 'react-icons/fi';

// const Home = ({ activeTab }) => {
//   const [items, setItems] = useState([]);
//   const [claimedItems, setClaimedItems] = useState([]); // State to store claimed items
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showClaimed, setShowClaimed] = useState(false); // State to track if claimed items should be shown
//   const navigate = useNavigate();

//   // Fetch all items on mount
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/items/getall');
//         const sortedItems = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setItems(sortedItems);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching items: ' + err.message);
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   // Fetch claimed items when the "Claimed" button is clicked
//   const fetchClaimedItems = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/items/getClaimedItems');
//       const sortedClaimedItems = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//       setClaimedItems(sortedClaimedItems);
//       setShowClaimed(true);
//     } catch (err) {
//       setError('Error fetching claimed items: ' + err.message);
//     }
//   };

//   // Filter items based on activeTab or show claimed items
//   const filteredItems = activeTab === 'all' ? items : items.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

//   const itemsToDisplay = showClaimed ? claimedItems : filteredItems;

//   if (loading) {
//     return <div className="flex items-center justify-center h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center h-screen">Error: {error}</div>;
//   }

//   return (
//     <div className="relative p-4">
//       <h2 className="text-xl font-semibold mb-4">Posted Items:</h2>

//       {/* Render Claimed Button */}
//       <button
//         onClick={fetchClaimedItems}
//         className="bg-green-600 text-white rounded-full p-2 mb-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
//       >
//         Show Claimed Items
//       </button>

//       {itemsToDisplay.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {itemsToDisplay.map(item => (
//             <ItemCard key={item._id} item={item} />
//           ))}
//         </div>
//       ) : (
//         <p>No items found in the selected category or claimed items.</p>
//       )}

//       <button
//         onClick={() => navigate('/post-items')}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
//       >
//         <FiPlus className="h-6 w-6" />
//       </button>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

const Home = ({ activeTab }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        let res;
        if (activeTab === 'Claimed') {
          res = await axios.get('http://localhost:5000/api/items/claimed');
        }
         else {
          res = await axios.get('http://localhost:5000/api/items/getall');
        }
        const sortedItems = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setItems(sortedItems);
        setLoading(false);
      } catch (err) {
        setError('Error fetching items: ' + err.message);
        setLoading(false);
      }
    };

    fetchItems();
  }, [activeTab]); // Run the useEffect whenever activeTab changes

  const filteredItems = activeTab === 'all' ? items : items.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="relative p-4">
      <h2 className="text-xl font-semibold mb-4">Posted Items:</h2>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p>No items found in the selected category.</p>
      )}

      <button
        onClick={() => navigate('/post-items')}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        <FiPlus className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Home;

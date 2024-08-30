


// frontend/src/components/Home.js
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
//         const res = await axios.get('http://localhost:3000/api/items/getall');
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
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="relative p-4">
//       <h2 className="text-xl font-semibold mb-4">Posted Items:</h2>
//       {filteredItems.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      try {
        const res = await axios.get('http://localhost:3000/api/items/getall');
        const sortedItems = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setItems(sortedItems);
        setLoading(false);
      } catch (err) {
        setError('Error fetching items: ' + err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

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

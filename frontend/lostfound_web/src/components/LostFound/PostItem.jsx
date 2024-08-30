



// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const PostItem = () => {
//   const { user, loading } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'Lost',
//     location: '',
//     image: null,
//     user:''
//   });

//   const navigate = useNavigate();

//   const { title, description, category, location, image } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onFileChange = e => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!user) {
//       console.error('User not authenticated');
//       return;
//     }

//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       };

//       const formDataWithImage = new FormData();
//       formDataWithImage.append('title', title);
//       formDataWithImage.append('description', description);
//       formDataWithImage.append('category', category);
//       formDataWithImage.append('location', location);
//       formDataWithImage.append('image', image);
//       formDataWithImage.append('user', user._id); // Ensure user._id is available

//       const res = await axios.post('http://localhost:5000/api/items/post', formDataWithImage, config);

//       console.log(res.data);
//       console.log(user._id)

//       // Reset form data to initial state
//       setFormData({
//         title: '',
//         description: '',
//         category: 'Lost',
//         location: '',
//         image: null
//       });

//       // Redirect to home page or any other route
//       navigate('/');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold mb-4 text-center">Post Lost/Found Item</h2>
//       <form onSubmit={onSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={onChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Description:</label>
//           <textarea
//             name="description"
//             value={description}
//             onChange={onChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Category:</label>
//           <select
//             name="category"
//             value={category}
//             onChange={onChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="Lost">Lost</option>
//             <option value="Found">Found</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={location}
//             onChange={onChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Image:</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={onFileChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//         <button
//           type="button"
//           onClick={() => navigate('/')}
//           className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-4"
//         >
//           Back
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostItem;




import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PostItem = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Lost',
    location: '',
    image: null,
  });

  const navigate = useNavigate();

  const { title, description, category, location, image } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token
        },
      };

      const formDataWithImage = new FormData();
      formDataWithImage.append('title', title);
      formDataWithImage.append('description', description);
      formDataWithImage.append('category', category);
      formDataWithImage.append('location', location);
      formDataWithImage.append('image', image);
      formDataWithImage.append('userId', user._id); // Include user ID in the request body

      console.log('User ID:', user._id); // Log user ID before sending request

      const res = await axios.post('http://localhost:3000/api/items/post', formDataWithImage, config);

      console.log(res.data);

      setFormData({
        title: '',
        description: '',
        category: 'Lost',
        location: '',
        image: null,
      });

      navigate('/');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Post Lost/Found Item</h2>
      <form onSubmit={onSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category:</label>
          <select
            name="category"
            value={category}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-4"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default PostItem;

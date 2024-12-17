// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';  // Import Link for navigation
// import { AuthContext } from '../context/AuthContext';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { register } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     try {
//       await register(name, email, password);
//     } catch (err) {
//       console.error(err);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2">Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New phone state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await register(name, email, phone, password); // Pass phone to register
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;





import React, { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/landingpage/Landing';
import Home from './components/pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import Profile from './components/pages/Profile';
import Navbar from './components/Layout/Navbar';
import PostItem from './components/LostFound/PostItem';
import { AuthContext } from './components/context/AuthContext';
import ItemDetails from './components/pages/ItemDetails';

function App() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('all'); // Initialize to 'all' to show all items initially

  return (
    <div>
      {/* Show Navbar only if the user is logged in */}
      {user && <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />}

      <Routes>
        {/* Default Route: Redirect to MainContent if no user */}
        <Route path="/" element={!user ? <Landing /> : <Navigate to="/home" />} />

        {/* Auth Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />

        {/* Home Route after authentication */}
        <Route path="/home" element={user ? <Home activeTab={activeTab} /> : <Navigate to="/" />} />

        {/* Protected Routes */}
        <Route
          path="/post-items"
          element={
            <ProtectedRoute>
              <PostItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/item/:id"
          element={
            <ProtectedRoute>
              <ItemDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;


// import React, { useContext, useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Landing from './components/landingpage/Landing';
// import Home from './components/pages/Home';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProtectedRoute from './components/Layout/ProtectedRoute';
// import Profile from './components/pages/Profile';
// import Navbar from './components/Layout/Navbar';
// import PostItem from './components/LostFound/PostItem';
// import { AuthContext } from './components/context/AuthContext';
// import ItemDetails from './components/pages/ItemDetails';
// // Import your chart components
// import ChartPage from './components/pages/ChatRoom'; // Assuming you have a ChartPage component

// function App() {
//   const { user } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('all'); // Initialize to 'all' to show all items initially

//   return (
//     <div>
//       {/* Show Navbar only if the user is logged in */}
//       {user && <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />}

//       <Routes>
//         {/* Default Route: Redirect to Landing if no user */}
//         <Route path="/" element={!user ? <Landing /> : <Navigate to="/home" />} />

//         {/* Auth Routes */}
//         <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
//         <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />

//         {/* Home Route after authentication */}
//         <Route path="/home" element={user ? <Home activeTab={activeTab} /> : <Navigate to="/" />} />

//         {/* Protected Routes */}
//         <Route
//           path="/post-items"
//           element={
//             <ProtectedRoute>
//               <PostItem />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/item/:id"
//           element={
//             <ProtectedRoute>
//               <ItemDetails />
//             </ProtectedRoute>
//           }
//         />

//         {/* New route for the chart page */}
//         <Route
//           path="/charts"
//           element={
//             <ProtectedRoute>
//               <ChartPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;


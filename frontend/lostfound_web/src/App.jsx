



// import React, { useContext,useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/pages/Home';
// // import About from './components/pages/About';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProtectedRoute from './components/Layout/ProtectedRoute';
// import Profile from './components/pages/Profile';
// import Navbar from './components/Layout/Navbar';
// import PostItem from './components/LostFound/PostItem';
// import { AuthContext } from './components/context/AuthContext';

// function App() {
//   const { user } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('lost');

//   return (
//     <div>
//       {user && <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />}
//       <Routes>
//         <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
//         <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
//         <Route path="/" element={user ? <Home activeTab={activeTab} /> : <Navigate to="/login" />} />
//         {/* <Route path="/about" element={
//           <ProtectedRoute>
//             <About />
//           </ProtectedRoute>
//         } /> */}
//         <Route path="/post-items" element={
//           <ProtectedRoute>
//             <PostItem />
//           </ProtectedRoute>
//         } />
//         <Route path="/profile" element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React, { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import Profile from './components/pages/Profile';
import Navbar from './components/Layout/Navbar';
import PostItem from './components/LostFound/PostItem';
import { AuthContext } from './components/context/AuthContext';
import ItemDetails from './components/pages/ItemDetails';
import ChatRoom from './components/chat/ChatRoom';
// import Chatpage from './components/Chat/Chatpage';


function App() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('all'); // Initialize to 'all' to show all items initially

  return (
    <div>
      {user && <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />}
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Home activeTab={activeTab} /> : <Navigate to="/login" />} />
        <Route path="/item/:id" element={<ItemDetails/>} />
        <Route path="/chat/:chatId" element={<ChatRoom/>} />
        {/* <Route path="/chats" element={<Chatpage/>}/> */}

        <Route path="/post-items" element={
          <ProtectedRoute>
            <PostItem />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;


// src/App.jsx

// src/App.jsx

// import React, { useContext } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProtectedRoute from './components/Layout/ProtectedRoute';
// import Profile from './components/pages/Profile';
// import Navbar from './components/Layout/Navbar';
// import PostItem from './components/LostFound/PostItem';
// import { AuthContext } from './components/context/AuthContext';

// function App() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div>
//       {user && <Navbar />}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={ <Home /> } />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               <About />
//             </ProtectedRoute>
//           }
//         />
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
//       </Routes>
//     </div>
//   );
// }

// export default App;










 // <div>
    //   <Navbar/>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/post-items" element={<PostItem/>} /> */}

    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //      <ProtectedRoute path="/" element={<Home />} />
    //      <ProtectedRoute path="/about" element={<About />} />
    //     <ProtectedRoute path="/post-items" element={<PostItem />} />
        
    //     <Route path="/profile" element={
    //       <ProtectedRoute>
    //         <Profile/>
    //       </ProtectedRoute>
    //     } />
    //   </Routes>
    // </div>


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProtectedRoute from './components/Layout/ProtectedRoute';
// import Profile from './components/pages/Profile';
// import Navbar from './components/Layout/Navbar';
// import PostItem from './components/LostFound/PostItem';
// // import { AuthProvider } from './context/AuthContext';
// // import { AuthProvider } from './components/context/AuthContext.jsx';

// const App = () => {
//   return (
    
//        <div>
//         <Navbar />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <ProtectedRoute path="/" element={<Home />} />
//           <ProtectedRoute path="/about" element={<About />} />
//           <ProtectedRoute path="/post-items" element={<PostItem />} />
//           <ProtectedRoute path="/profile" element={<Profile />} />
//         </Routes>
//     </div>
//   );
// };

// export default App;


// const App = () => {
//   const location = useLocation();
//   const noNavbarRoutes = ['/login', '/register'];

//   return (
//     <AuthProvider>
//       {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         } />
//         <Route path="/about" element={
//           <ProtectedRoute>
//             <About />
//           </ProtectedRoute>
//         } />
//         <Route path="/post-items" element={
//           <ProtectedRoute>
//             <PostItem />
//           </ProtectedRoute>
//         } />
//         <Route path="/profile" element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </AuthProvider>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default AppWrapper;

// // src/components/Layout/ProtectedRoute.js
// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { user } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;


// src/components/Layout/ProtectedRoute.jsx

// src/components/Layout/ProtectedRoute.jsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;


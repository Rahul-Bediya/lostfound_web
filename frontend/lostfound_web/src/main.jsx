// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom';
// // import ReactDOM from 'react-dom';


// import App from './App.jsx'
// import './index.css'
// import { AuthProvider } from './components/context/AuthContext.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <Router>
//     <AuthProvider>
//       <App />
//     </AuthProvider> 
//   </Router>
// </React.StrictMode>,
// )


// src/main.jsx

// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './components/context/AuthContext';
// import { NotificationProvider } from './components/chat/NotificationContext';
// import ChatProvider from './components/context/ChatProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <AuthProvider>
        {/* <NotificationProvider> */}
    
        <App />
        {/* </NotificationProvider> */}
    
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

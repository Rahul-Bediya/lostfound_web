// frontend/src/context/NotificationContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import io from 'socket.io-client';

const NotificationContext = createContext();

const socket = io('http://localhost:3000', {
  auth: {
    token: localStorage.getItem('token'), // Use the token for authentication
  }
});

const NotificationProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user) {
      socket.on('notification', (notification) => {
        setNotifications((prev) => [...prev, notification]);
      });

      return () => {
        socket.off('notification');
      };
    }
  }, [user]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };

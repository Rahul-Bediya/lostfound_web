// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/users/me');
      setUser(res.data);
    } catch (err) {
      console.error(err);
      setToken(null);
      localStorage.removeItem('token');
    }
  };

  const register = async (name, email, password) => {
    try {
      await axios.post('http://localhost:3000/api/users/register', { name, email, password });
      alert('Registration successful, please log in.');
      navigate('/login');
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:3000/api/users/login', { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/users/logout');
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
      navigate('/login');
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

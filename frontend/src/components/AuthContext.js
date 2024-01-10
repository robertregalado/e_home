// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      if (response.data.token) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Propagate the error to consuming components
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/logout');
      if (response.data.message === 'Logout successful') {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Logout failed:', error);
      throw error; // Propagate the error to consuming components
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


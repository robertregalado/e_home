
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await login(username, password);
    console.log('API Response:', response);

    if (response && response.data && response.data.token) {
      const token = response.data.token;

      if (token) {
        // Token exists, do something with it
        console.log('Token exists:', token);

        // For example, you can decode the token to get its content
        const decodedToken = jwt_decode(token);
        console.log('Decoded Token:', decodedToken);
      } else {
        // Token does not exist
        console.log('Token does not exist');
      }

      // Save the token in a secure manner (e.g., in a cookie or local storage)
      localStorage.setItem('jwtToken', token);

      // Redirect to the user's profile or another authenticated route
      window.location.href = '/profile';

      // Reset the input fields
      setUsername(''); // Reset the username field
      setPassword(''); // Reset the password field

    } else {
      console.error('Login failed: Invalid response structure');
    }
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};


  const handleLogout = () => {
    localStorage.removeItem('jwtToken');

    // Redirect to the login page
    window.location.href = '/login'; // Redirect using URL change
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields and submit button */}
          <div className="mb-3">
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
        </form>
        {/* Logout button */}
        {localStorage.getItem('jwtToken') && (
          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
        {/* Registration link */}
        <p className="mt-4">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;



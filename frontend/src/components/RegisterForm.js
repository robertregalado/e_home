import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleAvatarUrlChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        username,
        email,
        password,
        bio,
        avatar_url: avatarUrl,
      });

      if (response.status === 201) {
        console.log('Registration successful');
        // Optionally, you can redirect the user to a login page here
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setBio('');
        setAvatarUrl('');

      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 mt-12">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
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
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
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
          <div className="mb-3">
            <label htmlFor="bio" className="block text-sm font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={handleBioChange}
              className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="avatarUrl" className="block text-sm font-medium">
              Avatar URL
            </label>
            <input
              type="text"
              id="avatarUrl"
              value={avatarUrl}
              onChange={handleAvatarUrlChange}
              className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { isLoggedIn } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchProfile();
    }
  }, [isLoggedIn]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/profile');
      setUserProfile(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError('Error fetching profile'); // Set error message
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); // Clear the token
    // You can also perform additional logout logic here if needed
    // For example, you might want to reset the state or perform cleanup
  };

  return (
    <div className="profile-container">
      {isLoggedIn ? (
        <div>
          <h1>User Profile</h1>
          {error ? (
            <div>Error: {error}</div>
          ) : userProfile ? (
            <div>
              <h1>{userProfile.name}</h1>
              <p>@{userProfile.username}</p>
              <p>{userProfile.bio}</p>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Logout
              </button>
            </div>
          ) : (
            <div>Loading profile...</div>
          )}
        </div>
      ) : (
        <div className="text-center">
          Please <Link to="/login" className="text-blue-500">log in</Link> to view your profile.
        </div>
      )}
    </div>
  );
};

export default Profile;






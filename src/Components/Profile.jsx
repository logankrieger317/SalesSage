import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../globals';
import UsersDropdown from './UsersDropdown';

export default function Profile({ userId }) {
  const [profileData, setProfileData] = useState({});
  
  
  

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/profile/:user`);
        setProfileData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error Fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
    <Header />
    <UsersDropdown userId={userId}/>
    <div>
      <h1>{profileData.firstName} {profileData.lastName}</h1>
      <p>{profileData.email}</p>
      <p>{profileData.about}</p>
      {/* <img src={profileData.photo} alt="Profile" /> */}
      <p>{profileData.street}, {profileData.city}, {profileData.state} {profileData.zip}</p>
      <p>Notifications: {profileData.notifications ? 'On' : 'Off'}</p>
    </div>
    <Footer />
    </>
  );
}
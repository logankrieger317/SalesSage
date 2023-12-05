import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../globals';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function UsersDropdown({userId}) {
    const [user, setUser] = useState([]);
    const [people, setPeople] = useState([]);
    
    

    useEffect(() => {
        async function getUser() {
        const response = await axios.get(`${BASE_URL}/users/`);
        const userIds = response.data.map(user => user.user);
        setUser(userIds);
        setPeople(response.data);
    }
    getUser();
    }, []);

console.log(user); 
console.log(people);
console.log(userId) 

const handleSelectionChange = async (event) => {
  const selectedUserId = event.target.value;
  try {
    const response = await axios.get(`${BASE_URL}/profiles/${selectedUserId}`);
    setProfileData(response.data);
  } catch (error) {
    console.error('Error Fetching Profile Data:', error);
  }
};

return (
    <>
    <select className='w-full h-fit' onChange={handleSelectionChange}> {people.map((person, index) => (
      <option key={index} value={person._id}>
        {person.name}
      </option>
    ))}
  </select>

    </>
    
  )
}

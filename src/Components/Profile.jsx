import Header from './Header'
import Footer from './Footer'
import { BASE_URL } from '../../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Profile() {
  // All of my crazy state variables.
  const [user, setUser] = useState([]);
  const [editedUser, setEditedUser] = useState([]);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAbout, setEditedAbout] = useState('');
  const [editedPhoto, setEditedPhoto] = useState('');
  const [editedStreet, setEditedStreet] = useState('');
  const [editedCity, setEditedCity] = useState('');
  const [editedState, setEditedState] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedZip, setEditedZip] = useState('');
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${BASE_URL}/users`);
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
  user.name && user.name.toLowerCase().includes(filter.toLowerCase())
);


  useEffect(() => {
  async function getUser() {
    const response = await axios.get(`${BASE_URL}/profiles/`);
    setUser(response.data);
  }
  getUser();
}, []);
  
const handleUsernameChange = (event) => {
  setEditedUsername(event.target.value);
};

  
  const handleUserChange = (event) => {
    setEditedUser(event.target.value);
    console.log(event.target.value);
  };

const handlePasswordChange = (event) => {
  setEditedPassword(event.target.value);
}

const handleFirstNameChange = (event) => {
  setEditedFirstName(event.target.value);
}

const handleLastNameChange = (event) => {
  setEditedLastName(event.target.value);
}

const handleEmailChange = (event) => {
  setEditedEmail(event.target.value);
}

const handleAboutChange = (event) => {
  setEditedAbout(event.target.value);
}

const handlePhotoChange = (event) => {
  setEditedPhoto(event.target.value);
}

const handleStreetChange = (event) => {
  setEditedStreet(event.target.value);
}

const handleCityChange = (event) => {
  setEditedCity(event.target.value);
}

const handleStateChange = (event) => {
  setEditedState(event.target.value);
}

const handleZipChange = (event) => {
  setEditedZip(event.target.value);
}

const handleNotificationsChange = (event) => {
  setEditedNotifications(event.target.value);
}


 const handleUserSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post(`${BASE_URL}/profiles/`, {
      user: editedUser,
      username: editedUsername,
      password: editedPassword,
      firstName: editedFirstName,
      lastName: editedLastName,
      email: editedEmail,
      about: editedAbout,
      photo: editedPhoto,
      street: editedStreet,
      city: editedCity,
      state: editedState,
      zip: editedZip,
      
    });

   
    const response = await axios.get(`${BASE_URL}/profiles/`);
    setUser(response.data);
    console.log(response.data)
    setEditedUser(response.data.username);
    setShowAddUser(false);
  } catch (error) {
    console.error('Error Creating Profile:', error);
  }
}

  
   const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/profiles/${id}`);
    const response = await axios.get(`${BASE_URL}/profiles/`);
    setUser(response.data);
  } catch (error) {
    console.error('Error Deleting Profile:', error);
  }
}
 
const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${BASE_URL}/profiles/${editingId}`, {
        user: editedUser,
        username: editedUsername,
        password: editedPassword,
        firstName: editedFirstName,
        lastName: editedLastName,
        email: editedEmail,
        about: editedAbout,
        photo: editedPhoto,
        street: editedStreet,
        city: editedCity,
        state: editedState,
        zip: editedZip,
        

      });

      const response = await axios.get(`${BASE_URL}/profiles/`);
      setUser(response.data);
      setEditedUser('');
      setEditedUsername('');
      setEditingId(null);
      setEditedFirstName('');
      setEditedLastName('');
      setEditedEmail('');
      setEditedAbout('');
      setEditedPhoto('');
      setEditedStreet('');
      setEditedCity('');
      setEditedState('');
      setEditedZip('');
      setEditedNotifications('');
    } catch (error) {
      console.error('Error Editing Profile:', error);
    }
  }

  const showMyClick = () => {
    console.log('Add Profile Clicked')
    setShowAddUser(true);
    
  }

  const filterSelect = () => {
    console.log('Filter Selected')
    setFilter(filter)
  }
  
  
  return (
    <>
    <Header />

    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Profiles</h1>
          <p className="mt-2 text-sm text-gray-700">
           
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" onClick={showMyClick}
          >
            Add Profile
          </button>
        </div>
        <div className='w-100'>
        <h1 className="text-base font-semibold leading-6 text-gray-900 mt-2">Filter Users</h1>
        <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200 w-11/12'
        type="text" 
        value= {filter} 
        onChange={e => setFilter(e.target.value)} 
        placeholder="Filter by name"
        />
         <ul>
          {filteredUsers.map(user => (
          <li key={user.id}>{user.name}
        </li> 

      ))}
    </ul>
    <div className='flex flex-row mt-2'>
    <button className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"  onClick={() => filterSelect()} >Search</button>
    <button className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ml-2"  onClick={() => setFilter('')}>Clear</button>
    </div>
    </div>
      </div>
      {showAddUser && ( 
        <form onSubmit={handleUserSubmit} className='m-1 shadow-2xl w-100 flex flex-col items-center justify-center '>
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="user" value={editedUser?.user} onChange={handleUserChange} placeholder="ID" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="username" value={editedUsername?.username} onChange={handleUsernameChange} placeholder="Username" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="password" value={editedPassword?.password} onChange={handlePasswordChange} placeholder="Password" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="firstName" value={editedFirstName?.firstName} onChange={handleFirstNameChange} placeholder="First Name" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="lastName" value={editedLastName?.lastName} onChange={handleLastNameChange} placeholder="Last Name" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="email" value={editedEmail?.email} onChange={handleEmailChange} placeholder="Email" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="about" value={editedAbout?.about} onChange={handleAboutChange} placeholder="About" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="photo" value={editedPhoto?.photo} onChange={handlePhotoChange} placeholder="Photo" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="street" value={editedStreet?.street} onChange={handleStreetChange} placeholder="Street" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="city" value={editedCity?.city} onChange={handleCityChange} placeholder="City" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="state" value={editedState?.state} onChange={handleStateChange} placeholder="State" />
          <input className='shadow-2xl m-2 p-2 rounded-xl h-6  bg-green-200' type="text" name="zip" value={editedZip?.zip} onChange={handleZipChange} placeholder="Zip" />
        
          <div className='flex flex-row m-4'>
          <button className="block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-2xl hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 m-2" type="submit" >Submit</button>
          <button className="block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-2xl hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600  m-2" onClick={() => setShowAddUser(false)}>Cancel</button>
          </div>
        </form>
      )}
      <div className="mt-8 flex items-center justify-center">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="w-100 divide-y divide-gray-300 overflow-auto">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Username
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    First Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Photo
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    About
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Street
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    City
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    State
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Zip
                  </th>
                  

                 
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                 {Array.isArray(user) && user.map((user) => (
      <tr key={user.name}>
        
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {editingId === user._id ? (
            <input type="text" value={editedUser} onChange={handleUserChange} placeholder='Name' />
          ) : (
            user.user
          )}
        </td>
        
        
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedUsername} onChange={handleUsernameChange} placeholder='Username' />
          ) : (
            user.username
          )}
        </td> 
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedFirstName} onChange={handleFirstNameChange} placeholder='First Name' />
          ) : (
            user.firstName
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedLastName} onChange={handleLastNameChange} placeholder='Photo' />
          ) : (
            user.lastName
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedPhoto} onChange={handlePhotoChange} placeholder='Photo' />
          ) : (
            user.photo
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedEmail} onChange={handleEmailChange} placeholder='Email' />
          ) : (
            user.email
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedAbout} onChange={handleAboutChange} placeholder='About' />
          ) : (
            user.about
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedStreet} onChange={handleStreetChange} placeholder='Street' />
          ) : (
            user.street
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedCity} onChange={handleCityChange} placeholder='City' />
          ) : (
            user.city
          )}
        </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="text" value={editedState} onChange={handleStateChange} placeholder='State' />
          ) : (
            user.state
          )}
        </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {editingId === user._id ? (
            <input type="number" value={editedZip} onChange={handleZipChange} placeholder='Zip' />
          ) : (
            user.zip
          )}
        </td>
         

        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
          {editingId === user._id ? (
            <button className='m-1 text-green-600 shadow-md border-solid border-green-300 border-2 rounded-lg p-1' onClick={handleEditSubmit}>Save</button>
          ) : (
            <button className='m-1 text-green-600 shadow-md border-solid border-green-300 border-2 rounded-lg p-1' onClick={() => setEditingId(user._id)}>Edit</button>
          )}
          <button className='m-1 text-green-600 shadow-md border-solid border-green-300 border-2 rounded-lg p-1' onClick={() => handleDelete(user._id)}>Delete</button>
        </td>

      </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

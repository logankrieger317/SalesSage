import Header from './Header'
import Footer from './Footer'
import { BASE_URL } from '../../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'





export default function Admin() {
  
  const [user, setUser] = useState([]);
  const [editedUser, setEditedUser] = useState([]);
  const [editedUsername, setEditedUsername] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  useEffect(() => {
  async function getUser() {
    const response = await axios.get(`${BASE_URL}/users/`);
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

 const handleUserSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post(`${BASE_URL}/users/`, {
      user: editedUser,
      username: editedUsername,
    });

   
    const response = await axios.get(`${BASE_URL}/users/`);
    setUser(response.data);
    setEditedUser(response.data.username);
    setShowAddUser(false);
  } catch (error) {
    console.error('Error Creating User:', error);
  }
}

  
   const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/users/${id}`);
    const response = await axios.get(`${BASE_URL}/users/`);
    setUser(response.data);
  } catch (error) {
    console.error('Error Deleting User:', error);
  }
}
 
const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${BASE_URL}/users/${editingId}`, {
        user: editedUser,
        username: editedUsername,
      });

      const response = await axios.get(`${BASE_URL}/users/`);
      setUser(response.data);
      setEditedUser('');
      setEditedUsername('');
      setEditingId(null);
    } catch (error) {
      console.error('Error Editing User:', error);
    }
  }



  const showMyClick = () => {
    console.log('Add User Clicked')
    setShowAddUser(true);
    
  }
  
  
  
  
  return (
    <>
    <Header />
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" onClick={showMyClick}
          >
            Add user
          </button>
        </div>
      </div>
      {showAddUser && ( 
        <form onSubmit={handleUserSubmit}>
          <input type="text" name="name" value={editedUser?.name} onChange={handleUserChange} placeholder="Name" />
          <input type="text" name="username" value={editedUsername?.username} onChange={handleUsernameChange} placeholder="Username" />
          <button className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" type="submit" >Submit</button>
        </form>
      )}
      <div className="mt-8 flex items-center justify-center">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Username
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

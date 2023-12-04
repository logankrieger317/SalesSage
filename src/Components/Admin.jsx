import Header from './Header'
import Footer from './Footer'
import { BASE_URL } from '../../globals'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { get } from 'mongoose'


export default function Admin() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  
  useEffect(() => {
  async function getUser() {
    const response = await axios.get(`${BASE_URL}/users/`);
    console.log('response.data:', response.data); // log the entire response data
    console.log('id:', id); // log the id
    const user = response.data.find(user => user.id === id);
    console.log(user._id); // log the specific user data
    setUser(response.data.user);
    console.log('user:', user); // log the specific user data
    console.log('user.name:', user.user); // log the specific user data
    console.log('user.username:', user.username); // log the specific user data
    console.log('user._id:', user._id); // log the specific user data
  }
  getUser();
}, [id]);
  
   

  const handleUserChange = (event) => {
    setEditedUser(event.target.value);
    console.log(event.target.value);
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.put(`${BASE_URL}/users/${id}`, {
      user: editedUser,
    }); console.log(response.data.user)
    setUser(response.data.user);
  }

 
  
  const people = [
      { name: '', username:'' },
      { name: 'Logan Krieger', username:'' },
  
  ]

  const showMyClick = () => {
    console.log('You clicked the button!')
    console.log(user)
    
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
      <div className="mt-8 flow-root ">
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
                {people.map((person) => (
                  <tr key={person.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.username}</td> 
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-green-600 hover:text-green-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
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

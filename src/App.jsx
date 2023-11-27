import { useState, useContext } from 'react'
import './App.css'
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import POS from './Components/POS'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Reports from './Components/Reports'
import UserSettings from './Components/UserSettings'
import Admin from './Components/Admin'


function App() {

  
  return (
  <>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/POS" element={<POS />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/usersettings" element={<UserSettings />} />
       
      </Routes>
    </div>
  
  </>
  )
}

export default App

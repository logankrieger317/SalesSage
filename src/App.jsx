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
import Help from './Components/Help'
import About from './Components/About'
import Contact from './Components/Contact'
import Terms from './Components/Terms'
import Privacy from './Components/Privacy'
import BarProducts from './Components/BarProducts'
import DogProducts from './Components/DogProducts'
// import { CartContext } from './Components/CartContext'
import Cart from './Components/Cart'
import { ThemeContext } from './Components/ThemeContext'



function App() {

  const { theme } = useContext(ThemeContext);

  return (
  <>
    <div>
     <div className={theme === 'dark' ? 'dark' : ''}>
      
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/POS" element={<POS />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/barproducts" element={<BarProducts />} />
        <Route path="/dogproducts" element={<DogProducts />} />
        <Route path="/cart" element={<Cart />} />


       
      </Routes>
      </div>
    </div>
  
  </>
  )
}

export default App

import { useState, useContext } from 'react'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
// import Main from './components/Main'







function App() {

  
  return (
    <>
      <div className=" h-screen flex content-center items-center justify-center bg-red ">
        <Home />
        <Header />
      </div>
    </>
  )
}

export default App

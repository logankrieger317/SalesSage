import { useState, useContext } from 'react'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import { Route } from 'react-router-dom'
// import Main from './components/Main'







function App() {

  
  return (
    <>
      <div className=" h-screen flex content-center items-center justify-center bg-green-100 ">
        <header className="App-header">
        <Header />
        </header>
        <main>
        
        </main>
      </div>
    </>
  )
}

export default App

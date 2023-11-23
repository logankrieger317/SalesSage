import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Components/Home'



const Main = () => {

    const [userData, setUserData] = useState(null)

    return (
        <>
       <div className="main">
           <div className='header-container'>
            
               
           </div>
           <Routes>
               
               <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
               <Route path='/about' element={<About userData={userData} setUserData={setUserData}/>}/>
                <Route path='/contact' element={<Contact userData={userData} setUserData={setUserData}/>}/>
                <Route path='/login' element={<Login userData={userData} setUserData={setUserData}/>}/>
                
   
           </Routes>
          
       </div>

       </>
   )

}
export default Main
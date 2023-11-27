import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Components/Home'
import POS from './Components/POS'
import Reports from './Components/Reports'



const Main = () => {

    // const [userData, setUserData] = useState(null)

    return (
        <>
       <div className="main">
           <div className='header-container'>
            
               
           </div>
           <Routes>
               
               {/* <Route path='/' element={<Home userData={userData} setUserData={setUserData}/>}/>
               <Route path='/POS' element={<POS userData={userData} setUserData={setUserData}/>}/>
                <Route path='/Reports' element={<Reports userData={userData} setUserData={setUserData}/>}/> */}
                
                
            <Route path="/POS" element={<POS/>} />

   
           </Routes>
          
       </div>

       </>
   )

}
export default Main
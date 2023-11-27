import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Components/Home'





const Main = () => {

    // const [userData, setUserData] = useState(null)

    return (
        <>
       <div className="main">
           <div className='header-container'>
            
               
           </div>
           <Routes>
               <Routes>
                <Route path="/" element={<Home/>} />

               </Routes>    
            <Route path="/POS" element={<POS/>} />

   
           </Routes>
          
       </div>

       </>
   )

}
export default Main
import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  
    return(
        <>
        <Header/>
        <div className="bg-green-100 h-screen w-screen  flex align-center justify-center ">
            <div className="border-solid border-yellow-500  border-2 flex align-center justify-center w-4/5  top-14">
                <h1>This is The Home Screen </h1>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;

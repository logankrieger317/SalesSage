import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };

  return (
    <>
      <Header />
      <div className="bg-green-100 ml-14 h-3/4 w-3/4 l- flex felx-col flex-wrap align-center justify-center ">
        <h1 className="text-4xl text-center">{getCurrentDate()}</h1>
        
        <div className="flex flex-wrap justify-center">
          
          

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
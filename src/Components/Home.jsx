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
      <p></p>
      <div className="bg-green-100  h-3/4 w-3/4  flex felx-col flex-wrap align-baseline justify-left ">
        <h5 className="text-2lg text-center ml-10">{getCurrentDate()}</h5>
        <div className="flex flex-wrap justify-center">
          
          

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
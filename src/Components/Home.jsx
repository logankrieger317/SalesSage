import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Calendar from "./Calendar";
import Calendar from "react-calendar";
import Charts from "./Charts";


const Home = () => {
  
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };

  return (
    <>
      <Header />
      <p></p>
      <div className="bg-green-100  "> 
        <h5 className="text-2lg text-center text-lg font-bold mt-2 mb-2">DTG: {getCurrentDate()}</h5>
        <div className="flex flex-col flex-wrap item-center justify-center w-100%  ">
        <Calendar className="flex items-center flex-col justify-center p-4 mb-2 mt-2 font-bold shadow-2xl"/>
        </div>
        <div className=" font-bold text-lg" >
        <h1 className=" flex items-center justify-center mb-4 mt-4 shadow-2xl ">Sales Vs. Labor</h1>
        <Charts  />
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </>
  );
};

export default Home;
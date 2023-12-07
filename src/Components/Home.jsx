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
      <div className="flex flex-col flex-wrap items-center justify-center w-100% h-100%">
      <p className="font-bold text-2xl mb-2"> Day 13 Labs </p>
      </div>
      <div className="bg-green-100  "> 
        <h5 className="text-2lg text-center text-lg font-bold mt-2 mb-2">DTG: {getCurrentDate()}</h5>
        <div className="flex flex-col flex-wrap item-center justify-center w-100%  ">
        <Calendar className="flex items-center flex-col justify-center p-4 mb-2 mt-2 font-bold shadow-2xl"/>
        </div>
        
        <div className="flex flex-row justify-center mt-4">
          <button type="button"
                    className="w-fit flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-2xl mb-4"
                  >
            Time Off Request
          </button>
          <button type="button"
                    className="w-fit flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-2xl mb-4 ml-2"
                  >
            Trade Shift Request
          </button>
        </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center w-100% h-100%">
      <p className="font-bold text-2xl mb-2 border-"> Daily Report </p>
      </div>
         <div className=" font-bold text-lg" >
        <h1 className=" flex items-center justify-center mb-4 mt-4 shadow-2xl ">Sales Vs. Labor</h1>
        <Charts  />
        </div>
      {/* </div> */}

      <Footer />
    </>
  );
};

export default Home;
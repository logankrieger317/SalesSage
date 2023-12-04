import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calendar from "./Calendar";
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
        <h5 className="text-2lg text-center ">{getCurrentDate()}</h5>
        <div className="flex flex-col flex-wrap item-center justify-center w-100%  ">
        {/* <Calendar/> */}

  
        <Charts  />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
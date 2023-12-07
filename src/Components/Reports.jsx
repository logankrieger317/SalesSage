import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Charts from "./Charts";

const Reports = () => {
  
    return(
        <>
        <Header/>
            <div className="flex flex-col flex-wrap items-center shadow-2xl w-screen">
                <h1 className="mb-6  font-bold text-2xl" >Reports </h1>
            </div>
            <div className="bg-green-100 shadow-2xl m-1">
                <Charts/>
            </div>
            <Footer/>
        </>
    )
}

export default Reports;

import React from "react";
import phone2 from"../assets/images/phone2.png"
import appstore from "../assets/images/appstore.png"
import googleplay from"../assets/images/googleplay.png"
const Home7 = () => {
  return (
    
    <div className="w-full h-[568px] flex justify-center bg-gray-100 p-[48px_96px]">
   
      <div className="w-[1320px] h-[470px] relative  rounded-3xl bg-green-400 overflow-hidden  ">

      
        <div className="w-[700px] h-[800px]  absolute left-[-100px] top-[-140px]  bg-green-700 rotate-45 rounded-[100px] ">
        </div>
        <div className="w-[850px] h-[850px] absolute right-[-500px] top-[-1px] bg-orange-100  rotate-45 rounded-[100px] "></div>
        <div className="absolute pt-14 pl-8  w-[583px] h-[310.6px] top-[74px] left-[45px]  ">
            <h1 className="text-3xl  ">Instant Order
            & <br/>Hassle-free Delivery</h1>
            <div className="flex  space-x-4 mb-8 pt-6 ">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
          </div>
          <img src={phone2} alt="organic" className="absolute w-[345.4px] h-[479.6px] top-[34px] left-[900px] "/>
      </div>
    </div>
    
  );
};

export default Home7;

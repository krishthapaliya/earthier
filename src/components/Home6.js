import React from "react";
import Organic from"../assets/images/organic `1 1.png"
const Home6 = () => {
  return (
    
    <div className="w-full h-[568px] flex justify-center bg-gray-100 p-[48px_96px]">
   
      <div className="w-[1320px] h-[470px] relative  rounded-3xl bg-green-400 overflow-hidden  ">

      
        <div className="w-[700px] h-[800px]  absolute left-[-100px] top-[-200px]  bg-orange-100 rotate-45 rounded-[100px] ">
        </div>
        <div className="w-[850px] h-[850px] absolute right-[-500px] top-[-100px] bg-green-700  rotate-45 rounded-[100px] "></div>
        <div className="absolute pt-14 pl-8  w-[583px] h-[310.6px] top-[74px] left-[45px]  ">
            <h1 className="text-2xl font-bold ">Discover</h1>
            <p className="font-bold text-lg pb-4">The Power of Organic
            Products<br/> for a Healthier You</p>
            <p className="pb-8 text-sm">
            Having a pet means you have more joy, a new friend, a happy person who will always be with  you to have fun. We have 200+ different pets that can meet your needs!
            </p>
          
          <div>
          <button className=" bg-bg2 text-gray-800 px-4 py-2  rounded-full flex items-center">
          <span role="img" aria-label="Download Icon" className="mr-2">
            📱
          </span>
          Tour the app!
        </button>
          </div>
          </div>
          <img src={Organic} alt="organic" className="absolute w-[345.4px] h-[479.6px] top-[34px] left-[848px] "/>
      </div>
    </div>
    
  );
};

export default Home6;

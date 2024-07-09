import React from "react";
import image from "../assets/images/phone2.png";
const Home4 = () => {
  return (
    <div className="flex justify-between  gap-10  px-[130px] py-16 bg-gray-100">
    
      <div className="items-center py-[130px] ">
        <h1 className="text-3xl font-bold pb-5">Artisanal</h1>
        <p className="pb-5">
        We would like to build a digital marketplace for products that<br/> are crafted by skilled artisans using traditional methods, often by<br/> hand, with an emphasis on quality, attention to detail, and authenticity.</p>
        <button className="bg-green-300 text-gray-800 px-4 py-2 rounded-full flex items-center">
          <span role="img" aria-label="Download Icon" className="mr-2">
            📱
          </span>
          Tour the app!
        </button>
      </div>
      <div className="bg-green-50 w-[560px] h-auto px-32 pt-8 gap-24 rounded-3xl">
        <img src={image} alt="image1 " className=" w-full h-full" />
      </div>
    </div>
  );
};

export default Home4;

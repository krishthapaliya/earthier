import React from "react";
import image from "../assets/images/phone2.png";
const Home3 = () => {
  return (
    <div className="flex justify-between  gap-10  px-[130px] py-16 ">
      <div className="bg-green-50 w-[560px] h-auto px-32 pt-8 gap-24 rounded-3xl">
        <img src={image} alt="image1 " className=" w-full h-full" />
      </div>
      <div className="items-center py-[130px] ">
        <h1 className="text-3xl font-bold pb-5">Wellness</h1>
        <p className="pb-5">
          We support your pursuit of wellness, involving a combination of <br />
          lifestyle choices, self-care practices, and a proactive approach to
          <br /> overall well-being.{" "}
        </p>
        <button className="bg-green-300 text-gray-800 px-4 py-2 rounded-full flex items-center">
          <span role="img" aria-label="Download Icon" className="mr-2">
            📱
          </span>
          Tour the app!
        </button>
      </div>
    </div>
  );
};

export default Home3;

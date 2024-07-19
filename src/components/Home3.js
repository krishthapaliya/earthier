import React from "react";
import image from "../assets/images/phone2.png";
const Home3 = () => {
  return (
    <div className="flex flex-col-reverse xl:flex  xl:flex-row items-center xl:justify-between  gap-10  xl:px-[130px] sm:px-14 px-3 pb-10 ">
      <div className="bg-green-300 xl:w-[560px] xl:h-[500px] sm:w-[500px] w-[300px] h-[350px] xl:px-32 sm:px-16 px-8 pt-8 gap-24 rounded-3xl">
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

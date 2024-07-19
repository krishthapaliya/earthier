import React from "react";
import image from "../assets/images/phone2.png";
const Home2 = () => {
  return (
    <div className="flex flex-col xl:flex  xl:flex-row items-center xl:justify-between  gap-10  xl:px-[130px] sm:px-14 px-3 bg-gray-100 pb-10 ">
      <div className="items-center xl:py-[130px] sm:py-11 py-6 ">
        <h1 className="text-3xl font-bold pb-5">Sustainable Lifestyle</h1>
        <p className="pb-5">
          {" "}
          We would like to promote a way of living, encourage social
          <br /> behaviors, create climate-friendly choices, and support
          equitable
          <br /> socio-economic development and better quality of life for all.
        </p>
        <button className="bg-green-300 text-gray-800 px-4 py-2 rounded-full flex items-center">
          <span role="img" aria-label="Download Icon" className="mr-2">
            📱
          </span>
          Tour the app!
        </button>
      </div>
      <div className="bg-green-300 xl:w-[560px] xl:h-[500px] sm:w-[500px] w-[300px] h-[350px] xl:px-32 sm:px-16 px-8 pt-8 gap-24 rounded-3xl">
        <img src={image} alt="image1 " className=" w-full h-full" />
      </div>
    </div>
  );
};

export default Home2;